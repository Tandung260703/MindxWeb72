const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const tokenSchema = new Schema(
  {
    token: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Token = mongoose.model("Tokens", tokenSchema);
module.exports = Token;
