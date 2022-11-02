import express from "express";
import { sellOrderItems, updatesellOrderItems } from "../controllers/sellOrderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, sellOrderItems);
router.route("/:id").patch(protect, updatesellOrderItems);

export default router;
