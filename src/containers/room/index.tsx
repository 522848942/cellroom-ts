import React, { FC, ReactElement, useEffect, useReducer, useRef, useState } from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import styled from 'styled-components'
import { Suspense } from "react"
import { OrbitControls } from "@react-three/drei";

import Cell from "../../components/room/cell";
import Floor from "../../components/room/floor";
import { ACTION_TYPE, ICell, ICellList, IState } from "./typings";
import { roomReducer } from "./reducer";
import * as THREE from "three";

const CanvasContainer = styled.div`
	width: 100%;
	height: 100%;
`;

const initialState = {
    floorVictor2: [0, 0],
    cellList: {
        id: 0,
        cells:[
            {id:0,name:'0',position:[0,0,0]}
        ]
    }
} as IState

const Room: FC = (): ReactElement => {
    var width = window.innerWidth; //窗口宽度
    var height = window.innerHeight; //窗口高度
    var k = width / height; //窗口宽高比
    var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
    //创建相机对象
    const [state, dispatch] = useReducer(roomReducer, initialState)
    const [camera,setcamera] = useState(new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000))
    camera.position.set(0, 0, 200); //设置相机位置
    camera.lookAt(100,0,0); //设置相机方向(指向的场景对象)
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
        dispatch({
            type: ACTION_TYPE.INIT_CELLLIST,
            payload: cellList as ICellList
        })
        dispatch({
            type: ACTION_TYPE.INIT_FLOOR,
            payload: floorVictor2 as [number, number]
        })
    }, [])

    return (
        <CanvasContainer>
            <Canvas
                camera={camera}>
                <Suspense fallback={[]}>
                    <pointLight position={[0, 1000, 0]} intensity={0.4} />
                    <OrbitControls
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        zoomSpeed={0.6}
                        panSpeed={0.5}
                        rotateSpeed={0.7}
                        target={[100,0,0]}
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
                    <Floor
                        floorVictor2={state.floorVictor2}
                    />
                </Suspense>
            </Canvas>
        </CanvasContainer>
    )
}

export default Room