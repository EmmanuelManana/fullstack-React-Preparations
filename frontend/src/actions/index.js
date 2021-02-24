import { FETCH_USER } from "./types";

//action creater.
export const fetchUser = () => {
  // redux, detects a function is returned,
  // then calls (returned function), with dispatch.
  console.log(`${FETCH_USER} =>  action dispatched`);
  return dispatch => {
    fetch("/auth/api/user")
      .then(res => res.json())
      .then(userPayload =>
        dispatch({ type: FETCH_USER, payload: userPayload })
      );
  };
};
