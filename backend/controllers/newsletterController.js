import nodemailer from 'nodemailer';
import NewsletterSubscriber from '../models/newsletterModel.js'; // Your MongoDB model

// Controller function to subscribe a user
const subscribeUser = async (req, res) => {
  const { email } = req.body;

  // Validate email (simple validation)
  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Invalid email address." });
  }

  try {
    // Check if the email already exists in the database
    const existingSubscriber = await NewsletterSubscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: "This email is already subscribed." });
    }

    // Save the email to the database
    const newSubscriber = new NewsletterSubscriber({ email });
    await newSubscriber.save();

    // Send a confirmation email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Subscription Confirmation',
      text: 'Thank you for subscribing to our newsletter!',
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Subscription successful! Please check your email for confirmation." });
  } catch (error) {
    console.error("Error subscribing user:", error);
    return res.status(500).json({ message: "An error occurred while subscribing." });
  }
};

export { subscribeUser };
