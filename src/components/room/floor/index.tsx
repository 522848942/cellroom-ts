import React, { FC, ReactElement } from "react";
import * as THREE from 'three'
import { useRef } from "react";
import {Mesh} from 'three'
import { useFrame } from "@react-three/fiber";

interface IProps{
    floorVictor2: [number, number]
}

const Floor:FC<IProps> = ({
    floorVictor2
}):ReactElement =>{
    return(
        <mesh position={[floorVictor2[0]/2, 0, floorVictor2[1]/2]} rotation={[Math.PI/2, 0, 0]}>
            <planeBufferGeometry args={[floorVictor2[0], floorVictor2[1], 75, 75]}/>
            <meshBasicMaterial wireframe color="grey" side={THREE.DoubleSide} />
        </mesh>
    )
}

export default Floor