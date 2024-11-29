const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const CONNECTDB = process.env.CONNECTMONGO;

async function ConnectWithDatabase() {
  try {
    const ConnectionWithDB = await mongoose.connect(CONNECTDB);
    
    if (ConnectionWithDB) {
      console.log(`Database Connected Succesfully ${ConnectionWithDB.connection.host} ${ConnectionWithDB.connection.name}`);
    }
  } catch (error) {
    console.log("Database Not Connected", error);
    process.exit(1);
  }
}

module.exports = ConnectWithDatabase;
