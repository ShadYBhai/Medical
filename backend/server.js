import express from "express";
import products from "./data/products.js";
import category from "./data/category.js";
import dotenv from "dotenv";

const app = express();

app.get("/", (req, res) => {
  res.send("api is running");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
app.get("/api/category", (req, res) => {
  res.json(category);
});
app.get("/api/category/:id", (req, res) => {
  const cat = category.find((c) => c._id === req.params.id);
  res.json(cat);
});
// app.get("/api/category/tablets", (req, res) => {
//   const tab = tablets.find((t) => t._id === req.params.id);
//   res.json(cat);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}`));
