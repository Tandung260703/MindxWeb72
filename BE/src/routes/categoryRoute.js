const express = require("express");

const router = express.Router();

const categoryController = require("../controllers/categoryController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

// @route GET /api/v1/categories
// @query page, size
// @desc Get all categories
// @access Public
router.get("/", categoryController.index);

// @route GET /api/v1/categories/create
// @desc Create category
// @access Private - Product manager
router.post(
  "/create",
  authMiddleware.verifyToken,
  authMiddleware.verifyPermission("product", "WRITE"),
  categoryController.create
);

// @route GET /api/v1/categories/update
// @params id
// @desc Update category
// @access Private - Product manager
router.put(
  "/update/:id",
  authMiddleware.verifyToken,
  authMiddleware.verifyPermission("product", "WRITE"),
  categoryController.update
);

// @route GET /api/v1/categories/delete
// @params id
// @desc Delete category
// @access Private - Product manager
router.delete(
  "/delete/:id",
  authMiddleware.verifyToken,
  authMiddleware.verifyPermission("product", "WRITE"),
  categoryController.delete
);

// @route GET /api/v1/categories
// @params id
// @desc Get detail categories
// @access Public
router.get("/detail/:id", categoryController.detail);

module.exports = router;
