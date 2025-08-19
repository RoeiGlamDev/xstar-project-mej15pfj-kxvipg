'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface FooterProps {
  companyName: string
  links: Array<{ name: string; url: string }>
  socialMedia: Array<{ name: string; url: string; icon: JSX.Element }>
}

const Footer: React.FC<FooterProps> = ({ companyName, links, socialMedia }) => {
  return (<>
<motion.footer
      className="bg-black text-pink-500 py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4">
            <h3 className="text-lg font-semibold mb-2">{companyName}</h3>
            <p className="text-sm">Your luxury dark retreat awaits.</p>
            <p className="text-sm">Empowering your travels with cutting-edge technology.</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="hover:text-pink-300 transition duration-200"

                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex space-x-4">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="hover:text-pink-300 transition duration-200"
                aria-label={Follow us on ${social.name}}

                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 text-center border-t border-pink-500 pt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          <p className="text-xs">Powered by technology for luxurious experiences.</p>
        </div>
      </div>
    </motion.footer>
</>)
}
export default Footer
);