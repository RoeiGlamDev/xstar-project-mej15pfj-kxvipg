'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface ContactFormData {
  name: string
  email: string
  message: string
  contactReason: string
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    contactReason: 'General Inquiry',
  })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.message) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return
    // Submit form data logic here
    console.log('Submitted:', formData)
    setFormData({ name: '', email: '', message: '', contactReason: 'General Inquiry' })
  }
  return (<>
<section className="bg-black text-white p-10">
      <motion.h2
        className="text-3xl font-bold mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}

        Contact Us at HouseIL
      </motion.div>
      <p className="mb-4">For luxury technology inquiries, please fill out the form below.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={border-2 border-pink-500 bg-gray-800 text-white p-2 w-full rounded focus:outline-none hover:border-pink-700 ${
              errors.name ? 'border-red-500' : ''
            }}
            required
          />
          {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={border-2 border-pink-500 bg-gray-800 text-white p-2 w-full rounded focus:outline-none hover:border-pink-700 ${
              errors.email ? 'border-red-500' : ''
            }}
            required
          />
          {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium">Contact Reason</label>
          <select
            name="contactReason"
            value={formData.contactReason}
            onChange={handleChange}
            className="border-2 border-pink-500 bg-gray-800 text-white p-2 w-full rounded focus:outline-none hover:border-pink-700"

            <option value="General Inquiry">General Inquiry</option>
            <option value="Partnership Opportunity">Partnership Opportunity</option>
            <option value="Technical Support">Technical Support</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={border-2 border-pink-500 bg-gray-800 text-white p-2 w-full rounded focus:outline-none hover:border-pink-700 ${
              errors.message ? 'border-red-500' : ''
            }}
            required
          />
          {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
        </div>
        <motion.button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 transition duration-200 text-white font-bold py-2 px-4 rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}

          Submit
        </motion.div>
      </form>
      <div className="mt-10">
        <h3 className="text-xl font-bold">Business Information</h3>
        <p className="mt-2">Company Name: HouseIL</p>
        <p>Email: contact@houseil.tech</p>
        <p>Location: 123 Tech Avenue, Innovation City</p>
        <p>Business Hours: Mon-Fri, 9 AM - 6 PM</p>
      </div>
    </section>
</>)
}
export default ContactSection
);