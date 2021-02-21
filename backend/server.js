const express = require("express");
const authRoutes = require("./routes/authRoutes");
require("./models/User");
require("./services/passport"); //uses googleOauth
require("dotenv/config");

// database
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const DB_CONNECTION = process.env.DB_CONNECT;
// MiddleWare
app.use(express.json());
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.status(200).send({ object: "response object" });
});

mongoose
  .connect(
    DB_CONNECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected to DB");
  })
  .catch(error => {
    console.error("db connection error => ", error);
  });

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
//"106187864297462825972"
