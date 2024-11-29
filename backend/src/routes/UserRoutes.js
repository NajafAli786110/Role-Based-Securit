const express = require("express");
const { AuthLogin, AuthRegister } = require("../controllers/AuthController");
const UserRouter = express.Router();

UserRouter.post("/login", AuthLogin);
UserRouter.post("/register", AuthRegister);

module.exports = UserRouter;
