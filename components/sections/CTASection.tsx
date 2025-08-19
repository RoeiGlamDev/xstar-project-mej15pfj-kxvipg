'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title = "Experience Luxury with HouseIL", 
  description = "Book your stay at HouseIL, where high-end technology meets elegance in a dark and luxurious atmosphere. Explore our exclusive listings tailored for tech-savvy travelers looking for comfort and class.", 
  buttonText = "Discover Your Stay", 
  buttonLink = "/listings" 
}) => {
  return (<>
<section className="flex flex-col items-center justify-center bg-black text-pink-500 py-20 px-5">
      <motion.h2 
        className="text-4xl font-bold mb-4" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}

        {title}
      </motion.div>
      <motion.p 
        className="text-xl mb-6 text-center max-w-lg" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}

        {description}
      </motion.div>
      <motion.a 
        href={buttonLink} 
        className="bg-pink-500 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300"
        initial={{ scale: 1 }} 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}

        {buttonText}
      </motion.div>
    </section>
</>)
}

export default CTASection
);