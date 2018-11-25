import actionTypes from '../constant/imageListConstant';
export function setImageListArrays(imagelistarrays){
    //  alert("inside imagelistarrays "+ imagelistarrays);
    return dispatch =>{
        dispatch({
            type:actionTypes.IMAGELISTARRAYS,
            payload:imagelistarrays
        })
    }
}