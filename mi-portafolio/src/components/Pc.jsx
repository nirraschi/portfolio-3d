
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
const color = new THREE.MeshStandardMaterial({ color: "#ada387" })


export default function Pc(props) {
    const { nodes, materials } = useGLTF('/obj/pc.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.monitorFoot.geometry}
                material={materials.M_plastic_bone_shad}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mouse.geometry}
                material={materials.M_plastic_bone}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.screentext.geometry}
                material={materials.M_screen_whitetext}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.speakers_1.geometry}
                material={color}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.speakers_2.geometry}
                material={color}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.monitorAxistilt_1.geometry}
                material={materials.M_plastic_bone}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.monitorAxistilt_2.geometry}
                material={materials.M_screen_brightblue}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboard_1.geometry}
                material={color}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboard_2.geometry}
                material={color}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboard_3.geometry}
                material={color}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.computerbody_1.geometry}
                material={materials.M_plastic_bone_shad}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.computerbody_2.geometry}
                material={materials.M_plastic_bone}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.computerbody_3.geometry}
                material={materials.M_lam_darkgrey}
            />
        </group>
    )
}

useGLTF.preload('/obj/pc.glb')
