import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import Obj from './Obj'
import Island from './Island';
import { Environment } from '@react-three/drei';
import Room from './Room';
import Stone from './Stone';
import Desktop from './Desktop';
import  Table  from './Table';
import Pc from './Pc';

const MainScene = () => {
    return (
        <section className='h-screen w-screen overflow-x-hidden bg-[#dedad1]'>

            <Canvas camera={{ position: [0, 4, 80], fov: 50 }}>
                <ambientLight intensity={0.5} />

                <directionalLight position={[8, 1, 20]} intensity={2} color={"#ffe7cc"} />

                <OrbitControls />

                <Environment preset='city' />

                <Island path='/obj/island.glb' scale={0.5} position={[0, 0, 0]} rotation={[-Math.PI / 0.01, 1.2, 0]} />
                
                <Room path='/obj/room.glb' scale={6} position={[0, 2, 0]} />
                <Stone path='/obj/stone.glb' scale={4} position={[1, 2.8, 12.4]} rotation={[-Math.PI / 0.01, 1.2, 0]} />
                <Stone path='/obj/stone.glb' scale={4} position={[6.7, 2.8, 14]} rotation={[-Math.PI / 0.01, 4.3, 0]} />
                <Stone path='/obj/stone.glb' scale={3.2} position={[3.7, 2.8, 18.8]} rotation={[-Math.PI / 0.01, 1.2, 0]} />
                <Stone path='/obj/stone.glb' scale={4} position={[8.4, 2.8, 20.4]} rotation={[-Math.PI / 0.01, 4.3, 0]} />

                {/* <Desktop path='/obj/desktop.glb' scale={0.4} position={[4.1, 4.2, -3.3]} rotation={[-Math.PI / 0.01, 4.72, 0]} /> */}
                <Table path='/obj/table.glb' scale={11} position={[1.6, 4.8, 0.2]} rotation={[-Math.PI / 0.1, 4.72, 0.02]} />
                <Pc path='/obj/pc.glb' scale={48} position={[0.5, 9.8, -7]} rotation={[-Math.PI / 0.01, 0, 0]} />

            </Canvas>


        </section>
    )
}

export default MainScene