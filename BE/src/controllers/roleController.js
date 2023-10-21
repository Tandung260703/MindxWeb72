const Role = require("../models/role.js");
const { HTTP_STATUS, SERVER } = require("../constants/index.js");

const roleController = {
  async index(req, res) {
    try {
      const roles = await Role.find();
      return res.json({
        success: true,
        message: "Get All Role Successfully",
        data: roles,
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
    const permission = req.body.permission;

    if (!name || !permission) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ success: false, message: "Values is valid" });
    }

    try {
      const createdRole = await Role.create({ name, permission });

      if (!createdRole) {
        return res
          .status(HTTP_STATUS.BAD_REQUEST)
          .json({ success: false, message: "Create role failed" });
      }

      return res.json({
        success: true,
        message: "Created role successfully",
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

module.exports = roleController;
