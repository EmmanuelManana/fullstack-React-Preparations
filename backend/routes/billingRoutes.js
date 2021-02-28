const express = require("express");
const keys = require("../config/keys");
const router = express.Router();
const stripe = require("stripe")(keys.stripeSecretKey);

router.post("/stripe", async (req, res) => {
  const { token } = req.body;
  // `source` is obtained with Stripe.js; see https://stripe.com/docs/payments/accept-a-payment-charges#web-create-token
  if (token) {
    const charge = await stripe.charges.create({
      amount: 5000,
      currency: "zar",
      source: `${token}`,
      description: "R5 for % credits",
    });

    console.log("test charge: ", charge)
  }
});

module.exports = router;
