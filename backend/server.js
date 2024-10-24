import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import authRouter from "./routes/authRoute.js"
import newsletterRouter from "./routes/newsletterRoute.js";
import profileRouter from "./routes/profileRoute.js";
//App config
const app = express();
const port = process.env.PORT || 4000;

//Middlewares
app.use(express.json());

const allowedOrigins = [
  process.env.FRONTEND_URL,
  process.env.ADMIN_URL // Add your admin panel origin here
];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));


connectDB();
connectCloudinary();

//Api Endpoints

app.use("/api/user",userRouter)
app.use("/api/product",productRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.use("/api/auth",authRouter)
app.use('/api', newsletterRouter);

app.use("/api/profile", profileRouter);


app.get("/",(req,res)=>{
    res.send("Api working");
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})