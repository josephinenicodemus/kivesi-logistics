'use client'

import { motion } from 'framer-motion'
import { Truck, Shield, ShieldCheck, Compass, HeartHandshake } from 'lucide-react'

export default function Trust() {
  const trustCards = [
    {
      title: 'Fast Delivery',
      icon: Truck,
      description: 'Streamlined scheduling and optimized routes to ensure cargo is delivered promptly without delays.'
    },
    {
      title: 'Professional Handling',
      icon: Shield,
      description: 'Rigorous cargo safety procedures and experienced loaders to secure your inventory from origin to destination.'
    },
    {
      title: 'Cross-Border Expertise',
      icon: Compass,
      description: 'Expert knowledge of customs clearance regulations in Tanzania, Congo, Malawi, and Mozambique.'
    },
    {
      title: 'Customer-Focused Service',
      icon: HeartHandshake,
      description: 'Dedicated client success team providing active communications and custom freight solutions.'
    }
  ]

  return (
    <section className="section-padding bg-brand-gray-light border-y border-brand-gray">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-brand-blue uppercase tracking-widest block mb-3">
            Why Partner With Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
            Why Businesses Choose Kivesi Logistics
          </h2>
          <p className="text-brand-muted text-base sm:text-lg">
            We combine regional transport capabilities with a strict commitment to cargo safety and professional compliance.
          </p>
        </div>

        {/* 4 Trust Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" role="list">
          {trustCards.map((card, idx) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-brand-gray rounded p-6 shadow-sm flex flex-col items-center text-center"
                role="listitem"
              >
                <div className="text-brand-blue p-3 bg-brand-blue/5 rounded-full mb-4">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3 className="font-extrabold text-brand-dark text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Compliance Section */}
        <div className="max-w-3xl mx-auto border border-brand-gray rounded bg-white p-8 sm:p-10 shadow-sm text-center">
          <h3 className="text-lg font-bold text-brand-dark uppercase tracking-widest mb-6 flex items-center justify-center gap-2">
            <ShieldCheck className="text-brand-blue" size={20} aria-hidden="true" />
            <span>Official Trust & Compliance Registrations</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-items-center">
            
            {/* TRA Badge */}
            <div className="flex items-center gap-4 border border-brand-gray p-5 rounded w-full max-w-[300px] bg-brand-gray-light">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="50" height="50" className="flex-shrink-0" aria-hidden="true">
                <rect width="60" height="60" rx="10" fill="#003E91" />
                <circle cx="30" cy="30" r="22" fill="none" stroke="#FFFFFF" stroke-width="2" />
                <path d="M 30 15 L 42 22 L 42 36 L 30 45 L 18 36 L 18 22 Z" fill="none" stroke="#FFFFFF" stroke-width="2" />
                <text x="30" y="34" font-family="'Inter', sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">TRA</text>
              </svg>
              <div className="text-left">
                <h4 className="font-extrabold text-brand-dark text-sm sm:text-base">TRA Registered</h4>
                <p className="text-brand-muted text-xs">Tanzania Revenue Authority compliant transit carrier</p>
              </div>
            </div>

            {/* TPA Badge */}
            <div className="flex items-center gap-4 border border-brand-gray p-5 rounded w-full max-w-[300px] bg-brand-gray-light">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="50" height="50" className="flex-shrink-0" aria-hidden="true">
                <rect width="60" height="60" rx="10" fill="#003E91" />
                <circle cx="30" cy="30" r="22" fill="none" stroke="#FFFFFF" stroke-width="2" />
                {/* Ship Wheel representation */}
                <circle cx="30" cy="30" r="10" fill="none" stroke="#FFFFFF" stroke-width="2" />
                <line x1="30" y1="12" x2="30" y2="48" stroke="#FFFFFF" stroke-width="2" />
                <line x1="12" y1="30" x2="48" y2="30" stroke="#FFFFFF" stroke-width="2" />
                <line x1="17" y1="17" x2="43" y2="43" stroke="#FFFFFF" stroke-width="1.5" />
                <line x1="17" y1="43" x2="43" y2="17" stroke="#FFFFFF" stroke-width="1.5" />
              </svg>
              <div className="text-left">
                <h4 className="font-extrabold text-brand-dark text-sm sm:text-base">TPA Registered</h4>
                <p className="text-brand-muted text-xs">Tanzania Ports Authority compliance certification</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
