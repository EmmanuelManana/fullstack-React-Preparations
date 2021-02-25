import { FETCH_USER } from "./types";

//action creater.
export const fetchUser = () => {
  // redux, detects a function is returned,
  // then calls (returned function), with dispatch.
  console.log(`action state :${FETCH_USER}`);
  return dispatch => {
    fetch("/auth/api/user")
      .then(res => res.json())
      .then(userPayload =>
        dispatch({ type: FETCH_USER, payload: userPayload })
      ).catch(e => {
         // must log
         console.log('user not logged in: ', e)
      })
  };
};
