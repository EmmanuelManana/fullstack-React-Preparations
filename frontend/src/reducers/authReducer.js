const authReducer = (state = [], action) => {
  console.log("check payload: => ", action.payload)
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
