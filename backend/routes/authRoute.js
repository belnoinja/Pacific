import express from "express";
import {forgotPassword,resetPassword} from '../controllers/authController.js'

const authRouter = express.Router();

authRouter.post("/forgotpassword",forgotPassword);
authRouter.put("/resetpassword/:resetToken", resetPassword);


export default authRouter;