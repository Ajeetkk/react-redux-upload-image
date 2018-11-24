import actiontypes from '../constant/constant';
const INITIAL_STATE ={
    User:'ajeet',
    Pass:'Kurrey',
    AccessToken:''
}
// alert("inside reducer");
export default (states = INITIAL_STATE, action)=>{
    switch(action.type){
        case actiontypes.CHANGEUSERNAME:
        return({
            ...states,
            User:action.payload, 
            Pass:action.payload           
        })
        case actiontypes.LOGINSUCCESS:
        // alert("inside reducer");
        return({
            ...states,
            AccessToken:action.payload                    
        })
        default:
            return states;
    }
}