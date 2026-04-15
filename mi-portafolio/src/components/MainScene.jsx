import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import Obj from './Obj'
import Island from './Island';

const MainScene = () => {
    return (
        <section className='h-screen w-screen overflow-x-hidden bg-amber-100'>

            <Canvas camera={{ position: [0, 2, 20], fov: 50 }}>
                <ambientLight intensity={7} />
                <OrbitControls />
                <Island path='/obj/island.glb'  scale={0.1} position={[0, 0, 0]} emissive={"#e0d9c5"} emissiveIntensity={1} />
            </Canvas>


        </section>
    )
}

export default MainScene