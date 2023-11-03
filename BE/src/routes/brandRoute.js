const express = require("express");

const brandController = require("../controllers/brandController");
const router = express.Router();

// @route Get /api/v1/brands
// @desc Get all brands
// @access Public
router.get("/", brandController.index);

// @route POST /api/v1/brands/create
// @desc Create brand
// @access Private - Product manager
router.post("/create", brandController.create);

// @route PUT /api/v1/brands/update
// @params id
// @desc Update brand
// @access Private - Product manager
router.put("/update/:id", brandController.update);

// @route DELETE /api/v1/brands/delete
// @params id
// @desc Delete brand
// @access Private - Product manager
router.delete("/delete/:id", brandController.delete);

// @route GET /api/v1/brands
// @params id
// @desc Get one brand
// @access Private - Product manager
router.get("/:id", brandController.detail);

module.exports = router;
