import React from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function Plant(props) {
    const { nodes, materials } = useGLTF('/obj/plant.glb')


    const color = new THREE.MeshStandardMaterial({ color: "#ada387" })

    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.025}>

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Material2_1.geometry}
                    material={color}
                />

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Material2_4.geometry}
                    material={color}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Material2_5.geometry}
                    material={color}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Material2_6.geometry}
                    material={color}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Material2_7.geometry}
                    material={color}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Material2_8.geometry}
                    material={color}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/obj/plant.glb')