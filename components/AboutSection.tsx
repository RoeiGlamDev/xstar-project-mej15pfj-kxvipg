'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface TeamMember {
  name: string
  role: string
  expertise: string
}

const teamMembers: TeamMember[] = [
  { name: 'Alice Johnson', role: 'CEO', expertise: 'AI & Machine Learning' },
  { name: 'David Smith', role: 'CTO', expertise: 'Full Stack Development' },
  { name: 'Laura Martinez', role: 'Product Designer', expertise: 'User Experience Design' },
]
const AboutSection: React.FC = () => {
  return (<>
<section className="bg-black text-pink-500 py-16 px-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }} 
        className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl font-bold text-center mb-8">About HouseIL</h2>
        
        <p className="text-lg mb-6">
          At HouseIL, we leverage cutting-edge technology to redefine luxury accommodations. Born from a passion for innovation, our mission is to deliver outstanding experiences that merge comfort and tech-savvy solutions. Our journey began with a vision to integrate smart technology into the rental space, catering to the modern traveler seeking sophistication.
        </p>
        
        <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
        <p className="text-lg mb-6">
          HouseIL is committed to harnessing technology that enhances every stay. Our mission is to elevate the standard of luxury through smart integrations, ensuring every guest experiences the elegance and ease of high-end living, enhanced by technology.
        </p>

        <h3 className="text-3xl font-semibold mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div 
              key={member.name}
              initial={{ scale: 0.9 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.3 }} 
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold mb-2">{member.name}</h4>
              <p className="text-md font-semibold mb-1">{member.role}</p>
              <p className="text-sm text-gray-400">{member.expertise}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-3xl font-semibold mb-4">Our Values & Achievements</h3>
        <p className="text-lg mb-6">
          At HouseIL, we embody innovation, integrity, and customer-centricity. Our commitment to excellence has been recognized in the tech community, earning accolades for combining luxury with modern living solutions. We take pride in using our expertise to not only meet but exceed the expectations of our guests, ensuring a seamless and unforgettable experience.
        </p>
      </motion.div>
    </section>
</>)
}
export default AboutSection
);