const express = require("express");

const authController = require("../controllers/authController");
const router = express.Router();

// @route POST /api/v1/auth/register
// @desc Register user
// @access Public
router.post("/register", authController.register);

// @route POST /api/v1/auth/login
// @desc Login user
// @access Public
router.post("/login", authController.login);

// @route POST /api/v1/auth/refresh
// @desc RefreshToken
// @access Public
router.post("/refresh", authController.refreshToken);

module.exports = router;
