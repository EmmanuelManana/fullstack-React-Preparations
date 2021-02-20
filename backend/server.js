const express = require("express");
const authRoutes = require("./routes/authRoutes");
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

try{
    mongoose.connect(
        DB_CONNECTION,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        () => {
          console.log("Connected To The DataBase");
        }
      );
}catch(e){
    console.error("con Exception => ", e)
}

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
  
});
//"106187864297462825972"
