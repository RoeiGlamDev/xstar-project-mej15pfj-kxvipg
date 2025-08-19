'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface Testimonial {
  id: number
  name: string
  photo: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sophia Reynolds',
    photo: '/images/testimonials/sophia.jpg',
    content: 'HouseIL transformed our entire property management experience with their top-notch technology solutions. We managed to enhance guest experience significantly and increased our booking rate by 30%.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Liam Thompson',
    photo: '/images/testimonials/liam.jpg',
    content: 'The smart home integrations provided by HouseIL made our Airbnb the most sought-after in the area. Their tech support is unparalleled in the industry!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Olivia Martinez',
    photo: '/images/testimonials/olivia.jpg',
    content: 'Thanks to HouseIL, our property became a tech-savvy haven for guests. Their state-of-the-art booking system simplifies everything!',
    rating: 4,
  },
]
const TestimonialsSection: React.FC = () => {
  return (<>
<div className="bg-black text-white p-8">
      <h2 className="text-4xl font-bold text-pink-500 mb-6">What Our Clients Say About HouseIL</h2>
      <div className="space-y-6">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.05 }}

            <div className="flex items-center mb-4">
              <img src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
              <h3 className="text-xl font-semibold text-pink-500">{testimonial.name}</h3>
            </div>
            <p className="text-gray-300 mb-2">{testimonial.content}</p>
            <div className="flex">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <svg key={index} className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.086a1 1 0 01-1.447-1.054l1.14-6.637-4.928-4.414a1 1 0 01.553-1.706l6.705-.588L10 1l2.407 6.236 6.705.588a1 1 0 01.553 1.706l-4.928 4.414 1.14 6.637a1 1 0 01-1.447 1.054L10 15z" />
                </svg>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
</>)
}
export default TestimonialsSection
);