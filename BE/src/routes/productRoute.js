const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

// @route GET /api/v1/products
// @query page
// @desc Get all products
// @access Public
router.get("/", productController.index);

// @route GET /api/v1/products/create
// @desc Create product
// @access Private - Product manager
router.get(
  "/create",
  authMiddleware.verifyToken,
  authMiddleware.verifyPermission("product", "WRITE"),
  productController.create
);

module.exports = router;
