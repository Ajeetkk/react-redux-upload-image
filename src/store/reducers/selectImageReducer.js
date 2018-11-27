import actiontypes from '../constant/selectImageConstant';
const INITIAL_STATE ={
    selectImage:[]
}
// alert("inside reducer");
export default (states = INITIAL_STATE, action)=>{
    switch(action.type){
        case actiontypes.SELECTIMAGE:
        //  alert("select image reducer" + action.payload.length);
        return({
            ...states,
            selectImage:action.payload         
        })        
        default:
            return states;
    }
}