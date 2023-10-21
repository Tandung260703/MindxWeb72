const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const roleSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    permission: [
      {
        key: { type: String },
        action: {
          type: String,
          enum: ["READ", "WRITE"],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Role = mongoose.model("Roles", roleSchema);
module.exports = Role;
