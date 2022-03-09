import React, { FC, ReactElement, useCallback, useEffect, useReducer } from "react";
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import { Suspense } from "react"
import { OrbitControls } from "@react-three/drei";

import Cell from "../../components/room/cell";
import Floor from "../../components/room/floor";
import { ROOM_ACTION_TYPE, ICell, ICellList, IRoomState } from "./typings";
import { roomReducer } from "./reducer";
import * as THREE from "three";

const CanvasContainer = styled.div`
	width: 100%;
	height: 100%;
`;

const initialState = {
    floorVictor2: [0, 0],
    cameraTarget: [0,0,0],
    cameraPosition: [0,0,0],
    cellList: {
        id: 0,
        cells:[
            {id:0,name:'0',position:[0,0,0]}
        ]
    }
} as IRoomState

const Room: FC = (): ReactElement => {
    const [state, dispatch] = useReducer(roomReducer, initialState)
    useEffect(() => {
        const cellList = {
            id: 123,
            cells: [
                {id:1,name:'1',position:[12,34,56]},
                {id:2,name:'2',position:[112,24,556]},
                {id:3,name:'3',position:[162,324,516]},
                {id:4,name:'4',position:[125,332,56]},
                {id:5,name:'5',position:[132,34,56]},
                {id:6,name:'6',position:[12,54,52]},
                {id:7,name:'7',position:[124,37,5]},
                {id:8,name:'8',position:[11,38,521]},
                {id:9,name:'9',position:[0,0,0]},
            ]
        }
        const floorVictor2 = [162, 556]
        const cameraPosition = [162, 332, 556]
        const cameraTarget = [0, 0, 0]
        dispatch({
            type: ROOM_ACTION_TYPE.INIT_CELLLIST,
            payload: cellList as ICellList
        })
        dispatch({
            type: ROOM_ACTION_TYPE.INIT_FLOOR,
            payload: floorVictor2 as [number, number]
        })
        dispatch({
            type: ROOM_ACTION_TYPE.INIT_CAMERAPOSITION,
            payload: cameraPosition as [number, number, number]
        })
        dispatch({
            type: ROOM_ACTION_TYPE.INIT_CAMERATARGET,
            payload: cameraTarget as [number,number,number]
        })
    }, [])

    const camerTargetChange = useCallback((position:[number, number, number])=>{
        dispatch({
            type: ROOM_ACTION_TYPE.CAMERA_TARGET_CHANGE,
            payload: position
        })
    },[])

    return (
        <CanvasContainer>
            <Canvas
            camera={{far:10000, position:state.cameraPosition}}
            onClick={()=>{ 
                dispatch({
                type: ROOM_ACTION_TYPE.INIT_CAMERATARGET,
                payload: [0,0,0] 
            })}}
            >
                <Suspense fallback={[]}>
                    <pointLight position={[0, 1000, 0]} intensity={0.4} />
                    <OrbitControls
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        zoomSpeed={0.6}
                        panSpeed={0.5}
                        rotateSpeed={0.7}
                        target={state.cameraTarget}
                    />
                    <axesHelper
                        scale={1000}
                    />
                    {
                        state.cellList.cells && state.cellList.cells.map((cellData:ICell)=>{
                            return(
                                <Cell
                                    key={cellData.id}
                                    cellData={cellData}
                                    cameraTargetChange={camerTargetChange}
                                />
                            )
                        })
                    }
                    <Floor
                        floorVictor2={state.floorVictor2}
                    />
                </Suspense>
            </Canvas>
        </CanvasContainer>
    )
}

export default Room