import { OrbitControls, useHelper} from "@react-three/drei"
import AnimatedStars from "./AnimatedStars";
import Earth from "./Earth";
import { useRef } from "react";
import * as THREE from 'three'

const Main = () => {
    const directionalLightRef = useRef();
    const directionalLightRefTwo = useRef();
    useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink');
    useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, 'hotpink')
    return (
        <>
            <OrbitControls />
            <AnimatedStars />
            <directionalLight ref={directionalLightRef} position={[0, 0, 10]} />
            <directionalLight ref={directionalLightRefTwo} position={[0, 0, -10]} />
            <Earth />
        </>
    ); 
}

export default Main
