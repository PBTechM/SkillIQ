const { sign } = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const generateToken = (user) => {
  return sign({ user }, JWT_SECRET, { expiresIn: "1h" });
};

module.exports = {
  generateToken: generateToken,
};
