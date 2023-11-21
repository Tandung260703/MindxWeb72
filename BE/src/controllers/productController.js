const cloudinary = require("../configs/connectImgDb.js");
const { SERVER, HTTP_STATUS } = require("../constants/index.js");
const Product = require("../models/product.js");

const productController = {
  async index(req, res) {
    const q = req.query.q || "";
    const page = req.query.page || 1;
    const size = req.query.size || 10;
    const skip = (page - 1) * size;

    try {
      const count = await Product.count();
      const totalPage = Math.ceil(count / size);
      const products = await Product.find({
        name: {
          $regex: `.*${q}.*`,
        },
      })
        .limit(size)
        .skip(skip)
        .exec();

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
    const thumbnailFile = req.file;
    const quantity = req.body.quantity;
    const categoryId = req.body.categoryId;
    const brandId = req.body.brandId;

    if (!name || !price || !quantity || !categoryId || !brandId) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ success: false, message: "Values is valid" });
    }

    try {
      let thumbnail = "";
      if (thumbnailFile) {
        const res = await cloudinary.uploader
          .upload(thumbnailFile.path)
          .catch((err) => {
            console.log("err ->", err);
          });

        thumbnail = res.secure_url;
      }

      await Product.create({
        name,
        price,
        priceSale,
        isHot,
        quantity,
        category: categoryId,
        brand: brandId,
        thumbnail,
      });

      return res.json({
        success: true,
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

  async update(req, res) {
    const id = req.params.id;
    const { name, price, priceSale, isHot, quantity, categoryId, brandId } =
      req.body;
    const thumbnailFile = req.file;

    if (!id) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ success: false, message: "Update failed" });
    }

    try {
      let thumbnail = "";
      if (thumbnailFile) {
        const res = await cloudinary.uploader
          .upload(thumbnailFile.path)
          .catch((err) => {
            console.log("err ->", err);
          });

        thumbnail = res.secure_url;
      }

      const findAndUpdateSuccess = await Product.findByIdAndUpdate(id, {
        name,
        price,
        priceSale,
        isHot,
        quantity,
        categoryId,
        brandId,
        thumbnail,
      });

      if (!findAndUpdateSuccess) {
        return res
          .status(HTTP_STATUS.BAD_REQUEST)
          .json({ success: false, message: "update failed" });
      }

      return res.json({
        success: true,
        message: "Updated successfully",
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

  async delete(req, res) {
    const id = req.params.id;
    if (!id) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ success: false, message: "delete failed" });
    }

    try {
      const deletedSuccess = await Product.findByIdAndDelete(id);
      if (!deletedSuccess) {
        return res
          .status(HTTP_STATUS.BAD_REQUEST)
          .json({ success: false, message: "delete failed" });
      }

      return res.json({
        success: true,
        message: "deleted successfully",
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

  async detail(req, res) {
    const id = req.params.id;
    if (!id) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ success: false, message: "values is valid" });
    }
    try {
      const product = await Product.findById(id);
      if (!product) {
        return res
          .status(HTTP_STATUS.NOT_FOUND)
          .json({ success: false, message: "product is not exists" });
      }

      return res.json({
        success: true,
        message: "get detail product successfully",
        data: product,
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
