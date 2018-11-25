import actionTypes from '../constant/constant';
export function setAccessTokenInStore(accesstoken){
    //  alert("inside LoginAccess "+ accesstoken);
    return dispatch =>{
        dispatch({
            type:actionTypes.LOGINSUCCESS,
            payload:accesstoken
        })
    }
}
export function userNameDispatch(username){
    // alert("inside UserNameDispatch "+ username);
   return dispatch =>{
       dispatch({
           type:actionTypes.USERNAME,
           payload:username
       })
   }
}