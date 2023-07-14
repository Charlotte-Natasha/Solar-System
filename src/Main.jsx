import { OrbitControls} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import AnimatedStars from "./AnimatedStars";

const Main = () => {
    return (
        <Canvas style={{ background: "black" }}>
            <OrbitControls />
            <AnimatedStars />
        </Canvas>
    );
}

export default Main
