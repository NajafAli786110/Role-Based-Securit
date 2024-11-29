const UserModel = require("../models/AuthModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

async function AuthRegister(req, res) {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password || !role) {
    return res
      .status(401)
      .json({ status: false, message: "Please Fill up all Details" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 6);
    const register = await UserModel.create({
      username: username,
      email: email,
      password: hashedPassword,
      role: role,
    });

    return res.status(200).json({
      status: true,
      message: "User Registered Successfully",
      register,
    });
  } catch (error) {
    return res
      .status(401)
      .json({ status: false, message: "User Not Registered", error });
  }
}

async function AuthLogin(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(401)
      .json({ status: false, message: "Please Fill up all Details" });
  }

  try {
    const currUser = await UserModel.find({
      email:email,
    });
    

    if (!currUser) {
      return res
        .status(401)
        .json({ status: false, message: "This email is not in our Database" });
    }

    const decryptPassword = await bcrypt.compare(password, currUser[0].password);

    if (!decryptPassword) {
      return res
        .status(401)
        .json({ status: false, message: "Invalid Username or Password" });
    }

    const token = jwt.sign(
      {
        id: currUser[0]._id,
        role: currUser[0].role,
        username: currUser[0].username,
      },
      process.env.JWT_SECRET_KEY,
      {expiresIn: "1h"}
    );
    return res.status(200).json({
      status: true,
      message: "User Logged In Successfully",
      token: token,
      currUser,
    });
  } catch (error) {
    return res
      .status(401)
      .json({ status: false, message: "User Not Logged In", error });
  }
}

module.exports = {
  AuthLogin,
  AuthRegister,
};
