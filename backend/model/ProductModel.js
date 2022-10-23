const { model, Schema } = require("mongoose");

const productSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      ref: "brand",
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },

    description: {
      type: String,
    },

    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: 0,
      default: 0,
    },

    size: String,
    min_quantity: {
      type: Number,
      default: 0,
    },

    subcategory: {
      type: Schema.Types.ObjectId,
      ref: "subcategory",
    },

    is_delete: {
      type: Number,
      enum: [0, 1],
      default: 0,
    },
  },
  { timestamps: true }
);
module.exports = model("product", productSchema);
