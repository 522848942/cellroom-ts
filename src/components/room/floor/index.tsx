import React from "react";
import * as THREE from 'three'
import { useRef } from "react";
import {Mesh} from 'three'
import { useFrame } from "@react-three/fiber";

const Floor = () =>{
    return(
        <mesh position={[100, 0, 100]} rotation={[Math.PI/2, 0, 0]}>
            <planeBufferGeometry args={[200, 200, 75, 75]}/>
            <meshBasicMaterial wireframe color="grey" side={THREE.DoubleSide} />
        </mesh>
    )
}

export default Floor