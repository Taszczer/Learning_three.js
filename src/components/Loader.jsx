import {Html, useProgress } from '@react-three/drei'

const Loader = () => {

  const { progress } = useProgress(); //for speed

  return (
    <Html>
      <span className='canvas-load'></span>
      <p>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader