import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Desktop(props) {
    const { nodes, materials } = useGLTF('/obj/desktop.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Gab_lambert4_0.geometry}
                material={materials.lambert4}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Keyboard_lambert3_0.geometry}
                material={materials.lambert3}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Table_StingrayPBS3_0.geometry}
                material={materials.StingrayPBS3}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Monitor_lambert2_0.geometry}
                material={materials.lambert2}
            />
        </group>
    )
}

useGLTF.preload('/obj/desktop.glb')





