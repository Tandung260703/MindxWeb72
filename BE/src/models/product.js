const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    priceSale: {
      type: Number,
      default: 0,
    },
    isHot: {
      type: Boolean,
      default: true,
    },
    thumbnail: {
      type: String,
    },
    quantity: {
      type: String,
      default: 0,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Categories",
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brands",
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Products", productSchema);

module.exports = Product;
