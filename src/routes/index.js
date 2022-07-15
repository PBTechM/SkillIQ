const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const { ErrorMiddleware, NotFoundMiddleware } = require("../middlewares");
require("express-async-errors");

module.exports = ({
  TestRoutes,
  AssessmentRoutes,
  AuthRoutes,
  QuestionRoutes,
  ResourceRoutes,
  TagRoutes,
  TechnologyRoutes,
  UserRoutes,
}) => {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use(express.json()).use(cors()).use(helmet()).use(compression());

  apiRoutes.use("/test", TestRoutes);
  apiRoutes.use("/assessment", AssessmentRoutes);
  apiRoutes.use("/auth", AuthRoutes);
  apiRoutes.use("/question", QuestionRoutes);
  apiRoutes.use("/resource", ResourceRoutes);
  apiRoutes.use("/tag", TagRoutes);
  apiRoutes.use("/technology", TechnologyRoutes);
  apiRoutes.use("/user", UserRoutes);

  router.use("/v1/api", apiRoutes);

  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);

  return router;
};
