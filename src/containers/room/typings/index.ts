export interface IRoomState {
  floorVictor2: [number, number];
  cameraTarget: [number, number, number];
  cameraPosition: [number, number, number];
  cellNameList: string[];
  cellList: ICellList;
  selectedCellList: string[]
}

export interface ICell {
  id: number;
  name: string;
  position: [number, number, number];
}

export interface ICellList {
  id: number;
  cells: ICell[];
}

export interface ICellState {
  geneList: IGeneList
}

export interface IGeneList{
  id: number;
  genes: IGene[]
}

export interface IGene{
  id: number;
  name: string;
  linePath: [number, number, number][]
}
export interface IRoomAction {
  type: ROOM_ACTION_TYPE;
  payload: ICellList | [number, number] | [number, number, number] | string[];
}

export enum ROOM_ACTION_TYPE {
  INIT_CELLLIST = "initCellList",
  INIT_FLOOR = "initFloor",
  INIT_CAMERATARGET = "initCameraTarget",
  INIT_CAMERAPOSITION = "initCameraPosition",
  INIT_ADDCELLLIST = "initAddCellList",
  INIT_SELECTEDCELLLIST = 'initSelectedCellList',

  CAMERA_TARGET_CHANGE = "cameraTargetCange",
}

export interface ICellAction {
  type: CELL_ACTION_TYPE;
  payload: IGeneList
}

export enum CELL_ACTION_TYPE {
  INIT_GENELIST = "initGeneList"
}