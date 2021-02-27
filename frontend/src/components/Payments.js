import StripeCheckout from "react-stripe-checkout";
import "../styles/Payments.css";

import React from "react";

const Payments = () => {
  
  return (
    <div className="payments">
      <StripeCheckout
        name="Mails"
        description="$5 for 5 credits"
        amount={500}
        token={(token) => console.log(token.id)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
      
    </div>
  );
};

export default Payments;
