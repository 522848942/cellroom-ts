import { ACTION_TYPE, IAction, IState } from "./typings";

function resultReducer(state:IState, action:IAction):IState{
    const {type, payload} = action;
    switch(type){
        case ACTION_TYPE.LOADING_RESULT:
            return{
                resultList: payload
            }
        default:
            return state;
    }
}

export {
    resultReducer
}