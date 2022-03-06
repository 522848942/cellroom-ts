import React, { FC, ReactElement } from "react";
import { ICell } from "../../../containers/room/typings";

interface IProps{
    cellState: ICell
}

const Cell:FC<IProps> = ({
    cellState
}):ReactElement => {

    const {name, position} = cellState;

    return (
        <mesh position={position}>
            <sphereBufferGeometry args={[1.004, 32, 32]}/>
            <meshStandardMaterial color="hotpink" />
        </mesh>
    )
}

export default Cell