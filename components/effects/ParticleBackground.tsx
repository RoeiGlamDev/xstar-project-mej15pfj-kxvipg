'use client'
import React, { useEffect } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'
const ParticleBackground: React.FC = () => {
    useEffect(() => {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)
        const particles: THREE.Sprite[] = []
        const particleCount = 1000
        const textureLoader = new THREE.TextureLoader()
        const particleTexture = textureLoader.load('/path/to/particleTexture.png'); // Replace with actual path to your particle texture

        for (let i = 0; i < particleCount; i++) {
            const particle = new THREE.Sprite(new THREE.SpriteMaterial({ map: particleTexture, color: 0xff69b4 }))
            particle.position.set(
                Math.random() * 2000 - 1000,
                Math.random() * 2000 - 1000,
                Math.random() * 2000 - 1000
            )
            particle.scale.set(10, 10, 1)
            scene.add(particle)
            particles.push(particle)
        }

        camera.position.z = 900
        const animateParticles = () => {
            particles.forEach((particle) => {
                particle.rotation.x += 0.005
                particle.rotation.y += 0.005
            })
            renderer.render(scene, camera)
            requestAnimationFrame(animateParticles)
        }
        animateParticles()
        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', onWindowResize, false)
        return () => {
            window.removeEventListener('resize', onWindowResize)
            document.body.removeChild(renderer.domElement)
        }
    }, [])
    return (<>
<div className="fixed top-0 left-0 w-full h-full overflow-hidden">
            <motion.div
                className="flex flex-col items-center justify-center h-full text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}

                <h1 className="text-5xl font-bold mb-4">Welcome to HouseIL</h1>
                <p className="text-lg max-w-lg text-center">
                    Discover luxury accommodations enhanced by cutting-edge technology at HouseIL. Our mission is to redefine your experience with state-of-the-art solutions and a premium stay in style.
                </p>
            </motion.div>
        </div>
</>)
}
export default ParticleBackground
);