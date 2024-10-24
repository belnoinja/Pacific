import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";

// Update user profile
const updateUserProfile = async (req, res) => {
    try {
        const { userId, name, email } = req.body;
        const user = await userModel.findById(userId);
        
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        user.name = name || user.name;
        user.email = email || user.email;
        await user.save();

        res.json({ success: true, message: "Profile updated successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Fetch user orders
const getUserOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await orderModel.find({ userId });
        res.json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export { updateUserProfile, getUserOrders };
