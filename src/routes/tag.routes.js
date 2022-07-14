const { Router } = require("express");

module.exports = ({ TagController }) => {
  const router = Router();

  router.get("", TagController.getAll());
  router.get("/:tagId", TagController.get());
  router.path(":/tagId", TagController.update());
  router.delete(":/tagId", TagController.delete());

  return router;
};
