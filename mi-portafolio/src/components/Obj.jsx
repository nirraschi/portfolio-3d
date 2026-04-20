import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Obj({
    path,
    color,
    emissive,
    emissiveIntensity = 0,
    opacity = 1,
    wireframe = false,
    metalness,
    roughness,
    ...props
}) {
    const { scene } = useGLTF(path);

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh && child.material) {
                // Clonar el material para evitar modificar otros modelos
                child.material = child.material.clone();

                if (color) {
                    child.material.color = new THREE.Color(color);
                }

                if (emissive) {
                    child.material.emissive = new THREE.Color(emissive);
                    child.material.emissiveIntensity = emissiveIntensity;
                }

                if (metalness !== undefined) {
                    child.material.metalness = metalness;
                }

                if (roughness !== undefined) {
                    child.material.roughness = roughness;
                }

                if (opacity < 1) {
                    child.material.transparent = true;
                    child.material.opacity = opacity;
                }

                child.material.wireframe = wireframe;
                child.material.needsUpdate = true;
            }
        });
    }, [
        scene,
        color,
        emissive,
        emissiveIntensity,
        opacity,
        wireframe,
        metalness,
        roughness,
    ]);

    return <primitive object={scene} {...props} />;
}

// Precarga opcional
useGLTF.preload("/obj/tree.glb","/obj/cat.glb","/obj/github.glb");

export default Obj;