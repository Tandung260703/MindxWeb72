const { SERVER, HTTP_STATUS } = require("../constants/index.js");
const Product = require("../models/product.js");

const productController = {
  async index(req, res) {
    try {
      const products = await Product.find();

      return res.json({
        success: true,
        message: "Get all products successfully",
        data: products,
      });
    } catch (error) {
      if (!SERVER.__PROD__) {
        console.log(`[ERROR] ${error}`);
      }

      return res.status(HTTP_STATUS.SERVER).json({
        success: false,
        message: "SERVER",
      });
    }
  },

  async create(req, res) {
    const name = req.body.name;
    const price = req.body.price;
    const priceSale = req.body.priceSale || 0;
    const isHot = req.body.isHot;
    const thumbnailFile = req.body.thumbnail || null;
    const quantity = req.body.quantity;
    const categoryId = req.body.categoryId;
    const brandId = req.body.brandId;

    if (!name || !price || !quantity || !categoryId || !brandId) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ success: false, message: "Values is valid" });
    }

    try {
      const createdProduct = await Product.create({
        name,
        price,
        priceSale,
        isHot,
        quantity,
        category: categoryId,
        brand: brandId,
        thumbnail: null,
      });

      return res.json({
        success: false,
        message: "Created successfully",
        data: true,
      });
    } catch (error) {
      if (!SERVER.__PROD__) {
        console.log(`[ERROR] ${error}`);
      }

      return res.status(HTTP_STATUS.SERVER).json({
        success: false,
        message: "SERVER",
      });
    }
  },
};

module.exports = productController;
