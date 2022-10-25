import express from "express";

import category from "./data/category.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import syrups from "./data/syrups.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/products", productRoutes);

app.get("/api/category", (req, res) => {
  res.json(category);
});
app.get("/api/category/:id", (req, res) => {
  const cat = category.find((c) => c._id === req.params.id);
  res.json(cat);
});

app.get(`/api/productsByCategory/${category.category}`, (req, res) => {
  const cat = syrups.map((syrup) => syrup);
  res.json(cat);
});

// app.get("/api/category/tablets", (req, res) => {
//   const tab = tablets.find((t) => t._id === req.params.id);
//   res.json(cat);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}`));
