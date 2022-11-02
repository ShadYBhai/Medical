import express from "express";
import {
  getProductById,
  getProducts,
  addProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(getProducts);
router.route("/").post(addProducts);

router.route("/:id").get(getProductById);

export default router;
