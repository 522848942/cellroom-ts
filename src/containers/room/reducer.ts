import {
  IRoomAction,
  ROOM_ACTION_TYPE,
  IRoomState,
  ICellList,
  ICellState,
  ICellAction,
  CELL_ACTION_TYPE,
  IGeneList,
} from "./typings";

function roomReducer(state: IRoomState, action: IRoomAction): IRoomState {
  const { type, payload } = action;
  switch (type) {
    case ROOM_ACTION_TYPE.INIT_CELLLIST:
      return {
        ...state,
        cellList: payload as ICellList,
      };
    case ROOM_ACTION_TYPE.INIT_FLOOR:
      return {
        ...state,
        floorVictor2: payload as [number, number],
      };
    case ROOM_ACTION_TYPE.INIT_CAMERAPOSITION:
      return {
        ...state,
        cameraPosition: payload as [number, number, number],
      };
    case ROOM_ACTION_TYPE.INIT_CAMERATARGET:
      return {
        ...state,
        cameraTarget: payload as [number, number, number],
      };
    case ROOM_ACTION_TYPE.CAMERA_TARGET_CHANGE:
      return {
        ...state,
        cameraTarget: payload as [number, number, number],
      };
    case ROOM_ACTION_TYPE.INIT_ADDCELLLIST:
      return {
        ...state,
        cellNameList: payload as string[],
      };
    case ROOM_ACTION_TYPE.INIT_SELECTEDCELLLIST:
      return {
        ...state,
        selectedCellList: payload as string[],
      };
    default:
      return {
        ...state,
      };
  }
}

function cellReducer(state: ICellState, action: ICellAction): ICellState {
  const { type, payload } = action;
  switch (type) {
    case CELL_ACTION_TYPE.INIT_GENELIST:
      return {
        ...state,
        geneList: payload as IGeneList,
      };
    default:
      return {
        ...state,
      };
  }
}

export { roomReducer, cellReducer };
