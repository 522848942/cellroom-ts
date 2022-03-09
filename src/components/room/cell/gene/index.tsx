import { Line } from "@react-three/drei";
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
        <Line
            points={linePath}      
            color="black" 
            lineWidth={1}  
            dashed={false} 
        />
    )
}

export default Gene