import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import React from 'react'

function Island({...props}) {
    const { scene } = useGLTF('/obj/island.glb')
    const [normalMap, metRoughMap] = useTexture([
        '/texture/Normal.png',
        '/texture/MetallicRoughness.png',
    ])

    // Hook de React para aplicar materiales
    React.useLayoutEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({
                    color: "#ada387",
                    normalMap,
                    normalScale: new THREE.Vector2(1, 1),
                    roughnessMap: metRoughMap,
                    metalnessMap: metRoughMap,
                    roughness: 1,
                    metalness: 1,
                })
            }
        })
    }, [scene, normalMap, metRoughMap])

    return <primitive object={scene} {...props} />
}

export default Island