import { IAction, ACTION_TYPE, IState } from "./typings";

function cellListReducer(state:IState, action:IAction):IState{
    const {type, payload} = action;
    switch(type){
        case ACTION_TYPE.INIT_CELLLIST:
            return {
                ...state,
                cellList: payload
            }
    }
}

export{
    cellListReducer
}