const errorMiddleware = require("./error.middleware");
const notFoundMiddleware = require("./not-found.middleware");
const authMiddleware = require("./auth.middleware");
const parseIntMiddleware = require("./parse-int.middleware");
const cacheMiddleware = require("./cache.middleware");

module.exports = {
  NotFoundMiddleware: notFoundMiddleware,
  ErrorMiddleware: errorMiddleware,
  AuthMiddleware: authMiddleware,
  ParseIntMiddleware: parseIntMiddleware,
  CacheMiddleware: cacheMiddleware,
};
