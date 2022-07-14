const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const { ErrorMiddleware, NotFoundMiddleware } = require("../middlewares");
require("express-async-errors");

module.exports = ({
  TestRoutes,
  AssessmentRoutes,
  QuestionRoutes,
  ResourceRoutes,
  TechnologyRoutes,
  TagRoutes,
}) => {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use(express.json()).use(cors()).use(helmet()).use(compression());

  apiRoutes.use("/test", TestRoutes);
  apiRoutes.use("/assessment", AssessmentRoutes);
  apiRoutes.use("/question", QuestionRoutes);
  apiRoutes.use("/resource", ResourceRoutes);
  apiRoutes.use("/tag", TagRoutes);
  apiRoutes.use("/technology", TechnologyRoutes);

  router.use("/v1/api", apiRoutes);

  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);

  return router;
};
