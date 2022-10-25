import mongoose from "mongoose";
const Schema = mongoose.Schema;

const reviewSchema = mongoose.Schema(
  {
    name: { type: String },
    rating: { type: Number },
    comment: { type: String },
  },
  {
    timestamps: true,
  }
);
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
      type: String,
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

    reviews: [reviewSchema],

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
