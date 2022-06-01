import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import Ceku from "./components/Ceku";
import Palette from "./components/Palette";

// scene => sahne
// geometry => döndürmek istedigimiz nesne
// material => renk,
// mesh => geometry, material

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

function App() {
  const snap = useSnapshot(state);
  const [hovered, set] = useState(null);

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

  console.log(state.current);

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

export default App;
