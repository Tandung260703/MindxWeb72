const { SERVER, HTTP_STATUS } = require("../constants/index.js");
const bcrypt = require("bcrypt");
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

const authController = {
  async register(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ success: false, message: "Missing username or password" });
    }

    try {
      const user = await User.findOne({ username });

      if (user) {
        return res
          .status(HTTP_STATUS.BAD_REQUEST)
          .json({ success: false, message: "User is exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const createdUser = await User.create({
        username,
        password: hashedPassword,
        role: "65336d1b76206f65b1c5fb5d",
      });

      if (!createdUser) {
        return res
          .status(HTTP_STATUS.BAD_REQUEST)
          .json({ success: false, message: "Register Failed" });
      }

      return res.json({
        success: true,
        message: "Register Successfully",
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

  async login(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ success: false, message: "Missing username or password" });
    }

    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res
          .status(HTTP_STATUS.UNAUTHORIZED)
          .json({ success: false, message: "User not Register" });
      }

      const isLogin = await bcrypt.compare(password, user.password);
      if (!isLogin) {
        return res
          .status(HTTP_STATUS.UNAUTHORIZED)
          .json({ success: false, message: "Unauthorized" });
      }

      const accessToken = jwt.sign(
        {
          userId: user._id,
        },
        process.env.JWT_AT,
        {
          expiresIn: "1d",
        }
      );

      const refreshToken = jwt.sign(
        {
          userId: user._id,
        },
        process.env.JWT_AT,
        {
          expiresIn: "365d",
        }
      );

      const data = { user, accessToken, refreshToken };

      return res.json({
        success: true,
        message: "Login successfully",
        data,
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

  refreshToken(req, res) {},
};

module.exports = authController;
