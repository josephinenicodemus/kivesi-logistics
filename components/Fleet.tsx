'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Fleet() {
  const fleetCards = [
    {
      title: 'Truck Fleet',
      image: '/truck-fleet.png',
      alt: 'Modern logistics truck fleet at terminal',
      description: 'Equipped to handle high-capacity freight transit across national and international highways.',
      highlights: [
        'Long-haul transportation',
        'Regional distribution networks',
        'Dedicated freight solutions'
      ]
    },
    {
      title: 'Container Logistics',
      image: '/shipping-containers.png',
      alt: 'Shipping containers at a major seaport',
      description: 'Streamlined cargo solutions for import, export, and regional transit through major borders.',
      highlights: [
        'Secure cargo handling & sealing',
        'Cross-border transit logistics',
        'Timely scheduled arrivals'
      ]
    },
    {
      title: 'Material Handling',
      image: '/forklift-operations.png',
      alt: 'Forklift operating inside warehouse racks',
      description: 'State-of-the-art warehousing support to load, offload, and sort heavy commercial cargo safely.',
      highlights: [
        'Forklift & loader operations',
        'Secure warehouse support',
        'Efficient cargo movement systems'
      ]
    }
  ]

  return (
    <section id="fleet" className="section-padding bg-white">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-brand-blue uppercase tracking-widest block mb-3">
            Our Asset Capability
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
            Fleet & Operations Showcase
          </h2>
          <p className="text-brand-muted text-base sm:text-lg">
            A look at our professional operational assets designed to handle complex transportation cargo.
          </p>
        </div>

        {/* Fleet Cards Container */}
        {/* Mobile: Horizontal scroll container with scroll snap. Desktop: 3-column Grid */}
        <div 
          className="flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth scrollbar-none"
          role="region"
          aria-label="Fleet showcase carousel"
        >
          {fleetCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-brand-gray-light border border-brand-gray rounded overflow-hidden flex-shrink-0 w-[85vw] sm:w-[450px] lg:w-auto snap-center transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-[240px] bg-brand-gray">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-brand-dark mb-3">
                    {card.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                  
                  {/* Highlights Bullet List */}
                  <ul className="space-y-2.5 mb-6" aria-label={`Operational highlights of ${card.title}`}>
                    {card.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2.5 text-sm font-semibold text-brand-dark">
                        <Check size={16} className="text-brand-blue flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-brand-gray/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                    Kivesi Certified
                  </span>
                  <span className="text-xs text-brand-muted font-medium">
                    2024 Operations
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe indicator */}
        <div className="flex justify-center gap-1.5 mt-4 lg:hidden">
          <span className="w-6 h-1 rounded-full bg-brand-blue" aria-hidden="true"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gray-border" aria-hidden="true"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gray-border" aria-hidden="true"></span>
        </div>

      </div>
    </section>
  )
}
