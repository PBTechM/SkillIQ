const { Router } = require("express");

module.exports = ({ AuthController }) => {
  const router = Router();

  router.post("/signUp", AuthController.signUp);
  router.post("/signIn", AuthController.signIn);

  return router;
};
