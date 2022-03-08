import { IAction, ACTION_TYPE, IState, ICellList } from "./typings";

function roomReducer(state: IState, action: IAction): IState {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.INIT_CELLLIST:
      return {
        ...state,
        cellList: payload as ICellList,
      };
    case ACTION_TYPE.INIT_FLOOR:
      return {
        ...state,
        floorVictor2: payload as [number, number],
      };
    case ACTION_TYPE.INIT_CAMERAPOSITION:
      return {
        ...state,
        cameraPosition: payload as [number, number, number],
      };
    case ACTION_TYPE.INIT_CAMERATARGET:
      return {
        ...state,
        cameraTarget: payload as [number, number, number],
      };
    case ACTION_TYPE.CAMERA_TARGET_CHANGE:
      return {
        ...state,
		cameraTarget: payload as [number, number, number]
      };
    default:
      return {
        ...state,
      };
  }
}

export { roomReducer };
