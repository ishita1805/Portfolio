import * as THREE from 'three'
import React, { Suspense } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import img from '../../assets/man.png'

const Image = () =>{
    const texture = useLoader(THREE.TextureLoader, img)
  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[5.8, 7.8]} />
      <meshBasicMaterial attach="material" map={texture} toneMapped={false} />
    </mesh>
  )
}

const Three = () => {
    return (
        <div className='landing-vector-1'>
        <Canvas>
            <Suspense fallback={null}>
                <Image/>
            </Suspense>
        </Canvas>
        </div>
    )
}

export default Three