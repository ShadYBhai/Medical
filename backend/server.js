import express from "express";

// import category from "./data/category.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import syrups from "./data/syrups.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import Product from "./model/ProductModel.js";
import Category from "./model/Category.js";
// const Product = require("./model/ProductModel");
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/users", userRoutes);

app.use("/api/products", productRoutes);

app.use("/api/orders", orderRoutes);

app.get("/api/category", async (req, res) => {
  const cat = await Category.find();
  res.json(cat);
});
app.get("/api/category/:id", async (req, res) => {
  try {
    const cat = await Category.find({ category: req.params.id });
    res.json(cat);
  } catch (error) {
    res.json(error.message);
    console.log(error.message);
  }
});

app.get(`/api/productsByCategory/:id`, async (req, res) => {
  try {
    const data = await Product.find({ category: req.params.id });
    // const cat = syrups.map((syrup) => syrup);
    res.json(data);
  } catch (error) {
    res.send({ msg: error.message });
    console.log(error.message);
  }
});

// app.get("/api/category/tablets", (req, res) => {
//   const tab = tablets.find((t) => t._id === req.params.id);
//   res.json(cat);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}`));
