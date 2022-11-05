import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
    },

    image: {
      type: String,
    },
    brand: {
      type: String,
      ref: "brand",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
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

    // subcategory: {
    //   type: Schema.Types.ObjectId,
    //   ref: "subcategory",
    // },

    is_delete: {
      type: Number,
      enum: [0, 1],
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
