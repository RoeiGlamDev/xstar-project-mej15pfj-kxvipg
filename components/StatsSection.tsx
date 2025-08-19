'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface Stats {
  title: string
  count: number
  description: string
}

const statistics: Stats[] = [
  {
    title: 'Properties Listed',
    count: 250,
    description: 'Luxury properties to experience the finest stays.',
  },
  {
    title: 'Happy Guests',
    count: 1200,
    description: 'Satisfied guests enjoying premium accommodations.',
  },
  {
    title: 'Awards Won',
    count: 15,
    description: 'Recognized for excellence in luxury hospitality.',
  },
  {
    title: 'Global Locations',
    count: 10,
    description: 'Experience HouseIL in some of the world\'s top destinations.',
  },
]
const StatsSection: React.FC = () => {
  return (<>
<section className="bg-black text-pink-500 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12">Achievements of HouseIL</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2 p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}

              <motion.h3
                className="text-5xl font-bold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}

                <span>{stat.count}</span>
              </motion.div>
              <p className="text-lg">{stat.title}</p>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
</>)
}
export default StatsSection
);