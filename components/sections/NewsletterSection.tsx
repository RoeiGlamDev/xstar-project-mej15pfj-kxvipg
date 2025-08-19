'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface NewsletterSectionProps {
  title: string
  subtitle: string
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ title, subtitle }) => {
  return (<>
<section className="bg-black p-10 text-pink-400">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto text-center"

        <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl mb-8">{subtitle}</p>
        
        <form className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-gray-800 text-white px-4 py-2 rounded-md mb-4 w-3/4 md:w-1/2 focus:outline-none focus:ring-2 focus:ring-pink-600"
            aria-label="Email Address"
            required
          />
          <button
            type="submit"
            className="bg-pink-600 text-black px-6 py-3 rounded-md hover:bg-pink-500 transition duration-300 ease-in-out"
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 105, 180, 0.7)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}

            Subscribe
          </button>
        </form>
        
        <p className="mt-4 text-sm">
          Join the HouseIL community and stay updated with the latest in luxury technology and our exclusive offers. 
        </p>
      </motion.div>
    </section>
</>)
}
export default NewsletterSection
);