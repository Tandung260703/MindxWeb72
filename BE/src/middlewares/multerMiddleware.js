const multer = require("multer");

const multerMiddleware = {
  createStore() {
    return multer.diskStorage({
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      },
    });
  },

  up() {
    return multer({ storage: this.createStore() });
  },
};

module.exports = multerMiddleware;
