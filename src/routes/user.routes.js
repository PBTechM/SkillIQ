const { Router } = require("express");
const {
  AuthMiddleware,
  ParseIntMiddleware,
  CacheMiddleware,
} = require("../middlewares");

module.exports = ({ UserController, cache }) => {
  const router = Router();

  router.get("", [AuthMiddleware, ParseIntMiddleware, CacheMiddleware(cache)], UserController.getAll);
  router.get("/:userId", UserController.get);
  router.patch(":/userId", UserController.update);
  router.delete(":/userId", UserController.delete);

  return router;
};
