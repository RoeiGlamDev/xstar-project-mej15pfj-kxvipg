'use client'
import React from 'react'
import { Canvas } from 'react-three-fiber'
import { animated, useSpring } from 'react-spring'
import { useEffect } from 'react'
interface SceneProps {}

const Scene: React.FC<SceneProps> = () => {
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } })
  useEffect(() => {
    // Example to initialize any interactions or animations that involve technology elements here
  }, [])
  return (<>
<div className="flex items-center justify-center w-full h-screen bg-black">
      <animated.div style={springProps} className="relative w-full h-full">
        <h1 className="text-5xl font-semibold text-pink-500 text-center">
          Welcome to HouseIL
        </h1>
        <h2 className="mt-4 text-2xl text-pink-300 text-center">
          Your Luxurious Dark AirBNB Experience
        </h2>
        
        <Canvas className="absolute inset-0" camera={{ position: [0, 0, 5] }}>
          {/ 3D Elements go here /}
          {/ For example, we could insert a 3D house model /}
        </Canvas>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <button className="px-4 py-2 text-lg font-medium text-white bg-pink-600 rounded hover:bg-pink-700 transition duration-300 ease-in-out">
            Explore Our Properties
          </button>
        </div>
      </animated.div>
    </div>
</>)
}
export default Scene
);