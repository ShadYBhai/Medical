import express from "express";
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";
//@DESCRIPTION : FETCH ALL PRODUCTS
//@ROUTE: GET /API/PRODUCTS
//@ACCESS: PUBLIC ROUTE

const router = express.Router();

router.route("/").get(getProducts);
//@DESCRIPTION : FETCH SIN GLE PRODUCT
//@ROUTE: GET /API/PRODUCTS/:ID
//@ACCESS: PUBLIC ROUTE

router.route("/:id").get(getProductById);

export default router;
