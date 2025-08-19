'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface Feature {
  title: string
  description: string
  icon: JSX.Element; // Assuming icons are SVG elements
}

const features: Feature[] = [
  {
    title: 'Smart Booking Technology',
    description: 'Experience seamless reservations and management with our state-of-the-art smart booking system tailored for luxury stays.',
    icon: <svg className="h-10 w-10 text-pink-500" fill="currentColor" viewBox="0 0 20 20"><path d="M5 2a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1H5zm0 2h10v12H5V4z" /></svg>
  },
  {
    title: 'Advanced Security Features',
    description: 'Protect your stays with our cutting-edge security technology ensuring your data and privacy are safeguarded at all times.',
    icon: <svg className="h-10 w-10 text-pink-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a4 4 0 00-4 4v5H6a1 1 0 00-1 1v5a1 1 0 001 1h8a1 1 0 001-1v-5a1 1 0 00-1-1h-1V6a4 4 0 00-4-4z" /></svg>
  },
  {
    title: 'Luxury Experience Integration',
    description: 'Immerse your guests in a world of luxury with tailored experiences enhancing their stay through tech innovation.',
    icon: <svg className="h-10 w-10 text-pink-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3l-1 1h-1a5 5 0 00-5 5v7h12V9a5 5 0 00-5-5h-1l-1-1z" /></svg>
  },
  {
    title: 'Real-time Analytics',
    description: 'Gain insights into guest behaviors and preferences with our advanced analytics dashboard, empowering your decisions.',
    icon: <svg className="h-10 w-10 text-pink-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 00-7.94 7H5v2H2.06A8 8 0 0010 18a8 8 0 007.94-9H15v-2h2.94A8 8 0 0010 2z" /></svg>
  },
]
const FeaturesSection: React.FC = () => {
  return (<>
<section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-center text-4xl font-bold mb-10 text-pink-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}

          Discover HouseIL's Luxury Technology Features
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-black border border-pink-500 rounded-lg p-6 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}

              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-lg font-semibold text-pink-500 ml-4">{feature.title}</h3>
              </div>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
</>)
}
export default FeaturesSection
);