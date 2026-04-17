import React from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'
import * as THREE from 'three'


export default function Stone(props) {
    const { nodes } = useGLTF('/obj/stone.glb')
    const color = new THREE.MeshStandardMaterial({ color: "#ada387"  })

    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mff_stone_path_1_0.geometry}
                    material={color}
                    position={[0, 0, 0]}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/obj/stone.glb')