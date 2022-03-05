import React from "react";
import * as THREE from 'three'
import { useRef } from "react";
import {Mesh} from 'three'
import { useFrame } from "@react-three/fiber";

const Floor = () =>{
    const floor = useRef<Mesh>();
    useFrame(()=>{
        floor.current!.rotation.x = Math.PI/2
    })
    return(
        <mesh ref={floor}>
            <planeBufferGeometry args={[200, 200, 75, 75]}/>
            <meshBasicMaterial wireframe color="grey" side={THREE.DoubleSide} />
        </mesh>
    )
}

export default Floor