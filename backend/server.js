const express = require("express");
const authRoutes = require("./routes/authRoutes");
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/dev')
require("./models/User");
require("./services/passport"); //uses googleOauth
require("dotenv/config");

const app = express();
const PORT = process.env.PORT || 5000;

// database
const mongoose = require("mongoose");
const DB_CONNECTION = process.env.DB_CONNECT;

// MiddleWare
// set up session cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)// start the session
app.use(passport.initialize())
app.use(passport.session())

app.use(express.json());
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.status(200).send({ object: "response object" });
});


mongoose.connect(
  keys.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log("connected to DB");
}).catch(error => {
  console.error("db connection error => ", error);
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
//"106187864297462825972"
