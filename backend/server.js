const express = require("express");
require("./services/passport") //uses googleOauth
const authRoutes = require("./routes/authRoutes")


const app = express();
const PORT = process.env.PORT || 5000;

// MiddleWare
app.use(express.json());
app.use("/auth", authRoutes);


app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
