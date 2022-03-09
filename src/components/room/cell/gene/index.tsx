import { Html, Line } from "@react-three/drei";
import React, { FC, ReactElement } from "react";
import { IGene } from "../../../../containers/room/typings";
interface IProps {
    geneData: IGene
}

const Gene: FC<IProps> = ({
    geneData
}): ReactElement => {
    const { name, id, linePath } = geneData;
    return (
        <mesh>
            <Line
                points={linePath}
                color="black"
                lineWidth={1}
                dashed={false}
            />
        </mesh>
    )
}

export default Gene