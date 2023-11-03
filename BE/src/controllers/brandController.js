const { HTTP_STATUS, SERVER } = require("../constants/index.js");
const Brand = require("../models/brand.js");

const brandController = {
  async index(req, res) {
    try {
      const brands = await Brand.find();
      return res.json({
        success: true,
        message: "Get all brands successfully",
        data: brands,
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
      const createdBrand = await Brand.create({
        name,
      });

      if (!createdBrand) {
        return res
          .status(HTTP_STATUS.BAD_REQUEST)
          .json({ success: false, message: "Create failed" });
      }

      return res.json({
        success: true,
        message: "Created brand successfully",
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
    const name = req.body.name;
    const id = req.params.id;
    if (!name || !id) {
      return res.json({ success: false, message: "Values is valid" });
    }

    try {
      const updatedSuccess = await Brand.findByIdAndUpdate(id, {
        name,
      });

      if (!updatedSuccess) {
        return res
          .status(HTTP_STATUS.BAD_REQUEST)
          .json({ success: false, message: "Update failed" });
      }

      return res.json({
        success: true,
        message: "updated brand successfully",
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
        .json({ success: false, message: "values is valid" });
    }
    try {
      const deletedSuccess = await Brand.findByIdAndDelete(id);

      if (!deletedSuccess) {
        return res
          .status(HTTP_STATUS.BAD_REQUEST)
          .json({ success: false, message: "values is valid" });
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
      const brand = await Brand.findById(id);
      if (!brand) {
        return res
          .status(HTTP_STATUS.NOT_FOUND)
          .json({ success: false, message: "Get brand failed" });
      }

      return res.json({
        success: true,
        message: "Get brand successfully",
        data: brand,
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

module.exports = brandController;
