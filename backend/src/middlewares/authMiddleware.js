const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ status: false, message: "Please Login First" });
  }

  const token = authHeader.split("Bearer ")[1];

  try {
    const currUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.currUser = currUser;
    next();
  } catch (err) {
    return res.status(403).json({ status: false, message: "Invalid Token" });
  }
};

module.exports = verifyToken;
