import asyncHandler from "express-async-handler";
import SellOrders from './../model/SellOrders';

const sellOrderItems = asyncHandler(async (req, res) => {
  try {
    const order = await SellOrders.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

const updatesellOrderItems = asyncHandler(async (req, res) => {
  try {
    const order = await SellOrders.updateOne({ _id: req.body.params }, req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export { sellOrderItems, updatesellOrderItems };
