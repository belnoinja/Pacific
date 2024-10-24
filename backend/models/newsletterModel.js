import mongoose from "mongoose"

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure the email is unique
  },
});

const Newsletter =  mongoose.model("Newsletter",newsletterSchema);

export default Newsletter;