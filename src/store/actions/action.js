import actionTypes from '../constant/constant';
export function changeState(updatedUserName){
    return dispatch =>{
        dispatch({
            type:actionTypes.CHANGEUSERNAME,
            payload:updatedUserName
        })
    }
}