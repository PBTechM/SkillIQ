const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const { ErrorMiddleware, NotFoundMiddleware } = require("../middlewares");
require("express-async-errors");

module.exports = ({ TestRoutes, AssessmentRoutes }) => {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use(express.json()).use(cors()).use(helmet()).use(compression());

  apiRoutes.use("/test", TestRoutes);
  apiRoutes.use("/assessment", AssessmentRoutes);

  router.use("/v1/api", apiRoutes);

  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);

  return router;
};
