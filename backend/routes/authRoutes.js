const passport = require("passport");
const express = require("express");
const router = express.Router();

router.get(
  "/login",
  passport.authenticate("google", { scope: ["profile", "email"] }),
  (req, res) => {}
);

router.get("/login/callback", passport.authenticate("google"), (req, res) => {
  res.status(200).send({ redirected: "user logged in" });
});

// reset the session cookie.
router.use("/logout", (req, res) => {
  req.logout();
  res.status(200).send(req.user);
});

// get the current user, in rhis session
router.get("/api/user", (req, res) => {
 // res.send(req.session);
  res.send(req.user);
});

module.exports = router;
