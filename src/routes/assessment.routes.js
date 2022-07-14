const { Router } = require("express");

module.exports = ({ AssessmentController }) => {
  const router = Router();

  router.get("", AssessmentController.getAll());
  router.get("/:assessmentId", AssessmentController.get());
  router.path(":/assessmentId", AssessmentController.update());
  router.delete(":/assessmentId", AssessmentController.delete());

  return router;
};
