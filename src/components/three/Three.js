import * as THREE from 'three'
import { TextureLoader } from "three";
import React, { Suspense, useMemo } from 'react'
import { Canvas, useLoader  } from 'react-three-fiber'
import { MeshWobbleMaterial } from "@react-three/drei";
import vector from '../../assets/man.png'

const Image = () =>{
    
    // const texture = useLoader(THREE.TextureLoader, vector)
    // const texture = useMemo(() => new TextureLoader().load(vector), []);
    const texture = useLoader(THREE.ImageLoader, vector)
    return <mesh>
        <MeshWobbleMaterial
            attach="material"
            factor={1} // Strength, 0 disables the effect (default=1)
            speed={10} // Speed (default=1)
            map={texture}
        />
    </mesh>
   
}

const Three = () => {
    return (
        <Canvas>
            <Suspense fallback={null}>
                <Image/>
            </Suspense>
        </Canvas>
    )
}

export default Three


    // {/* <div> */}
            // {/* <img alt='man' src={vector} className='landing-vector'/> */}
    // {/* </div> */}