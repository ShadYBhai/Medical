import asyncHandler from "express-async-handler";
import Product from "../model/ProductModel.js";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});
const addProducts = asyncHandler(async (req, res) => {
  const products = await Product.create(req.body);

  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
});

export { getProductById, getProducts, addProducts };
