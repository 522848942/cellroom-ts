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
                { id: 1, name: '1', linePath: [[1, 2, 3], [3, 4, 5], [6, 7, 8], [123, 45, 6]] },
                { id: 1, name: '1', linePath: [[1, 2, 3], [3, 4, 5], [6, 7, 8], [123, 45, 6]] },
                { id: 1, name: '1', linePath: [[1, 2, 3], [3, 4, 5], [6, 7, 8], [123, 45, 6]] },
                { id: 1, name: '1', linePath: [[1, 2, 3], [3, 4, 5], [6, 7, 8], [123, 45, 6]] },
                { id: 1, name: '1', linePath: [[1, 2, 3], [3, 4, 5], [6, 7, 8], [123, 45, 6]] },
                { id: 1, name: '1', linePath: [[1, 2, 3], [3, 4, 5], [6, 7, 8], [123, 45, 6]] },
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
            {
                state.geneList.genes && state.geneList.genes.map((geneData:IGene)=>{
                    return(
                        <Gene
                            key={geneData.id}
                            geneData={geneData}
                        />
                    )
                })
            }
        </group>

    )
}

export default Cell