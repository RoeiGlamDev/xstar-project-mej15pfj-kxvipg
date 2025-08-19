'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface PricingTier {
  title: string
  price: string
  features: string[]
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Basic Package',
    price: '$99/month',
    features: [
      'Access to premium technology tools',
      '24/7 customer support',
      'Weekly updates and maintenance',
      'Free initial consultation',
    ],
  },
  {
    title: 'Pro Package',
    price: '$199/month',
    features: [
      'Everything in Basic Package',
      'Extended cloud storage',
      'Integration with third-party services',
      'Priority support access',
    ],
  },
  {
    title: 'Enterprise Package',
    price: '$399/month',
    features: [
      'Everything in Pro Package',
      'Custom technology solutions',
      'Dedicated account manager',
      'Comprehensive analytics and reporting',
    ],
  },
]
const PricingSection: React.FC = () => {
  return (<>
<section className="bg-black text-white py-16">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 text-pink-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}

          HouseIL Pricing Plans
        </motion.div>
        <motion.p
          className="text-lg mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}

          Choose a plan that fits your technology needs.
        </motion.div>
        <div className="flex justify-center space-x-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}

              <h3 className="text-xl font-semibold text-pink-500 mb-4">{tier.title}</h3>
              <p className="text-3xl font-bold mb-4">{tier.price}</p>
              <ul className="text-left mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">
                    • {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-pink-500 text-black px-4 py-2 rounded hover:bg-pink-400 transition">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
</>)
}
export default PricingSection
);