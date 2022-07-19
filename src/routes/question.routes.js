const { Router } = require("express");
const { ParseIntMiddleware } = require("../middlewares");

module.exports = ({ QuestionController }) => {
  const router = Router();

  router.get("", [ParseIntMiddleware], QuestionController.getAll);
  router.get("/:questionId", QuestionController.get);
  router.patch(":/questionId", QuestionController.update);
  router.delete(":/questionId", QuestionController.delete);

  return router;
};
