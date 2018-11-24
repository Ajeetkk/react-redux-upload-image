import actionTypes from '../constant/constant';
export function setAccessTokenInStore(accesstoken){
    // alert("inside LoginAccess "+ accesstoken);
    return dispatch =>{
        dispatch({
            type:actionTypes.LOGINSUCCESS,
            payload:accesstoken
        })
    }
}