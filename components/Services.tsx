'use client'

import { motion } from 'framer-motion'
import { Truck, ShieldCheck, Milestone, Clock } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'Road Freight',
      icon: Truck,
      description: 'Professional road transportation solutions for businesses across East and Central Africa.',
      details: [
        'Dedicated full truckload (FTL) solutions',
        'Cross-border customs and cargo coordination',
        'Secured and tracked route systems',
        'Experienced regional drivers'
      ]
    },
    {
      title: 'Distribution',
      icon: Milestone,
      description: 'Efficient distribution services ensuring goods reach their destinations safely and on time.',
      details: [
        'Last-mile delivery and scheduling',
        'Multi-point distribution routes',
        'Safe cargo handling and offloading',
        'Real-time status updates'
      ]
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-brand-blue uppercase tracking-widest block mb-3">
            Core Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
            Professional Logistics Services
          </h2>
          <p className="text-brand-muted text-base sm:text-lg">
            Empowering businesses with seamless freight and distribution networks tailored to the East and Central African terrain.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-brand-gray-light border border-brand-gray rounded p-8 flex flex-col justify-between transition-shadow duration-300 hover:shadow-lg group"
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className="inline-flex items-center justify-center p-3.5 bg-brand-blue/5 rounded text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <Icon size={28} aria-hidden="true" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-extrabold text-brand-dark mb-3">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-brand-muted text-base mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Feature Bullets */}
                  <ul className="space-y-3.5" aria-label={`Key features of ${service.title}`}>
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-3 text-sm font-semibold text-brand-dark">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" aria-hidden="true"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Secondary CTA Trigger */}
                <div className="mt-8 pt-6 border-t border-brand-gray/60">
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-1 text-sm font-bold text-brand-blue hover:text-brand-blue-dark group-hover:underline focus-visible:ring-2 focus-visible:ring-brand-blue"
                  >
                    Request Quote for {service.title} &rarr;
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
