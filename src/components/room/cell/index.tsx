import React, { FC, ReactElement, useCallback, useReducer } from "react";
import { ICell } from "../../../containers/room/typings";
import { Html } from '@react-three/drei'
import Gene from "./gene";
import { Group } from "three";
import { cellReducer } from "../../../containers/room/reducer";

interface IProps {
    cellData: ICell
    cameraTargetChange: (position: [number, number, number]) => void
}

const initialState = {
    geneList: {
        id: 0,
        genes: [

        ]
    }
}


const Cell: FC<IProps> = ({
    cellData,
    cameraTargetChange
}): ReactElement => {

    const { name, position, id } = cellData;
    const [state, dispatch] = useReducer(cellReducer, initialState)

    return (
        <group position={position}>
            <mesh
                onClick={() => {
                    cameraTargetChange(position)

                }}

            >
                <sphereBufferGeometry args={[1.004, 32, 32]} />
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
                    onClick={() => cameraTargetChange(position)}//why it doesn't work?
                >
                    {name}
                </Html>
            </mesh>
            <Gene />
        </group>

    )
}

export default Cell