import React from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { MeshStandardMaterial } from 'three'

export default function Table(props) {
    const { nodes, materials } = useGLTF('/obj/table.glb')
    const color = new THREE.MeshStandardMaterial({ color: "#ada387"  })
    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['���������014_������004_0'].geometry}
                    material={color}
                    position={[-54.289, 43.135, 8.676]}
                    rotation={[1.571, 1.554, -1.571]}
                    scale={[100, 99.993, 70.01]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    position={[-54.289, 43.135, 8.676]}
                    rotation={[1.571, 1.554, -1.571]}
                    scale={[100, 99.993, 70.01]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['���������015_������005_0'].geometry}
                    material={color}
                    position={[-54.55, 22.027, 8.676]}
                    rotation={[Math.PI / 2, -0.017, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['���������016_������004_0'].geometry}
                    material={color}
                    position={[-54.412, 2.036, 8.676]}
                    rotation={[Math.PI / 2, -0.017, 0]}
                    scale={[112.007, 160, 100.015]}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/obj/table.glb')
