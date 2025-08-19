'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface TeamMember {
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    role: 'CEO & Founder',
    image: '/images/alice.jpg',
  },
  {
    name: 'Michael Smith',
    role: 'CTO',
    image: '/images/michael.jpg',
  },
  {
    name: 'Emily Carter',
    role: 'Head of Design',
    image: '/images/emily.jpg',
  },
]
const About: React.FC = () => {
  return (<>
<div className="bg-black text-pink-500 min-h-screen flex flex-col">
      <header className="p-6">
        <h1 className="text-4xl font-bold text-center">About HouseIL</h1>
      </header>
      <main className="flex-grow p-6">
        <section className="mb-12">
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}

            Our History
          </motion.div>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}

            Founded in 2020, HouseIL has been at the forefront of technology
            innovation, redefining the luxury rental experience. Our mission is
            to integrate cutting-edge technology with elegant design to provide
            unparalleled experiences for our guests.
          </motion.div>
        </section>

        <section className="mb-12">
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}

            Our Values
          </motion.div>
          <motion.ul
            className="list-disc pl-5 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}

            <li>Innovation – Pioneering advanced solutions in the rental market.</li>
            <li>Quality – Delivering impeccable standards in every detail.</li>
            <li>Customer Centricity – Prioritizing guest experiences and satisfaction.</li>
          </motion.div>
        </section>

        <section>
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}

            Meet the Team
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-lg text-pink-300">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <footer className="p-6 text-center">
        <p>&copy; 2023 HouseIL. All rights reserved.</p>
      </footer>
    </div>
</>)
}
export default About
);