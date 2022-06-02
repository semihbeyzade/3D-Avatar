import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useSnapshot } from 'valtio'


function Vespa({ state, onPointerOver, onPointerOut, onPointerDown, onPointerMissed, ...rest}) {
    const snap = useSnapshot(state)
    const group = useRef();
    const { nodes, materials } = useGLTF('/vespa/vespa.gltf')

  /*   useFrame((state) => {
      const t = state.clock.getElapsedTime()
      group.current.rotation.y = Math.sin(t / 4) / 4
      group.current.position.y = (1 + Math.sin(t / 1.5)) / 2
    }) */
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
    <group rotation={[-Math.PI / 2, 0, 0]} scale={0.5} position={[-5,0,0]}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_3.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_4.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_5.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_6.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_7.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_8.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_9.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_10.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_11.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_12.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_13.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_14.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_15.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_16.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_17.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_18.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_19.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_20.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_21.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_22.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_23.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_24.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_25.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_26.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_27.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_28.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_29.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_30.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_31.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_32.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_33.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_34.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_35.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_36.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_37.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_38.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_39.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_40.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_41.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_42.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_43.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_44.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_45.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_46.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_47.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_48.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_49.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_50.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_51.geometry} material={materials.lambert2SG} material-color={snap.items.lambert2SG}/>
      <mesh geometry={nodes.Object_52.geometry} material={materials.lambert3SG} material-color={snap.items.lambert3SG}/>
      <mesh geometry={nodes.Object_53.geometry} material={materials.lambert4SG} material-color={snap.items.lambert4SG}/>
      <mesh geometry={nodes.Object_54.geometry} material={materials.lambert5SG} material-color={snap.items.lambert5SG}/>
    </group>
  </group>
  )
}

export default Vespa