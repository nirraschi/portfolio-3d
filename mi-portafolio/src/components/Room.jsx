import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Room (props) {
    const { nodes, materials } = useGLTF('/obj/isometric_room_3d.glb')
    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>

            {/* SILLON GRANDE */}
                <group position={[27.343, 37.094, -105.529]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    
                    
                    {/* <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.couch_Material016_0.geometry}
                        material={materials['Material.016']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.couch_legs_Material006_0.geometry}
                        material={materials['Material.006']}
                        position={[0, 0, 0.08]}
                    /> */}
                    {/* <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.pillow_Material016_0.geometry}
                        material={materials['Material.016']}
                        position={[-0.382, 0.096, 0.744]}
                        rotation={[1.366, 0, 0]}
                        scale={[0.4, 0.325, 0.125]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.pillow001_Material016_0.geometry}
                        material={materials['Material.016']}
                        position={[0.394, 0.096, 0.744]}
                        rotation={[1.366, 0, 0]}
                        scale={[0.4, 0.325, 0.125]}
                    /> */}
                    {/* <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mini_pilow_Material015_0.geometry}
                        material={materials['Material.015']}
                        position={[-0.66, -0.185, 0.589]}
                        rotation={[0.718, 0.759, -0.864]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mini_pilow001_Material015_0.geometry}
                        material={materials['Material.015']}
                        position={[0.653, -0.185, 0.589]}
                        rotation={[0.718, -0.759, 0.864]}
                        scale={[-1, 1, 1]}
                    /> */}
                </group>

                <group position={[0, 180, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.window_Material006_0.geometry}
                        material={materials['Material.006']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.window_Material003_0.geometry}
                        material={materials['Material.003']}
                    />
                </group>

                {/* CORTINA */}
                <group position={[-135.759, 198.295, 33.57]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.curt_Material004_0.geometry}
                        material={materials['Material.004']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus__0.geometry}
                        material={materials.Torus__0}
                        position={[-0.076, 0.187, 0.656]}
                        rotation={[Math.PI / 2, -0.512, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus001__0.geometry}
                        material={materials.Torus__0}
                        position={[-0.076, 0.131, 0.656]}
                        rotation={[Math.PI / 2, 0.553, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus002__0.geometry}
                        material={materials.Torus__0}
                        position={[-0.076, 0.058, 0.656]}
                        rotation={[Math.PI / 2, -0.512, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus003__0.geometry}
                        material={materials.Torus__0}
                        position={[-0.076, 0.003, 0.656]}
                        rotation={[Math.PI / 2, 0.553, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus004__0.geometry}
                        material={materials.Torus__0}
                        position={[-0.076, -0.073, 0.656]}
                        rotation={[Math.PI / 2, -0.512, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus005__0.geometry}
                        material={materials.Torus__0}
                        position={[-0.076, -0.129, 0.656]}
                        rotation={[Math.PI / 2, 0.553, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus006__0.geometry}
                        material={materials.Torus__0}
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
                        material={materials['Material.004']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus007__0.geometry}
                        material={materials.Torus__0}
                        position={[-0.076, 0.187, 0.656]}
                        rotation={[Math.PI / 2, -0.512, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus008__0.geometry}
                        material={materials.Torus__0}
                        position={[-0.076, 0.131, 0.656]}
                        rotation={[Math.PI / 2, 0.553, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus009__0.geometry}
                        material={materials.Torus__0}
                        position={[-0.076, 0.058, 0.656]}
                        rotation={[Math.PI / 2, -0.512, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus010__0.geometry}
                        material={materials.Torus__0}
                        position={[-0.076, 0.003, 0.656]}
                        rotation={[Math.PI / 2, 0.553, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus011__0.geometry}
                        material={materials.Torus__0}
                        position={[-0.076, -0.073, 0.656]}
                        rotation={[Math.PI / 2, -0.512, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus012__0.geometry}
                        material={materials.Torus__0}
                        position={[-0.076, -0.129, 0.656]}
                        rotation={[Math.PI / 2, 0.553, 0]}
                        scale={0.836}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus013__0.geometry}
                        material={materials.Torus__0}
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
                        material={materials['Material.005']}
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

                {/* RELOJ */}
                {/* <group
                    position={[-152.399, 225.214, 99.14]}
                    rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                    scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder_Material001_0.geometry}
                        material={materials['Material.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Clock_Material006_0.geometry}
                        material={materials['Material.006']}
                        position={[0, 0, -0.027]}
                        rotation={[0, -Math.PI / 2, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube001_Material006_0.geometry}
                        material={materials['Material.006']}
                        position={[0, 0, -0.027]}
                        rotation={[-Math.PI / 2, -0.714, -Math.PI / 2]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube002_Material006_0.geometry}
                        material={materials['Material.006']}
                        position={[0, 0, -0.027]}
                        rotation={[-Math.PI / 2, -0.027, -Math.PI / 2]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube003_Material006_0.geometry}
                        material={materials['Material.006']}
                        position={[0, 0, -0.027]}
                        rotation={[-Math.PI / 2, 0.78, -Math.PI / 2]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube004_Material006_0.geometry}
                        material={materials['Material.006']}
                        position={[0, 0, -0.027]}
                        rotation={[-Math.PI / 2, 1.549, -1.571]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube006_Material006_0.geometry}
                        material={materials['Material.006']}
                        position={[0, 0, -0.027]}
                        rotation={[Math.PI / 2, 0.883, Math.PI / 2]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube007_Material006_0.geometry}
                        material={materials['Material.006']}
                        position={[0, 0, -0.027]}
                        rotation={[Math.PI / 2, 0.027, Math.PI / 2]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube008_Material006_0.geometry}
                        material={materials['Material.006']}
                        position={[0, 0, -0.027]}
                        rotation={[Math.PI / 2, -0.693, Math.PI / 2]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube005_Material006_0.geometry}
                        material={materials['Material.006']}
                        position={[0, 0, 0.018]}
                        rotation={[Math.PI / 2, -1.146, Math.PI / 2]}
                        scale={[0.008, 0.074, 0.016]}
                    />
                </group> */}

                {/* TAZA */}
                {/* <group position={[24.289, 81.071, -13.953]} rotation={[-Math.PI / 2, 0, 0]} scale={4.603}>
                    
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle_Material_0.geometry}
                        material={materials.Material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle_Material023_0.geometry}
                        material={materials['Material.023']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.cup_Material_0.geometry}
                        material={materials.Material}
                    />
                </group> */}

                {/* <group
                    position={[42.071, 82.692, -12.587]}
                    rotation={[-1.557, -0.006, -0.002]}
                    scale={35.446}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Donut_Material031_0.geometry}
                        material={materials['Material.031']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus015_Material030_0.geometry}
                        material={materials['Material.030']}
                        position={[0, 0, 0.009]}
                    />
                </group> */}
                
                {/* SILLA MACETA */}
                {/* <group position={[-112.653, 119.425, 93.502]} rotation={[-Math.PI / 2, 0, 0]} scale={100} >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_Material006_0.geometry}
                        material={materials['Material.006']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder002_Material006_0.geometry}
                        material={materials['Material.006']}
                        position={[0, 0, -0.046]}
                        scale={0.871}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mini_table_Material006_0.geometry}
                        material={materials['Material.006']}
                        position={[0.1, -0.076, -0.098]}
                        rotation={[0, 0, 0.529]}
                        scale={0.018}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube011_Material006_0.geometry}
                        material={materials['Material.006']}
                        position={[0.101, 0.077, -0.098]}
                        rotation={[0, 0, 2.181]}
                        scale={0.018}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube012_Material006_0.geometry}
                        material={materials['Material.006']}
                        position={[-0.071, 0.106, -0.098]}
                        rotation={[0, 0, -2.464]}
                        scale={0.018}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube013_Material006_0.geometry}
                        material={materials['Material.006']}
                        position={[-0.099, -0.082, -0.098]}
                        rotation={[0, 0, -0.675]}
                        scale={0.018}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder003_Material006_0.geometry}
                        material={materials['Material.006']}
                        position={[0, 0, -0.494]}
                        scale={[0.871, 0.871, 0.562]}
                    />
                </group> */}
                
                
                {/* POT */}
                {/* <group position={[0, 4.132, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.pot_Material002_0.geometry}
                        material={materials['Material.002']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube019_Material017_0.geometry}
                        material={materials['Material.017']}
                        position={[0.316, -0.29, -0.379]}
                        scale={1.283}
                    />
                </group> */}
                
                {/* PARED */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.wall_Material_0.geometry}
                    material={materials.Material}
                    position={[0, 180, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                {/* FLOOR*/}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.floor_Material001_0.geometry}
                    material={materials['Material.001']}
                    position={[0, 180, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                {/* ALFOMBRA */}
                {/* <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.rug_Material016_0.geometry}
                    material={materials['Material.016']}
                    position={[49.792, 45.233, 46.319]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                /> */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curt_holder_Material006_0.geometry}
                    material={materials['Material.006']}
                    position={[-152.396, 257.023, 62.557]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1.718}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curt_holder001_Material006_0.geometry}
                    material={materials['Material.006']}
                    position={[-152.396, 257.347, -85.606]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1.718}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.curt_rod_Material006_0.geometry}
                    material={materials['Material.006']}
                    position={[-143.383, 263.925, -10.452]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={3.714}
                />
                {/* TABLE */}
                {/* <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.table_Material006_0.geometry}
                    material={materials['Material.006']}
                    position={[47.288, 74.624, -0.126]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[54.694, 31.677, 31.677]}
                /> */}

                {/* PLATE */}
                {/* <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle001_Material_0.geometry}
                    material={materials.Material}
                    position={[24.09, 81.071, -14.511]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={3.999}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle002_Material_0.geometry}
                    material={materials.Material}
                    position={[41.966, 81.071, -12.633]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={3.301}
                /> */}

            </group>
        </group>
    )
}

useGLTF.preload('/isometric_room_3d.glb')
