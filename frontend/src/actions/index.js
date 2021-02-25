import { FETCH_USER } from "./types";

export const fetchUser = () => {
  // redux, detects a function is returned,
  // then calls (returned function), with dispatch.
  return async dispatch => {
    let res = await fetch("/auth/api/user").then(res => res.json()).catch(e => {
      //must used logs
      console.error("user not logged in:", e);
    });
    dispatch({ type: FETCH_USER, payload: res });
  };
};
