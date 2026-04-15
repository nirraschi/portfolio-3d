import React, { useEffect, useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

function Island(props) {
    // Cargar el modelo
    const { scene } = useGLTF("/obj/island.glb");

    // Cargar el normal map (textura de relieve)
    const baseNormalMap = useTexture("/texture/wood.png");

    // Clonar la textura para poder modificarla sin errores
    const normalMap = useMemo(() => {
        const texture = baseNormalMap.clone();
        texture.colorSpace = THREE.NoColorSpace; // Importante para normal maps
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(2, 2);
        texture.flipY = false; // Necesario para modelos GLTF
        texture.needsUpdate = true;
        return texture;
    }, [baseNormalMap]);

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                // Clonar el material para evitar modificar el original
                child.material = child.material.clone();

                // Color base blanco
                child.material.color.set("#ffffff");
                

                // Aplicar relieve de madera
                child.material.normalMap = normalMap;
                child.material.normalScale = new THREE.Vector2(1, 1);

                // Propiedades físicas del material
                child.material.roughness = 0.9;
                child.material.metalness = 0;

                child.material.needsUpdate = true;
            }
        });
    }, [scene, normalMap]);

    return <primitive object={scene} {...props} />;
}

// Precarga del modelo
useGLTF.preload("/obj/island.glb");

export default Island;