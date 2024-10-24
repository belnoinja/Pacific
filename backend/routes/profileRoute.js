import express from "express";
import { updateUserProfile, getUserOrders } from "../controllers/profileController.js";
import authUser from "../middleware/auth.js";

const profileRouter = express.Router();

// Route to update user profile (name, email)
profileRouter.put("/update", authUser, updateUserProfile);

// Route to get user orders
profileRouter.get("/orders", authUser, getUserOrders);

export default profileRouter;
