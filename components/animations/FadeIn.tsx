'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
interface FadeInProps {
    children: React.ReactNode
    className?: string
}

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(ref, { once: true })
    return (<>
<motion.div
            ref={ref}
            className={transition-opacity duration-700 ${className}}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}

            {children}
        </motion.div>
</>)
}
export default FadeIn
);