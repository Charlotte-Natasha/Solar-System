import { OrbitControls, Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const Main = () => {
    return (
        <Canvas style={{ background: "black" }}>
            <OrbitControls />
            <Stars />
        </Canvas>
    );
}

export default Main
