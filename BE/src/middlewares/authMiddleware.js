const { HTTP_STATUS, SERVER } = require("../constants");
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");
const Role = require("../models/role.js");

const authMiddleware = {
  async verifyToken(req, res, next) {
    const authHeader = req.header("Authorization");
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res
        .status(HTTP_STATUS.UNAUTHORIZED)
        .json({ success: false, message: "UNAUTHORIZED" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_AT);

      req.userId = decoded.userId;

      next();
    } catch (error) {
      if (!SERVER.__PROD__) {
        console.log(`[ERROR] ${error}`);
      }

      return res.status(HTTP_STATUS.UNAUTHORIZED).json({
        success: false,
        message: "UNAUTHORIZED",
      });
    }
  },
  verifyPermission(key, action) {
    return async (req, res, next) => {
      const userId = req.userId;
      try {
        const user = await User.findById(userId);
        const role = await Role.findById(user.role._id);

        const checkPermission = role.permission.find(
          (per) =>
            per.key.toUpperCase() === key.toUpperCase() &&
            per.action.toUpperCase() === action.toUpperCase()
        );

        if (!checkPermission) {
          return res.status(HTTP_STATUS.UNAUTHORIZED).json({
            success: false,
            message: "UNAUTHORIZED",
          });
        }

        next();
      } catch (error) {
        if (!SERVER.__PROD__) {
          console.log(`[ERROR] ${error}`);
        }

        return res.status(HTTP_STATUS.UNAUTHORIZED).json({
          success: false,
          message: "UNAUTHORIZED",
        });
      }
    };
  },
};

module.exports = authMiddleware;
