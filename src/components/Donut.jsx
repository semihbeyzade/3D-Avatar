import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSnapshot } from "valtio";

function Donut({
  state,
  onPointerOver,
  onPointerOut,
  onPointerDown,
  onPointerMissed,
  ...rest
}) {
  const snap = useSnapshot(state);
  const group = useRef();
  const { nodes, materials } = useGLTF("src/donut/donut.gltf");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 4) / 4;
    group.current.position.y = (1 + Math.sin(t / 1.5)) / 2;
  });

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
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.mat0_Box}
          material-color={snap.items.mat0_Box}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.mat0_Sphere}
          material-color={snap.items.mat0_Sphere}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.mat0_base}
          material-color={snap.items.mat0_base}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.mat0_chipa}
          material-color={snap.items.mat0_chipa}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.mat0_chipa}
          material-color={snap.items.mat0_chipa}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.mat0_chipa}
          material-color={snap.items.mat0_chipa}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.mat0_left_arm}
          material-color={snap.items.mat0_left_arm}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.mat0_left_eye}
          material-color={snap.items.mat0_left_eye}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.mat0_left_leg}
          material-color={snap.items.mat0_left_leg}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.mat0_right_arm}
          material-color={snap.items.mat0_right_arm}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.mat0_right_leg}
          material-color={snap.items.mat0_right_leg}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials.mat0_rim_hat}
          material-color={snap.items.mat0_rim_hat}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.mat0_rim_hat}
          material-color={snap.items.mat0_rim_hat}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.mat1_left_arm}
          material-color={snap.items.mat1_left_arm}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.mat1_left_eye}
          material-color={snap.items.mat1_left_eye}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.mat1_left_leg}
          material-color={snap.items.mat1_left_leg}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.mat1_right_arm}
          material-color={snap.items.mat1_right_arm}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials.mat1_right_leg}
          material-color={snap.items.mat1_right_leg}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials.mat1_rim_hat}
          material-color={snap.items.mat1_rim_hat}
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials.mat2_left_arm}
          material-color={snap.items.mat2_left_arm}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials.mat2_left_eye}
          material-color={snap.items.mat2_left_eye}
        />
        <mesh
          geometry={nodes.Object_23.geometry}
          material={materials.mat2_left_leg}
          material-color={snap.items.mat2_left_leg}
        />
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials.mat2_right_arm}
          material-color={snap.items.mat2_right_arm}
        />
        <mesh
          geometry={nodes.Object_25.geometry}
          material={materials.mat2_right_leg}
          material-color={snap.items.mat2_right_leg}
        />
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials.mat2_rim_hat}
          material-color={snap.items.mat2_rim_hat}
        />
        <mesh
          geometry={nodes.Object_27.geometry}
          material={materials.mat3_left_eye}
          material-color={snap.items.mat3_left_eye}
        />
        <mesh
          geometry={nodes.Object_28.geometry}
          material={materials.mat3_rim_hat}
          material-color={snap.items.mat3_rim_hat}
        />
        <mesh
          geometry={nodes.Object_29.geometry}
          material={materials.mat3_rim_hat}
          material-color={snap.items.mat3_rim_hat}
        />
        <mesh
          geometry={nodes.Object_30.geometry}
          material={materials.mat4_left_eye}
          material-color={snap.items.mat4_left_eye}
        />
        <mesh
          geometry={nodes.Object_31.geometry}
          material={materials.mat5_left_eye}
          material-color={snap.items.mat5_left_eye}
        />
      </group>
    </group>
  );
}

export default Donut;
