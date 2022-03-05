import React from "react";
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import { Suspense, useRef } from "react"
import { OrbitControls, Stats, useHelper } from "@react-three/drei";

import Cell from "../../components/room/cell";
import Floor from "../../components/room/floor";

const CanvasContainer = styled.div`
	width: 100%;
	height: 100%;
`;

const Room = () => {
    return (
        <CanvasContainer>
            <Canvas>
                <Suspense fallback={[]}>
                    <pointLight position={[0,1000,0]} intensity={0.4} />
                    <OrbitControls
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        zoomSpeed={0.6}
                        panSpeed={0.5}
                        rotateSpeed={0.7}
                    />
                    <axesHelper
                        scale={10}
                    />
                    <Cell/>
                    <Floor/>
                </Suspense>
            </Canvas>
        </CanvasContainer>
    )
}

export default Room