import { FETCH_USER } from "../actions/types";

const authReducer = (state = [], action) => {

  console.log("check payload: => ", action.payload)
  switch (action.type) {
    case FETCH_USER:
      console.log(`manage state here`)
      return state;
      //break;
    default:
      return state;
      // break;
  }
};

export default authReducer;
