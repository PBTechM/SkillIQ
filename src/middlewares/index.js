const errorMiddleware = require("./error.middleware");
const notFoundMiddleware = require("./not-found.middleware");
const authMiddleware = require("./auth.middleware");

module.exports = {
  NotFoundMiddleware: notFoundMiddleware,
  ErrorMiddleware: errorMiddleware,
  AuthMiddleware: authMiddleware,
};
