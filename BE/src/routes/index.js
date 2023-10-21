const authRoute = require("./authRoute.js");
const roleRoute = require("./roleRoute.js");

function route(app) {
  const endPointURL = "/api/v1";

  app.use(endPointURL + "/auth", authRoute);
  app.use(endPointURL + "/roles", roleRoute);
}

module.exports = route;
