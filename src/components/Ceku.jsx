import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSnapshot } from 'valtio'

function Ceku ({ state, onPointerOver, onPointerOut, onPointerDown, onPointerMissed, ...rest}) {
    const snap = useSnapshot(state)
    const group = useRef();
    const { nodes, materials } = useGLTF('src/heykel.gltf')
    return (
        <group 
        ref={group} 
        {...rest} 
        dispose={null}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
        onPointerDown={onPointerDown}
        onPointerMissed={onPointerMissed}
        >
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_3.geometry} material={materials.material_7} material-color={snap.items.material_7}/>
            <mesh geometry={nodes.Object_5.geometry} material={materials.material_6} material-color={snap.items.material_6}/>
            <mesh geometry={nodes.Object_6.geometry} material={materials.material_6} material-color={snap.items.material_6}/>
            <mesh geometry={nodes.Object_8.geometry} material={materials.material_5} material-color={snap.items.material_5}/>
            <mesh geometry={nodes.Object_9.geometry} material={materials.material_5} material-color={snap.items.material_5}/>
            <mesh geometry={nodes.Object_10.geometry} material={materials.material_5} material-color={snap.items.material_5}/>
            <mesh geometry={nodes.Object_12.geometry} material={materials.material_4} material-color={snap.items.material_4}/>
            <mesh geometry={nodes.Object_13.geometry} material={materials.material_4} material-color={snap.items.material_4}/>
            <mesh geometry={nodes.Object_15.geometry} material={materials.material_3} material-color={snap.items.material_3}/>
            <mesh geometry={nodes.Object_16.geometry} material={materials.material_3} material-color={snap.items.material_3}/>
            <mesh geometry={nodes.Object_18.geometry} material={materials.material_2} material-color={snap.items.material_2}/>
            <mesh geometry={nodes.Object_19.geometry} material={materials.material_2} material-color={snap.items.material_2}/>
            <mesh geometry={nodes.Object_21.geometry} material={materials.material_1} material-color={snap.items.material_1} />
            <mesh geometry={nodes.Object_23.geometry} material={materials.material_0} material-color={snap.items.material_0} />
          </group>
        </group>
      )
}

export default Ceku