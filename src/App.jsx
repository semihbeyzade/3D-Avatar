import React, { Suspense, useRef } from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import {proxy, useSnapshot} from 'valtio'
import Cat from './components/Cat'
import Heykel from './components/Heykel'

// scene => sahne
// geometry => döndürmek istedigimiz nesne
// material => renk,
// mesh => geometry, material


function App() {
  return (
    
  <Canvas>
    <Stars />
    <OrbitControls />
    <ambientLight />
    <pointLight position={[10,10,10]}  />
  {/*   <Suspense fallback={null}>
    <Cat />
    </Suspense> */}
    <Suspense fallback={null}>
    <Heykel />
    </Suspense> 
  </Canvas>
  
  )
}

export default App