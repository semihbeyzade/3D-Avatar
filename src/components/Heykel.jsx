import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Heykel(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('src/heykel.gltf')
    return (
        <group ref={group} {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_3.geometry} material={materials.material_7} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.material_6} />
            <mesh geometry={nodes.Object_6.geometry} material={materials.material_6} />
            <mesh geometry={nodes.Object_8.geometry} material={materials.material_5} />
            <mesh geometry={nodes.Object_9.geometry} material={materials.material_5} />
            <mesh geometry={nodes.Object_10.geometry} material={materials.material_5} />
            <mesh geometry={nodes.Object_12.geometry} material={materials.material_4} />
            <mesh geometry={nodes.Object_13.geometry} material={materials.material_4} />
            <mesh geometry={nodes.Object_15.geometry} material={materials.material_3} />
            <mesh geometry={nodes.Object_16.geometry} material={materials.material_3} />
            <mesh geometry={nodes.Object_18.geometry} material={materials.material_2} />
            <mesh geometry={nodes.Object_19.geometry} material={materials.material_2} />
            <mesh geometry={nodes.Object_21.geometry} material={materials.material_1} />
            <mesh geometry={nodes.Object_23.geometry} material={materials.material_0} />
          </group>
        </group>
      )
}

export default Heykel