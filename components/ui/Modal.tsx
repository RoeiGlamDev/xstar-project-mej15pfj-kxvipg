'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null
  return (<>
<div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black bg-opacity-75">
      <motion.div
        className="bg-black rounded-lg shadow-lg p-6 max-w-md w-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}

        <h2 className="text-pink-500 text-2xl font-bold mb-4">HouseIL</h2>
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-gray-300 mb-4">{content}</p>
        <button
          className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded transition duration-200 ease-in-out"
          onClick={onClose}

          Close
        </button>
      </motion.div>
    </div>
</>)
}
export default Modal
);