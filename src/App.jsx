import React, { Suspense, useRef } from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import {proxy, useSnapshot} from 'valtio'
import Ceku from './components/Ceku'

// scene => sahne
// geometry => döndürmek istedigimiz nesne
// material => renk,
// mesh => geometry, material

const state = proxy({
  current: null,
  items: {
   bottom: "#D4D925",
   outer_shell: "#FBCB0A",
   inner_shell: "#fff",
   inner_shell: "#fff",
   inner_shell: "#fff",
   head: "#fff",
   eye: "#0AA1DD",
   arm: "#fff", 

  },

});


function App() {
  const snap = useSnapshot(state)
  return (
    
  <Canvas>
    <Stars />
    <OrbitControls />
    <ambientLight />
    <pointLight position={[10,10,10]} />
    <Suspense fallback={null}>
    <Ceku state={state}/>
    </Suspense> 
  </Canvas>
  
  )
}

export default App