import StripeCheckout from "react-stripe-checkout";
import "../styles/Payments.css";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import * as actions from '../actions/index';

const Payments = (props) => {

  useEffect(() => {
  
  }, []);

  return (
    <div className="payments">
      <StripeCheckout
        name="Mails"
        description="R5 for 5 credits"
        amount={500}
        token={(token) => props.handleStripeToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    </div>
  );
};

export default connect(null, actions)(Payments);
