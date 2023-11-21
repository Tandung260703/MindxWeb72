const v2 = require("cloudinary");

v2.config({
  cloud_name: process.env.CLOUD_IMG_NAME,
  api_key: process.env.CLOUD_IMG_API_KEY,
  api_secret: process.env.CLOUD_IMG_SECRET,
});

module.exports = v2;
