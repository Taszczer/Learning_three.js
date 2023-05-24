import {Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'


import { OrbitControls, Preload, meshBounds, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = () => {

  const computer = useGLTF('./desktop_pc/scene.gltf')//importing model

  return (
    <mesh>
      <hemisphereLight intensity={0.15} 
      groundColor="black"  />
    </mesh> //mesh using for light
  )
}

export default Computers