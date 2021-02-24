const authReducer = (state = [], action) => {
  console.log("check payload: => ", action.payload)
  switch (action.type) {
    case "FETCH_USER":
      // update state:
      break;
    default:
      return state;
  }
};

export default authReducer;
