


const Earth = () => {
    return (
        <mesh>
            {/* radius, x, y, z-axis */}
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color='blue'/>
        </mesh>
    );
}

export default Earth
