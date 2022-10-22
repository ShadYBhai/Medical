const { model, Schema } = require("mongoose");

const productSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
    },

    name: String,
    description: String,
    size: String,
    image: [String],
    min_quantity: {
      type: Number,
      default: 0,
    },
    base_price: {
      type: Number,
      default: 0,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
    subcategory: {
      type: Schema.Types.ObjectId,
      ref: "subcategory",
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "brand",
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
