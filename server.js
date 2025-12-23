require("dotenv").config();
const express = require("express");
const cors = require("cors");
const initDB = require("./src/db/init");

const app = express();
initDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./src/routes/auth.routes"));
app.use("/api/user", require("./src/routes/user.routes"));
app.use("/api/admin", require("./src/routes/admin.routes"));

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on port ${process.env.PORT}`)
);

module.exports = app;