import mongoose from "mongoose";
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: String,
    created_by: {
      type: Schema.Types.ObjectId,
      ref: "admin",
    },
    image: String,
    is_delete: {
      type: Number,
      enum: [0, 1],
      default: 0,
    },
  },
  { timestamps: true }
);
const Category = mongoose.model("category", categorySchema);
export default Category;
