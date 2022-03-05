import React from "react";

const Cell = () => {
    return (
        <mesh>
            <sphereBufferGeometry args={[1.004, 32, 32]}/>
            <meshStandardMaterial color="hotpink" />
        </mesh>
    )
}

export default Cell