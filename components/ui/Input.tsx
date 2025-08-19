'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface InputProps {
  label: string
  type: string
  name: string
  placeholder: string
  required?: boolean
  validationMessage?: string
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  placeholder,
  required = false,
  validationMessage = 'This field is required',
}) => {
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)
  const isError = touched && required && !value
  const handleBlur = () => {
    setTouched(true)
  }
  return (<>
<div className="mb-6">
      <label className={block text-pink-400 mb-2} htmlFor={name}>
        {label}
      </label>
      <motion.input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        className={w-full p-3 border rounded-md bg-black text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-200 ${isError ? 'border-red-500' : ''}}
        whileHover={{ scale: 1.05 }}
        whileFocus={{ scale: 1.05 }}
      />
      {isError && <span className="text-red-500 mt-2 text-sm">{validationMessage}</span>}
    </div>
</>)
}
export default Input
);