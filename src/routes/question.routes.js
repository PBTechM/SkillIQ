const { Router } = require("express");

module.exports = ({ QuestionController }) => {
  const router = Router();

  router.get("", QuestionController.getAll);
  router.get("/:questionId", QuestionController.get);
  router.patch(":/questionId", QuestionController.update);
  router.delete(":/questionId", QuestionController.delete);

  return router;
};
