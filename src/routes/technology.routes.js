const { Router } = require("express");

module.exports = ({ TechnologyController }) => {
  const router = Router();

  router.get("", TechnologyController.getAll);
  router.get("/:technologyId", TechnologyController.get);
  router.patch(":/technologyId", TechnologyController.update);
  router.delete(":/technologyId", TechnologyController.delete);

  return router;
};
