
import React from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function Tree(props) {
    const { nodes } = useGLTF('/obj/tree.glb')

    const color = new THREE.MeshStandardMaterial({ color: "#ada387" })

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={color}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={46.324}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere003.geometry}
                material={color}
                position={[0.405, 6.347, -0.703]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={139.01}
            />
        </group>
    )
}

useGLTF.preload('/obj/tree.glb')
