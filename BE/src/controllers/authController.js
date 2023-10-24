const { SERVER, HTTP_STATUS } = require("../constants/index.js");
const bcrypt = require("bcrypt");
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const Token = require("../models/token.js");

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
        role: "65338257250d059d50c30469",
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

      const accessToken = authController.generateToken(
        user.id,
        "1d",
        process.env.JWT_AT
      );
      const refreshToken = authController.generateToken(
        user.id,
        "365d",
        process.env.JWT_RT
      );
      Token.create({ token: refreshToken });

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

  async refreshToken(req, res) {
    const refreshToken = req.body.refreshToken;
    if (!refreshToken) {
      return res
        .status(HTTP_STATUS.UNAUTHORIZED)
        .json({ success: false, message: "You're not authenticated" });
    }

    const isDeleted = await Token.findOneAndRemove({ token: refreshToken });

    if (!isDeleted) {
      return res
        .status(HTTP_STATUS.UNAUTHORIZED)
        .json({ success: false, message: "Token is valid" });
    }

    jwt.verify(refreshToken, process.env.JWT_RT, (err, user) => {
      if (err) {
        console.log(err);
      } else {
        const newAccessToken = authController.generateToken(
          user,
          "1d",
          process.env.JWT_AT
        );
        const newRefreshToken = authController.generateToken(
          user,
          "365d",
          process.env.JWT_RT
        );
        Token.create({ token: newRefreshToken });
        data = { accessToken: newAccessToken, refreshToken: newRefreshToken };
        return res.json({
          success: true,
          message: "refresh successfully",
          data,
        });
      }
    });
  },

  generateToken(userId, expiresIn, secret) {
    const token = jwt.sign(
      {
        userId: userId,
      },
      secret,
      {
        expiresIn,
      }
    );
    return token;
  },
};

module.exports = authController;
