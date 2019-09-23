import actionTypes from "../constant/constant";

export function userNameDispatch(username) {
  // alert("inside UserNameDispatch " + username);
  return dispatch => {
    dispatch({
      type: actionTypes.USERNAME,
      payload: username
    });
  };
}
