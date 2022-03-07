import { IAction, ACTION_TYPE, IState, ICellList } from "./typings";

function roomReducer(state:IState, action:IAction):IState{
    const {type, payload} = action;
    switch(type){
        case ACTION_TYPE.INIT_CELLLIST:
            return {
                ...state,
                cellList: payload as ICellList
            }
        case ACTION_TYPE.INIT_FLOOR:
            return{
                ...state,
                floorVictor2: payload as [number, number]
            }
    }
}

export{
    roomReducer
}