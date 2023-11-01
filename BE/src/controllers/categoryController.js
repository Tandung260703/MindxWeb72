const { SERVER, HTTP_STATUS } = require("../constants/index.js");
const Category = require("../models/category.js");

const categoryController = {
  async index(req, res) {
    const q = req.query.q || "";
    const page = req.query.page || 1;
    const size = req.query.size || 10;
    const skip = (page - 1) * size;

    try {
      const count = await Category.count();
      const totalPage = Math.ceil(count / size);
      const categories = await Category.find({
        name: {
          $regex: `.*${q}.*`,
        },
      })
        .limit(size)
        .skip(skip)
        .exec();

      return res.json({
        success: true,
        message: "Get all categories successfully",
        params: {
          q,
          page,
          size,
          totalPage,
        },
        data: categories,
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

    if (!name) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ success: false, message: "Values is valid" });
    }

    try {
      const createdCategory = await Category.create({
        name,
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

  async update(req, res) {
    const id = req.params.id;
    const name = req.body.name;

    if (!id) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ success: false, message: "Update failed" });
    }

    try {
      const findAndUpdateSuccess = await Category.findByIdAndUpdate(id, {
        name,
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
      const deletedSuccess = await Category.findByIdAndDelete(id);
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
      const category = await Category.findById(id);
      if (!category) {
        return res
          .status(HTTP_STATUS.NOT_FOUND)
          .json({ success: false, message: "category is not exists" });
      }

      return res.json({
        success: true,
        message: "get detail category successfully",
        data: category,
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

module.exports = categoryController;
