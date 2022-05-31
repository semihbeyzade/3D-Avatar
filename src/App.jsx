import React, { Suspense, useRef } from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import Cat from './components/Cat'

// scene => sahne
// geometry => döndürmek istedigimiz nesne
// material => renk,
// mesh => geometry, material


function App() {
  return (
  <Canvas>
    <Stars />
    <ambientLight />
    <pointLight position={[10,10,10]}  />
    <Suspense fallback={null}>
    <Cat />
    </Suspense>
    
  </Canvas>
  )
}

export default App