import actionTypes from '../constant/selectImageConstant';
export function selectImage(selectimagevalues){
    //  alert("inside imagelistarrays "+ imagelistarrays);
    return dispatch =>{
        dispatch({
            type:actionTypes.SELECTIMAGE,
            payload:selectimagevalues
        })
    }
}