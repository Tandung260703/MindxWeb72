const express = require("express");

const router = express.Router();

const roleController = require("../controllers/roleController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

// @route GET /api/v1/roles
// @desc Get all roles
// @access Private - ADMIN
router.get(
  "/",
  authMiddleware.verifyToken,
  authMiddleware.verifyPermission("role", "READ"),
  roleController.index
);

// @route POST /api/v1/roles/create
// @desc Create role
// @access Private - ADMIN
router.post(
  "/create",
  authMiddleware.verifyToken,
  authMiddleware.verifyPermission("role", "WRITE"),
  roleController.create
);

module.exports = router;
