export interface IRoom {
    title: string;
    description: string;
    content: string;
    href: string
}

export interface IState {
    resultList: IRoom[]
}

export interface IAction {
    type: ACTION_TYPE;
    payload: IRoom[]
}

export interface ISearch {
    input: string;
    type: string
}

export enum ACTION_TYPE {
    LOADING_RESULT = 'loadingResult'
}