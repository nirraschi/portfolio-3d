import React from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'
import * as THREE from 'three'

export default function Room(props) {
    const { nodes, materials } = useGLTF('/obj/isometric_room_3d.glb')
    const color = new THREE.MeshStandardMaterial({ color: "#ada387"  })
    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>


                <group position={[0, 180, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.window_Material006_0.geometry}
                        material={ color }
                    />

                </group>

                {/* CORTINA */}
                <group position={[-135.759, 198.295, 33.57]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.curt_Material004_0.geometry}
                        material={color}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus__0.geometry}
                        material={color}
                        position={[-0.076, 0.187, 0.656]}
                        rotation={[Math.PI / 2, -0.512, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus001__0.geometry}
                        material={color}
                        position={[-0.076, 0.131, 0.656]}
                        rotation={[Math.PI / 2, 0.553, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus002__0.geometry}
                        material={color}
                        position={[-0.076, 0.058, 0.656]}
                        rotation={[Math.PI / 2, -0.512, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus003__0.geometry}
                        material={color}
                        position={[-0.076, 0.003, 0.656]}
                        rotation={[Math.PI / 2, 0.553, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus004__0.geometry}
                        material={color}
                        position={[-0.076, -0.073, 0.656]}
                        rotation={[Math.PI / 2, -0.512, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus005__0.geometry}
                        material={color}
                        position={[-0.076, -0.129, 0.656]}
                        rotation={[Math.PI / 2, 0.553, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus006__0.geometry}
                        material={color}
                        position={[-0.076, -0.196, 0.656]}
                        rotation={[Math.PI / 2, -0.512, 0]}
                        scale={0.836}
                    />
                </group>

                <group position={[-135.759, 198.295, -61.494]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.curt001_Material004_0.geometry}
                        material={color}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus007__0.geometry}
                        material={color}
                        position={[-0.076, 0.187, 0.656]}
                        rotation={[Math.PI / 2, -0.512, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus008__0.geometry}
                        material={color}
                        position={[-0.076, 0.131, 0.656]}
                        rotation={[Math.PI / 2, 0.553, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus009__0.geometry}
                        material={color}
                        position={[-0.076, 0.058, 0.656]}
                        rotation={[Math.PI / 2, -0.512, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus010__0.geometry}
                        material={color}
                        position={[-0.076, 0.003, 0.656]}
                        rotation={[Math.PI / 2, 0.553, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus011__0.geometry}
                        material={color}
                        position={[-0.076, -0.073, 0.656]}
                        rotation={[Math.PI / 2, -0.512, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus012__0.geometry}
                        material={color}
                        position={[-0.076, -0.129, 0.656]}
                        rotation={[Math.PI / 2, 0.553, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus013__0.geometry}
                        material={color}
                        position={[-0.076, -0.196, 0.656]}
                        rotation={[Math.PI / 2, -0.512, 0]}
                        scale={0.836}
                    />
                </group>

                {/* LUZ */}
                <group position={[-100.757, 259.758, -152.375]} scale={100}>

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.lamp_Material005_0.geometry}
                        material={color}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere_Material032_0.geometry}
                        material={materials['Material.032']}
                        position={[0, -0.321, 0.223]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={0.145}
                    />
                </group>


                {/* PARED */}
                <group>
                    {/* <MeshStandardMaterial color="#ada387" /> */}
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.wall_Material_0.geometry}
                        material={ color}
                        position={[0, 180, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                        
                    />
                </group>



                {/* FLOOR*/}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.floor_Material001_0.geometry}
                    material={ new THREE.MeshStandardMaterial({ color: "#ada387"  })}
                    position={[0, 180, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curt_holder_Material006_0.geometry}
                    material={color}
                    position={[-152.396, 257.023, 62.557]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1.718}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curt_holder001_Material006_0.geometry}
                    material={color}
                    position={[-152.396, 257.347, -85.606]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1.718}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.curt_rod_Material006_0.geometry}
                    material={color}
                    position={[-143.383, 263.925, -10.452]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={3.714}
                />


            </group>
        </group>
    )
}

useGLTF.preload('/isometric_room_3d.glb')
