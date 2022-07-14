const { Router } = require("express");

module.exports = ({ ResourceController }) => {
  const router = Router();

  router.get("", ResourceController.getAll);
  router.get("/:resourceId", ResourceController.get);
  router.patch(":/resourceId", ResourceController.update);
  router.delete(":/resourceId", ResourceController.delete);

  return router;
};
