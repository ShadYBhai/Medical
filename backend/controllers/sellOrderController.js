import asyncHandler from "express-async-handler";
import SellOrders from "./../model/SellOrders.js";

const sellOrderItems = asyncHandler(async (req, res) => {
  try {
    req.body.user = req.user._id;
    const order = await SellOrders.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

const updatesellOrderItems = asyncHandler(async (req, res) => {
  try {
    const order = await SellOrders.updateOne(
      { _id: req.body.params },
      req.body
    );
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

const getSellOrders = asyncHandler(async (req, res) => {
  try {
    console.log(req.user._id, "req.user._id");
    const order = await SellOrders.find({ user: req.user._id });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export { sellOrderItems, updatesellOrderItems, getSellOrders };
