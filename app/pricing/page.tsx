'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface PricingOption {
  planName: string
  price: string
  features: string[]
}

const pricingOptions: PricingOption[] = [
  {
    planName: 'Basic Package',
    price: '$199/month',
    features: [
      'Access to basic technology tools',
      'Priority email support',
      'Monthly reports',
    ],
  },
  {
    planName: 'Standard Package',
    price: '$399/month',
    features: [
      'Access to all basic features',
      'Real-time analytics',
      '24/7 chat support',
      'Custom API integrations',
    ],
  },
  {
    planName: 'Premium Package',
    price: '$599/month',
    features: [
      'All Standard features',
      'Dedicated account manager',
      'Advanced security protocols',
      'Tailored technology solutions',
    ],
  },
]
const FAQ = [
  {
    question: 'What is included in each plan?',
    answer: 'Each plan includes varying access to tools and support according to the pricing tier.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes, we offer a 30-day money-back guarantee for all our plans.',
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Absolutely! You can change your plan at any time from your account settings.',
  },
]
const PricingPage: React.FC = () => {
  return (<>
<div className="bg-black text-pink-400 min-h-screen p-8">
      <motion.h1 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}

        HouseIL Pricing Plans
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}

        {pricingOptions.map((option) => (
          <div 
            key={option.planName}
            className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"

            <h2 className="text-2xl font-semibold mb-2">{option.planName}</h2>
            <p className="text-xl mb-4">{option.price}</p>
            <ul className="mb-4">
              {option.features.map((feature) => (
                <li key={feature} className="my-1">
                  - {feature}
                </li>
              ))}
            </ul>
            <button className="bg-pink-500 text-black py-2 px-4 rounded hover:bg-pink-600 transition duration-200">
              Choose Plan
            </button>
          </div>
        ))}
      </motion.div>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <ul className="space-y-4">
          {FAQ.map((item, index) => (
            <li key={index} className="hover:underline cursor-pointer">
              <h3 className="font-semibold">{item.question}</h3>
              <p className="text-gray-300">{item.answer}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
</>)
}
export default PricingPage
);