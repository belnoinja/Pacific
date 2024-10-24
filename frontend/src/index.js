import mongoose from "mongoose"
import { products } from "./assets/assets.js";
import  productModel  from "../../backend/models/productModel.js";

const MONGO_URL = "mongodb://127.0.0.1:27017/test";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await productModel.deleteMany({});
  products.data = products.data.map((obj) => ({...obj,owner: "670269d5b18c181e38d96660"}))
  await productModel.insertMany(products.data);
  console.log("data was initialized");
};

initDB();
