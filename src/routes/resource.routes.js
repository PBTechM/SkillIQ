const { Router } = require("express");
const { ParseIntMiddleware } = require("../middlewares");

module.exports = ({ ResourceController }) => {
  const router = Router();

  router.get("", [ParseIntMiddleware], ResourceController.getAll);
  router.get("/:resourceId", ResourceController.get);
  router.patch(":/resourceId", ResourceController.update);
  router.delete(":/resourceId", ResourceController.delete);

  return router;
};
