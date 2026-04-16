import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import Obj from './Obj'
import Island from './Island';
import {Environment} from '@react-three/drei';
import Room from './Room';


const MainScene = () => {
    return (
        <section className='h-screen w-screen overflow-x-hidden bg-[#dedad1]'>

            <Canvas camera={{ position: [0, 4, 80], fov: 50 }}>
                <ambientLight intensity={3} />
                <directionalLight position={[0, 2, 10]} intensity={3} />
                <OrbitControls />
                <Island path='/obj/island.glb'  scale={0.5} position={[0, 0, 0]} />
                <Environment preset='city' />
                <Room path='/obj/room.glb' scale={5} position={[0, 2, 0]} />

            </Canvas>


        </section>
    )
}

export default MainScene