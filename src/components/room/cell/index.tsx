import React, { FC, ReactElement, useCallback, useReducer } from "react";
import { ICell, IGene, IGeneList } from "../../../containers/room/typings";
import { Html } from '@react-three/drei'

import Gene from "./gene";
import { cellReducer } from "../../../containers/room/reducer";
import { CELL_ACTION_TYPE, ICellState } from '../../../containers/room/typings'

interface IProps {
    cellData: ICell
    cameraTargetChange: (position: [number, number, number]) => void
}

const initialState = {
    geneList: {
        id: 0,
        genes: [
            { id: 0, name: '0', linePath: [[0, 0, 0]] }
        ]
    }
} as ICellState


const Cell: FC<IProps> = ({
    cellData,
    cameraTargetChange
}): ReactElement => {

    const { name, position, id } = cellData;
    const [state, dispatch] = useReducer(cellReducer, initialState);

    const initGeneList = useCallback((id: number) => {
        const geneList = {
            id: 123,
            genes: [
                { id: 1, name: '1', linePath: [[13, 25, 43], [34, 43, 25], [56, 73, 28], [123, 45, 6]] },
                { id: 2, name: '2', linePath: [[16, 21, 23], [33, 24, 35], [69, 75, 38], [123, 45, 6]] },
                { id: 3, name: '3', linePath: [[12, 22, 32], [33, 34, 55], [56, 57, 28], [123, 45, 6]] },
                { id: 4, name: '4', linePath: [[18, 22, 3], [43, 24, 35], [6, 7, 82], [23, 45, 6]] },
                { id: 5, name: '5', linePath: [[21, 32, 63], [39, 44, 15], [46, 73, 28], [13, 45, 6]] },
                { id: 6, name: '6', linePath: [[14, 42, 73], [53, 44, 25], [56, 7, 38], [3, 45, 6]] },
            ]
        }
        dispatch({
            type: CELL_ACTION_TYPE.INIT_GENELIST,
            payload: geneList as IGeneList
        })
    }, [])

    return (
        <group position={position}>
            <mesh
                onClick={() => {
                    cameraTargetChange(position)
                    initGeneList(id)
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
            <group scale={0.01}>
                {
                    state.geneList.genes && state.geneList.genes.map((geneData: IGene) => {
                        return (
                            <Gene
                                key={geneData.id}
                                geneData={geneData}
                            />
                        )
                    })
                }
            </group>
        </group>

    )
}

export default Cell