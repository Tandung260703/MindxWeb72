const SERVER = {
  __PROD__: process.env.ENV === "production",
};

const HTTP_STATUS = {
  SUCCESS: 200,
  SERVER: 500,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
};

module.exports = {
  SERVER,
  HTTP_STATUS,
};
