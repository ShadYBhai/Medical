import mongoose from "mongoose";
const Schema = mongoose.Schema;

const sellSchema = new Schema(
    {
        name: String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "user",
        },
        quantity: Number,
        unit: String,
        expiry: Date,
        shippingAddress: {
            address: { type: String, required: true },
            city: { type: String, required: true },
            postalCode: { type: String, required: true },
            country: { type: String, required: true },
        },
        isPickup: {
            type: Boolean,
            required: true,
            default: false,
        },
        is_delete: {
            type: Number,
            enum: [0, 1],
            default: 0,
        },
    },
    { timestamps: true }
);
const SellOrders = mongoose.model("sellorders", sellSchema);
export default SellOrders;
