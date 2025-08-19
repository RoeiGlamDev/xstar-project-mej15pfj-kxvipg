'use client'
import React, { FC } from 'react'
import { motion } from 'framer-motion'
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  children: React.ReactNode
}

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, boxShadow: "0 0 10px rgba(245, 112, 200, 0.5)" },
  tap: { scale: 0.95 },
}
const Button: FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
  const baseStyles = "transition-transform duration-300 ease-in-out rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
  const primaryStyles = "bg-pink-500 text-black hover:bg-pink-600 active:bg-pink-700"
  const secondaryStyles = "bg-black text-pink-500 hover:bg-gray-800 active:bg-gray-700"
  return (<>
<motion.button
      className={${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles}}
      onClick={onClick}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"

      {children}
    </motion.div>
</>)
}
export default Button
);