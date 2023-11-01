const authRoute = require("./authRoute.js");
const roleRoute = require("./roleRoute.js");
const categoryRoute = require("./categoryRoute.js");
const productRoute = require("./productRoute.js");

function route(app) {
  const endPointURL = "/api/v1";

  app.use(endPointURL + "/auth", authRoute);
  app.use(endPointURL + "/roles", roleRoute);
  app.use(endPointURL + "/categories", categoryRoute);
  app.use(endPointURL + "/products", productRoute);
}

module.exports = route;
