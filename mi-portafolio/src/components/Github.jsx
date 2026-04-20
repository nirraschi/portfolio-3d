import React, { useState, useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Github(props) {
    const { nodes, materials } = useGLTF('/obj/github.glb')
    const [hovered, setHovered] = useState(false)
    const groupRef = useRef()

    // Refs para animación suave sin re-renders
    const emissiveRef = useRef(new THREE.Color("#000000"))
    const targetEmissive = useRef(new THREE.Color("#000000"))

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
        return () => (document.body.style.cursor = 'auto')
    }, [hovered])

    useFrame(() => {
        if (!groupRef.current) return

        // Escala suave
        const targetScale = hovered ? 1.1 : 1
        groupRef.current.scale.lerp(
            new THREE.Vector3(targetScale, targetScale, targetScale),
            0.1
        )

        

        // Color emissive suave con lerp
        targetEmissive.current.set(hovered ? "#6e40c9" : "#000000")
        emissiveRef.current.lerp(targetEmissive.current, 0.1)

        // Aplicar el color a los materiales
        groupRef.current.traverse((child) => {
            if (child.isMesh && child.material) {
                child.material.emissive.copy(emissiveRef.current)
                child.material.emissiveIntensity = hovered ? 0.6 : 0
            }
        })
    })

    return (
        <group
            ref={groupRef}
            {...props}
            dispose={null}
            onPointerOver={(e) => { e.stopPropagation(); setHovered(true) }}
            onPointerOut={() => setHovered(false)}
            onClick={(e) => { e.stopPropagation(); window.open("https://github.com/nirraschi", "_blank") }}
        >
            <group
                position={[-0.055, 2.945, 6.336]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={28.364}
            >
                <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry}>
                    <meshStandardMaterial {...materials.glossy_putih} />
                </mesh>
                <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry}>
                    <meshStandardMaterial {...materials.github} />
                </mesh>
            </group>
        </group>
    )
}

useGLTF.preload('/obj/github.glb')