import crypto from "crypto";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import nodemailer from "nodemailer"; // For sending emails
// import { log } from "console";

// Generate JWT token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Setup your email service (using Nodemailer)
const transporter = nodemailer.createTransport({
  service: "Gmail", // Use your service like Gmail, SendGrid, etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email password
  },
});

// Route to handle Forgot Password
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    
    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }

    // Generate a reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    // Set token and expiration on the user object
    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour from now

    await user.save();

    // Send an email with the reset token (a link)
    const resetUrl = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;
    
    const message = `
      <h2>Password Reset Request</h2>
      <p>You have requested a password reset. Click the link below to reset your password:</p>
      <a href="${resetUrl}">Reset Password</a>
      <p>If you did not request this, please ignore this email.</p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Password Reset Request",
      html: message,
    });

    res.json({ success: true, message: "Password reset email sent!" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error occurred" });
  }
}
  
  const resetPassword = async (req, res) => {
    try {
      // Get the token from the URL
      const { resetToken } = req.params;
      
      // Hash the token so it can be compared with the stored hashed token
      const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  
      // Find the user by the hashed token and check if it's not expired
      const user = await userModel.findOne({
        resetPasswordToken: hashedToken,
        resetPasswordExpires: { $gt: Date.now() }, // Check if token is still valid
      });
  
      if (!user) {
        return res.status(400).json({ success: false, message: "Token is invalid or has expired" });
      }
  
      // Hash the new password before saving it
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
      // Update the user's password and clear the reset token fields
      user.password = hashedPassword;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;
  
      await user.save();
  
      res.json({ success: true, message: "Password has been reset successfully!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Error resetting password" });
    }

  

};



export { forgotPassword ,resetPassword};
