const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderDetailSchema = new Schema(
  {
    order: {
      type: Schema.Types.ObjectId,
      ref: "Orders",
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Products",
    },
    unitPrice: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const OrderDetail = mongoose.model("OrderDetails", orderDetailSchema);

module.exports = OrderDetail;
