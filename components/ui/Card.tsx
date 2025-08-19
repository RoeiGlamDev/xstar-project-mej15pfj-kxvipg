'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface CardProps {
  title: string
  description: string
  imgSrc: string
  link: string
}

const Card: React.FC<CardProps> = ({ title, description, imgSrc, link }) => {
  return (<>
<motion.div
      className="bg-black bg-opacity-70 backdrop-blur-md rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}

      <img src={imgSrc} alt={title} className="rounded-lg mb-4" />
      <h2 className="text-pink-400 text-2xl font-bold">{title}</h2>
      <p className="text-gray-200 mt-2">{description}</p>
      <a
        href={link}
        className="mt-4 inline-block bg-pink-500 text-white font-semibold py-2 px-4 rounded transition duration-300 hover:bg-pink-600"
        aria-label={View details for ${title}}

        Explore HouseIL
      </a>
    </motion.div>
</>)
}
export default Card
);