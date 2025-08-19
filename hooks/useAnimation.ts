import { useEffect, useRef } from 'react'
/
 * Custom hook for handling animations specific to the HouseIL brand.
 * 
 * @returns {Object} - Contains functions to trigger animations.
 */
export const useAnimation = () => {
    const elementsRef = useRef<HTMLElement[]>([])
    /
     * Add a ref to the elements to be animated.
     * 
     * @param {HTMLElement} element - The element to animate.
     */
    const addElement = (element: HTMLElement) => {
        if (element && !elementsRef.current.includes(element)) {
            elementsRef.current.push(element)
        }
    }
    /
     * Trigger animations for the specific elements when they are in viewport.
     * 
     * @returns {void}
     */
    const animateOnScroll = () => {
        elementsRef.current.forEach((element) => {
            const rect = element.getBoundingClientRect()
            const windowHeight = window.innerHeight
            if (rect.top < windowHeight && rect.bottom > 0) {
                element.classList.add('animate'); // Custom class to handle animation
            }
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', animateOnScroll)
        return () => {
            window.removeEventListener('scroll', animateOnScroll)
        }
    }, [])
    return {
        addElement,
    }
}
/
 * CSS for the animated elements used within HouseIL's technology-focused luxury website.
 * 
 * The dark design principles are applied consistently with pink and black colors to maintain a high-end aesthetic.
 */
const cssStyles = 
    .animate {
        transition: transform 0.5s ease, opacity 0.5s ease
        transform: translateY(0)
        opacity: 1
    }
    .element {
        transform: translateY(20px)
        opacity: 0
    }
    body {
        background-color: black; / Dark background for HouseIL /
        color: pink; / Text color matching brand /
        font-family: 'Arial', sans-serif
    }

// Append the styles to the document head
const styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = cssStyles
document.head.appendChild(styleSheet);