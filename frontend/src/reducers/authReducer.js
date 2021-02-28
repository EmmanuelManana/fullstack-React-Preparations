import { FETCH_USER } from "../actions/types";

const authReducer = (state = null, action) => {
  console.log("test stripe action payload: ", action.payload);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};

export default authReducer;
