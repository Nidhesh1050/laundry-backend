const connectDB = require("./connection");

const initDB = async () => {
  await connectDB();
};

module.exports = initDB;
