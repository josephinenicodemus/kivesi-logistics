'use client'

import { motion } from 'framer-motion'
import { HardHat, Globe, Store, Factory } from 'lucide-react'

export default function Industries() {
  const industries = [
    {
      title: 'Construction',
      icon: HardHat,
      description: 'Reliable transport of building materials, heavy equipment, and bulk supplies directly to project sites.'
    },
    {
      title: 'Import & Export',
      icon: Globe,
      description: 'Seamless cross-border freight handling and customs transit support at major ports and border points.'
    },
    {
      title: 'Retail & Wholesale',
      icon: Store,
      description: 'Timely replenishment of inventories and distribution to retail distribution hubs across the region.'
    },
    {
      title: 'Manufacturing',
      icon: Factory,
      description: 'Streamlined supply chains for raw materials and outbound finished goods logistics.'
    }
  ]

  return (
    <section id="industries" className="section-padding bg-brand-gray-light">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-brand-blue uppercase tracking-widest block mb-3">
            Sectors We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
            Tailored Industry Solutions
          </h2>
          <p className="text-brand-muted text-base sm:text-lg">
            We deliver regional shipping expertise that satisfies the unique demands of key commercial and industrial sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-brand-gray rounded p-6 flex flex-col justify-between transition-shadow duration-300 hover:shadow-md"
              >
                <div>
                  {/* Icon */}
                  <div className="text-brand-blue mb-5 inline-block">
                    <Icon size={32} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-brand-dark mb-3">
                    {ind.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-brand-gray/50 pt-4 text-xs font-bold text-brand-blue uppercase tracking-wider">
                  Reliable Operations
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
