import React, { FC, ReactElement, useEffect, useReducer } from "react";
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import { Suspense } from "react"
import { OrbitControls } from "@react-three/drei";

import Cell from "../../components/room/cell";
import Floor from "../../components/room/floor";
import { ACTION_TYPE, ICell, ICellList, IState } from "./typings";
import { cellListReducer } from "./reducer";

const CanvasContainer = styled.div`
	width: 100%;
	height: 100%;
`;

function init(initCellList: ICellList): IState {
    return {
        cellList: initCellList
    }
}

const Room: FC = (): ReactElement => {
    const [state, dispatch] = useReducer(cellListReducer, {id:0,cells:[{id:0,name:'none',position:[0,0,0]}]}, init)
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
            ]
        }
        dispatch({
            type: ACTION_TYPE.INIT_CELLLIST,
            payload: cellList as ICellList
        })
    }, [])
    return (
        <CanvasContainer>
            <Canvas
                camera={{ fov: 75, near: 0.1, far: 1000, position: [200, 200, 200] }}>
                <Suspense fallback={[]}>
                    <pointLight position={[0, 1000, 0]} intensity={0.4} />
                    <OrbitControls
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        zoomSpeed={0.6}
                        panSpeed={0.5}
                        rotateSpeed={0.7}
                    />
                    <axesHelper
                        scale={1000}
                    />
                    {
                        state.cellList.cells && state.cellList.cells.map((cellState:ICell)=>{
                            return(
                                <Cell
                                    key={cellState.id}
                                    cellState={cellState}
                                />
                            )
                        })
                    }
                    <Floor />
                </Suspense>
            </Canvas>
        </CanvasContainer>
    )
}

export default Room