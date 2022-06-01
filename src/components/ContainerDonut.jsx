import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import Donut from "./Donut";
import Palette from './Palette';

const state = proxy({
    current: null,
    items: {
      mat0_Box: "#000",
      mat0_Sphere: "#000",
      mat0_base: "#000",
      mat0_chipa: "#fff",
      mat0_left_arm: "#fff",
      mat0_left_eye: "#fff",
      mat0_left_leg: "#0AA1DD",
      mat0_right_arm: "#fff",
      mat0_right_leg: "#fff",
      mat0_rim_hat: "#fff",
      mat1_left_arm: "#fff",
      mat1_left_eye: "#000",
      mat1_left_leg: "#fff",
      mat1_right_arm: "#fff",
      mat1_right_leg: "#fff",
      mat1_rim_hat: "#fff",
      mat2_left_arm: "#fff",
      mat2_left_eye: "#000",
      mat2_left_leg: "#fff",
      mat2_right_arm: "#fff",
      mat2_right_leg: "#fff",
      mat2_rim_hat: "#fff",
      mat3_left_eye: "#000",
      mat3_rim_hat_: "#fff",
      mat4_left_eye: "#000",
      mat5_left_eye: "#000"

    },
  });
  

function ContainerDonut() {
  
    const snap = useSnapshot(state);
    const [hovered, set] = useState(null);
  
    useEffect(() => {
      const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63"></tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
      const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
        hovered ? cursor : auto
      )}'), auto`
    }, [hovered, snap.items])
  
    const onPointerOver = (event) => {
      event.stopPropagation();
      set(event.object.material.name);
    };

    console.log(event.object);
  
    const onPointerOut = (event) => {
      /*  intersections bir event özelligi. kesisim var mi yok mu */
      event.intersections.length === 0 && set(null);
    };
  
    const onPointerDown = (event) => {
      event.stopPropagation();
      state.current = event.object.material.name;
    };
  
    const onPointerMissed = (event) => {
      state.current = null;
    };
  

  
    return (
      <>
        <Palette state={state}/>
        <Canvas>
          <Stars />
          <OrbitControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Donut
              state={state}
              onPointerOver={onPointerOver}
              onPointerOut={onPointerOut}
              onPointerDown={onPointerDown}
              onPointerMissed={onPointerMissed}
            />
          </Suspense>
        </Canvas>
      </>
    );
  
}

export default ContainerDonut