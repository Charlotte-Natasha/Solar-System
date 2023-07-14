import { OrbitControls, Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const Main = () => {
    return (
        <Canvas>
            <color attach='background' args={['black']}/>
            <OrbitControls/>
            <Stars/>
        </Canvas>
        
    )
}

export default Main
