import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Cat(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('src/robot.gltf')
    return (
      <group ref={group} {...props} dispose={null}>
        <group position={[0, 0, 0]} scale={10}>
          <group position={[-0.07, 0.1, 0.06]} rotation={[Math.PI / 2, 0, 0]}>
            <primitive object={nodes['node_bone_06_-5174']} />
            <primitive object={nodes['node_bone_12_-5176']} />
            <primitive object={nodes['node_bone_19_-5178']} />
            <primitive object={nodes['node_bone_23_-5180']} />
            <primitive object={nodes['node_bone_26_-5182']} />
            <skinnedMesh geometry={nodes['node_Soft_01_-5186'].geometry} material={materials.Lieutenant_Head} skeleton={nodes['node_Soft_01_-5186'].skeleton} position={[0.03, 0, -0.06]} rotation={[-Math.PI / 2, 0, 0]} />
            <skinnedMesh geometry={nodes['node_Soft_02_-5188'].geometry} material={materials.Lieutenant_Head} skeleton={nodes['node_Soft_02_-5188'].skeleton} position={[0.03, -0.07, -0.05]} rotation={[-Math.PI / 2, 0, 0]} />
            <skinnedMesh geometry={nodes['node_Soft_03_-5190'].geometry} material={materials.Lieutenant_Head} skeleton={nodes['node_Soft_03_-5190'].skeleton} position={[-0.07, 0, -0.02]} rotation={[-Math.PI / 2, 0, 0]} />
            <skinnedMesh geometry={nodes['node_Soft_04_-5192'].geometry} material={materials.Lieutenant_Head} skeleton={nodes['node_Soft_04_-5192'].skeleton} position={[-0.02, 0, 0.06]} rotation={[-Math.PI / 2, 0, 0]} />
            <skinnedMesh geometry={nodes['node_Soft_00_-5184'].geometry} material={materials.Lieutenant_Head} skeleton={nodes['node_Soft_00_-5184'].skeleton} position={[0.04, 0.01, -0.04]} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
          <mesh geometry={nodes['node_Bandages_-5158'].geometry} material={materials.Lieutenant_Head} position={[0, -1.61, 0]} scale={10} />
          <mesh geometry={nodes['node_Body_-5160'].geometry} material={materials.body} position={[0, -1.61, 0]} scale={10} />
          <mesh geometry={nodes['node_Head_-5164'].geometry} material={materials.Lieutenant_Head} position={[0, -1.61, 0]} scale={10} />
          <group position={[0, 0, -0.05]} rotation={[Math.PI, 1.56, Math.PI / 2]} scale={0.99}>
            <mesh geometry={nodes.mesh_eyes_10628Lieutenant_Eyes.geometry} material={materials.Lieutenant_Head} />
            <mesh geometry={nodes.mesh_eyes_10628Lieutenant_Eyes_1.geometry} material={materials.lens} />
          </group>
          <mesh geometry={nodes['node_Jacket_clean_-5168'].geometry} material={materials.Lieutenant_Jacket} position={[0, -1.61, 0]} rotation={[Math.PI / 2, 0, 0]} scale={10} />
          <mesh geometry={nodes['node_Jacket_details_clean_-5170'].geometry} material={materials.Lieutenant_Jacket} position={[0, -1.61, 0]} rotation={[Math.PI / 2, 0, 0]} scale={10} />
        </group>
      </group>
    )
}

export default Cat