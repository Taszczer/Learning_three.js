import { Suspense } from "react"
import { useGLTF, OrbitControls, Preload } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import CanvasLoader from "../Loader"

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf")

  return <primitive object={earth.scene} />
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>
    </Canvas> //Polar for rotating
  )
}

export default EarthCanvas
