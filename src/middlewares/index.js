const errorMiddleware = require("./error.middleware");
const notFoundMiddleware = require("./not-found.middleware");

module.exports = {
    NotFoundMiddleware: notFoundMiddleware,
    ErrorMiddleware: errorMiddleware
}