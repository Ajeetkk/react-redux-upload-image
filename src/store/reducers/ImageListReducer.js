import actiontypes from '../constant/constant';
const INITIAL_STATE ={
    ImageListArray:''
}
// alert("inside reducer");
export default (states = INITIAL_STATE, action)=>{
    switch(action.type){
        case actiontypes.IMAGELISTARRAYS:
        return({
            ...states,
            ImageListArray:action.payload         
        })        
        default:
            return states;
    }
}