'use client'
export default function HeroSection() {
  return (
import React from 'react'
import { motion } from 'framer-motion'
interface HeroSectionProps {
  title: string
  subtitle: string
  buttons: { label: string; link: string }[]
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, buttons }) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-black text-white p-5">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold text-pink-500 mb-4" 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}

        {title}
      </motion.div>
      <motion.p 
        className="text-xl md:text-2xl mb-8 text-gray-300" 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }}

        {subtitle}
      </motion.div>
      <div className="flex space-x-4">
        {buttons.map((button, index) => (
          <motion.a 
            key={index} 
            href={button.link} 
            className="py-3 px-6 bg
)
  )
}
