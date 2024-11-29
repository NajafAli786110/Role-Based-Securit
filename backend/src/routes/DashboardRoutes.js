const express = require("express");
const DashboardRoute = express.Router();

DashboardRoute.post("/admin", (req, res) => {
  const currUser = req.currUser;
  console.log("Your user is", currUser);

  if (currUser.role != "Admin") {
    return res
      .status(400)
      .json({ status: false, message: "You're not authorized" });
  }

  return res
    .status(200)
    .json({ status: false, message: `Welcome ${currUser.username}` });
});

DashboardRoute.post("/manager", (req, res) => {
  const currUser = req.currUser;
  if (currUser.role == "Admin" || currUser.role == "manager") {
    return res
      .status(200)
      .json({ status: false, message: `Welcome ${currUser.username}` });
  }

  return res
    .status(400)
    .json({ status: false, message: "You're not authorized" });
});

DashboardRoute.post("/user", (req, res) => {
  const currUser = req.currUser;
  if (
    currUser.role == "Admin" ||
    currUser.role == "manager" ||
    currUser.role == "user"
  ) {
    return res
      .status(200)
      .json({ status: false, message: `Welcome ${currUser.username}` });
  }
  return res
    .status(400)
    .json({ status: false, message: "You're not authorized" });
});

module.exports = DashboardRoute;
