'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface HeaderProps {
  sections: { name: string; href: string }[]
}

const Header: React.FC<HeaderProps> = ({ sections }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }
  return (<>
<header className="bg-black text-pink-500">
      <div className="container mx-auto flex justify-between items-center p-6">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}

          HouseIL
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <motion.a
              key={section.name}
              href={section.href}
              className="hover:text-pink-400 transition-all duration-300"
              whileHover={{ scale: 1.1 }}

              {section.name}
            </motion.div>
          ))}
        </nav>
        <button
          className="md:hidden text-pink-500 focus:outline-none"
          onClick={toggleMobileMenu}

          Menu
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="bg-black text-pink-500 p-4 md:hidden"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}

          <div className="flex flex-col">
            {sections.map((section) => (
              <motion.a
                key={section.name}
                href={section.href}
                className="py-2 hover:text-pink-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}

                {section.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </header>
</>)
}
export default Header
);