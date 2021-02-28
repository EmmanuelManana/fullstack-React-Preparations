import { FETCH_USER } from "./types";

export const fetchUser = () => {
  // redux, detects a function is returned,
  // then calls (returned function), with dispatch.
  return async (dispatch) => {
    let response = await fetch("/auth/api/user")
      .then((res) => res.json())
    dispatch({ type: FETCH_USER, payload: response });
  };
};

export const handleStripeToken = (token) => async (dispatch) => {
  const paymentData = { token: token.id };
  const response = await fetch("/billing/stripe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paymentData),
  });

  // Return and display the result of the charge.
  // return response.json();
  dispatch({ type: FETCH_USER, payload: response });
};
