import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import Ceku from './Ceku';
import Palette from './Palette';

const state = proxy({
    current: null,
    items: {
      material_0: "#D4D925",
      material_1: "#FBCB0A",
      material_2: "#fff",
      material_3: "#fff",
      material_4: "#fff",
      material_5: "#fff",
      material_6: "#0AA1DD",
      material_7: "#fff",
    },
  });
  

function ContainerCeku() {
  
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
            <Ceku
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

export default ContainerCeku