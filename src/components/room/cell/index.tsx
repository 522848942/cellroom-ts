import React, { FC, ReactElement } from "react";
import { ICell } from "../../../containers/room/typings";
import { Html } from '@react-three/drei'

interface IProps{
    cellState: ICell
    cameraTargetChange: (position:[number, number, number])=>void
}

const Cell:FC<IProps> = ({
    cellState,
    cameraTargetChange
}):ReactElement => {

    const {name, position} = cellState;

    return (
        <mesh 
        position={position}
        onClick={()=>cameraTargetChange(position)}
        >
            <sphereBufferGeometry args={[1.004, 32, 32]}/>
            <meshStandardMaterial color="hotpink" />
            <Html
                sprite
                transform
                distanceFactor={10}
                position={[5, 5, 0]}
                style={{
                background: 'palegreen',
                fontSize: '20px',
                padding: '10px 18px',
                border: '2px solid black',
                }}
                onClick={()=>cameraTargetChange(position)}
            >
                {name}
            </Html>
        </mesh>
    )
}

export default Cell