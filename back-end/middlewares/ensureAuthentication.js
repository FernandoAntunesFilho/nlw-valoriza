const { verify } = require("jsonwebtoken");
require("dotenv");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new Error("Token não informado");
  }

  try {
    const { sub } = verify(token, process.env.SECRET);
    req.userSender = sub;
    return next();
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
