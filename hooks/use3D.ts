import { useEffect, useRef } from 'react'
import * as THREE from 'three'
/
 * Custom hook for creating 3D interactive elements for HouseIL.
 * Leverages Three.js for rendering and interaction.
 *
 * @returns {Object} Contains methods and the Three.js scene reference.
 */
export const use3D = () => {
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  // Initialization of the 3D scene and rendering setup
  const initScene = () => {
    // Create the scene
    const scene = new THREE.Scene()
    sceneRef.current = scene
    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5
    cameraRef.current = camera
    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(new THREE.Color(0x000000)); // Set background to black
    document.body.appendChild(renderer.domElement)
    rendererRef.current = renderer
    // Lighting for a luxurious feel
    const ambientLight = new THREE.AmbientLight(0xff00ff, 0.5); // Pink ambient light
    scene.add(ambientLight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5).normalize()
    scene.add(directionalLight)
    // Add 3D objects for HouseIL here (e.g., luxury villas, elements)
    // Example: const geometry = new THREE.BoxGeometry()
    // Add your custom shapes and materials...

    // Start the rendering loop
    const animate = () => {
      requestAnimationFrame(animate)
      // Example of a simple rotation for interaction
      if (sceneRef.current) {
        // e.g., mesh.rotation.x += 0.01; // Rotate if there's a mesh
      }

      renderer.render(scene, camera)
    }
    animate()
  }
  // Resize handler
  const handleResize = () => {
    if (rendererRef.current && cameraRef.current) {
      const width = window.innerWidth
      const height = window.innerHeight
      rendererRef.current.setSize(width, height)
      cameraRef.current.aspect = width / height
      cameraRef.current.updateProjectionMatrix()
    }
  }
  // Effects
  useEffect(() => {
    initScene()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
      sceneRef.current = null
      rendererRef.current = null
      cameraRef.current = null
    }
  }, [])
  return { sceneRef, rendererRef, cameraRef }
};