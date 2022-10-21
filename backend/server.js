const express = require("express");
const products = require("./data/products");
const category = require("./data/category");

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
app.listen(5000, console.log("server running on port 5000"));
