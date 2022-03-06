export interface IState {
    cellList: ICellList
}

export interface ICell{
    id: number;
    name: string;
    position: [number,number,number]
}

export interface ICellList {
    id: number;
    cells: ICell[]
}

export interface IAction{
    type: ACTION_TYPE;
    payload: ICellList
}

export enum ACTION_TYPE {
    INIT_CELLLIST = 'initCellList',
}
//hello