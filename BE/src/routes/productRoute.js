const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");
const multerMiddleware = require("../middlewares/multerMiddleware.js");

// @route GET /api/v1/products
// @query page
// @desc Get all products
// @access Public
router.get("/", productController.index);

// @route GET /api/v1/products/create
// @desc Create product
// @access Private - Product manager
router.post(
  "/create",
  authMiddleware.verifyToken,
  authMiddleware.verifyPermission("product", "WRITE"),
  multerMiddleware.up().single("thumbnail"),
  productController.create
);

// @route Delete /api/v1/products/delete/:id
// @desc Delete product
// @access Private - Product manager
router.delete(
  "/delete/:id",
  authMiddleware.verifyToken,
  authMiddleware.verifyPermission("product", "WRITE"),
  productController.delete
);

// @route Update /api/v1/products/update/:id
// @desc Update product
// @access Private - Product manager
router.put(
  "/update/:id",
  authMiddleware.verifyToken,
  authMiddleware.verifyPermission("product", "WRITE"),
  multerMiddleware.up().single("thumbnail"),
  productController.update
);

// @route Detail /api/v1/products/detail/:id
// @desc Detail product
// @access Public - Product manager
router.get("/detail/:id", productController.detail);

module.exports = router;
