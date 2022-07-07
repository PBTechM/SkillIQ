const { Router } = require("express");

module.exports = ({ TestController }) => {
  const router = Router();

  router.get("/", TestController.test);

  return router;
};
