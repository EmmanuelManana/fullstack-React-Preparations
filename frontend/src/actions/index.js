import { FETCH_USER } from "./types";

export const fetchUser = () => {
  // redux, detects a function is returned,
  // then calls (returned function), with dispatch.
  return async (dispatch) => {
    let response = await fetch("/auth/api/user")
      .then((res) => res.json())
      .catch((e) => {
        //must used logs
        console.error("user not logged in:", e);
      });
    dispatch({ type: FETCH_USER, payload: response });
  };
};

export const handleStripeToken = (token) => async (dispatch) => {
  let response = await fetch("auth/api/stripe", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({ token }), // body data type must match "Content-Type" header
  })
    .then((res) => res.json())
    .catch((e) => {
      //must use logs
      console.error("StripeTokenException:", e);
    });
  dispatch({ type: FETCH_USER, payload: response });
};
