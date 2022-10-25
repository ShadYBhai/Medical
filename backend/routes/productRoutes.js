import express from "express";
import Product from "../model/ProductModel.js";
import AsyncHandler from "express-async-handler";

//@DESCRIPTION : FETCH ALL PRODUCTS
//@ROUTE: GET /API/PRODUCTS
//@ACCESS: PUBLIC ROUTE
const router = express.Router();

router.get(
  "/",
  AsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
  })
);
//@DESCRIPTION : FETCH SINGLE PRODUCT
//@ROUTE: GET /API/PRODUCTS/:ID
//@ACCESS: PUBLIC ROUTE
router.get(
  "/:id",
  AsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product Not Found" });
    }
  })
);

export default router;
