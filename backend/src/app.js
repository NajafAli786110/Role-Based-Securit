const express = require("express");
const dotenv = require("dotenv");
const ConnectWithDatabase = require("./config/DbConnect");
const UserRouter = require("./routes/UserRoutes");
const DashboardRoute = require("./routes/DashboardRoutes");
const verifyToken = require("./middlewares/authMiddleware");

const app = express();
dotenv.config();

// Variables
const PORT = process.env.PORT || 4001;
const CONNECTDB = process.env.CONNECTMONGO;

// MongoDB Connections
ConnectWithDatabase();

// Middlewares
app.use(express.json());

// Router
app.route("/").get((req, res) => {
  return res.send("Hello From Server");
});
app.use("/api/auth", UserRouter);
app.use("/api/user", verifyToken, DashboardRoute);

app.listen(PORT, (req, res) => {
  console.log(`Server is running at ${PORT}`);
});
