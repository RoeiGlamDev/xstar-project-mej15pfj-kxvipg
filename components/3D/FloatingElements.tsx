'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { a } from '@react-spring/three'
import { useEffect } from 'react'
interface FloatingElementProps {
  position: [number, number, number]
  rotationSpeed: number
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position, rotationSpeed }) => {
  const meshRef = React.useRef<THREE.Mesh>(null!)
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed
      meshRef.current.rotation.y += rotationSpeed
    }
  })
  return (<>
<a.mesh ref={meshRef} position={position}>
      <sphereBufferGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="pink" />
    </a.mesh>
</>)
}
const FloatingElements: React.FC = () => {
  return (<>
<Canvas 
      className="w-full h-full" 
      style={{ background: 'black', position: 'relative' }}

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingElement position={[0, 0, 0]} rotationSpeed={0.01} />
      <FloatingElement position={[-2, 1, 0]} rotationSpeed={0.01} />
      <FloatingElement position={[2, -1, 0]} rotationSpeed={0.01} />
    </Canvas>
</>)
}
const HouseIL: React.FC = () => {
  return (<>
<div className="bg-black text-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-pink-400 mb-5">Welcome to HouseIL</h1>
      <p className="text-xl text-gray-300 mb-5">
        Experience luxury in technology-driven Airbnb solutions. 
        Discover unparalleled comfort and elegance with HouseIL.
      </p>
      <strong className="text-pink-400">Elevate your stay with technology that understands you.</strong>
      <div className="mt-10 relative" style={{ width: '80%', height: '50%' }}>
        <FloatingElements />
      </div>
    </div>
</>)
}
export default HouseIL
);