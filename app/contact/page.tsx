'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface ContactPageProps {
  businessHours: string
  address: string
  phone: string
  email: string
}

const ContactPage: React.FC<ContactPageProps> = ({ businessHours, address, phone, email }) => {
  return (<>
<div className="flex flex-col items-center justify-center min-h-screen bg-black text-pink-500 p-5">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}

        Contact HouseIL
      </motion.div>
      <p className="text-lg mb-8 text-gray-300">We're here to assist you with all your luxury Airbnb technology needs.</p>

      <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg" autoComplete="off">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}

          <label htmlFor="name" className="block text-sm font-semibold mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full p-3 bg-gray-700 border border-pink-600 rounded focus:outline-none focus:ring focus:ring-pink-500 transition duration-300"
            required
          />
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}

          <label htmlFor="email" className="block text-sm font-semibold mb-2">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 bg-gray-700 border border-pink-600 rounded focus:outline-none focus:ring focus:ring-pink-500 transition duration-300"
            required
          />
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}

          <label htmlFor="message" className="block text-sm font-semibold mb-2">Your Message</label>
          <textarea
            id="message"
            rows={4}
            placeholder="Your message"
            className="w-full p-3 bg-gray-700 border border-pink-600 rounded focus:outline-none focus:ring focus:ring-pink-500 transition duration-300"
            required

        </motion.div>

        <button
          type="submit"
          className="w-full bg-pink-600 text-black font-bold py-3 rounded hover:bg-pink-400 transition duration-300 shadow-lg"

          Send Message
        </button>
      </form>

      <div className="mt-12 text-center">
        <motion.h2
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}

          Our Location
        </motion.div>
        <p className="text-lg text-gray-300 mb-2">{address}</p>
        <p className="text-lg text-gray-300 mb-2">Phone: {phone}</p>
        <p className="text-lg text-gray-300 mb-8">Email: {email}</p>
        <motion.h3
          className="text-xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}

          Business Hours
        </motion.div>
        <p className="text-lg text-gray-300">{businessHours}</p>
      </div>
    </div>
</>)
}
export default ContactPage
);