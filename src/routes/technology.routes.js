const { Router } = require("express");
const { ParseIntMiddleware } = require("../middlewares");

module.exports = ({ TechnologyController }) => {
  const router = Router();

  router.get("", [ParseIntMiddleware], TechnologyController.getAll);
  router.get("/:technologyId", TechnologyController.get);
  router.patch(":/technologyId", TechnologyController.update);
  router.delete(":/technologyId", TechnologyController.delete);

  return router;
};
