import actiontypes from "../constant/constant";
const INITIAL_STATE = {
  User: "ajeet"
};
// alert("inside reducer");
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    case actiontypes.USERNAME:
      // alert("inside USERNAME reducer");
      return {
        ...states,
        User: action.payload
      };
    default:
      return states;
  }
};
