'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function About() {
  const highlights = [
    'Founded in 2024 with a modern fleet and vision',
    'Regional logistics expertise across East & Central Africa',
    'Customer-focused operations & real-time monitoring',
    'Specialized cross-border logistics clearance & handling',
    'Commitment to fast, safe, and reliable delivery'
  ]

  return (
    <section id="about" className="section-padding bg-brand-gray-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* About Image Showcase (Left on desktop, stacks on mobile) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded shadow-lg border border-brand-gray bg-white">
                <img
                  src="/truck-fleet.png"
                  alt="Kivesi Logistics modern fleet parked at a terminal"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative Brand Accent block, no gradients */}
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-brand-blue -z-10 rounded-sm"></div>
            </motion.div>
          </div>

          {/* About Text Details (Right on desktop, stacks on mobile) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-bold text-brand-blue uppercase tracking-widest block mb-3">
                Who We Are
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight mb-6">
                Your Trusted Partner in Cross-Border Logistics
              </h2>

              <p className="text-brand-muted text-base sm:text-lg mb-6 leading-relaxed">
                Established in **2024**, **KIVESI LOGISTICS** has rapidly positioned itself as a premier transport and distribution provider in East and Central Africa. Based in Tanzania, we bridge trade routes connecting businesses to crucial economic regions including the **Democratic Republic of Congo (DRC)**, **Malawi**, and **Mozambique**.
              </p>

              <p className="text-brand-muted text-base mb-8 leading-relaxed">
                Our operations are driven by a simple core belief: logistics should be seamless, reliable, and convenient. By combining regional expertise with professional logistics management, we ensure that cargo is moved efficiently and securely across borders.
              </p>

              {/* Core Strengths Bullet Points */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" aria-label="Company Core Strengths">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-blue flex-shrink-0 mt-1" size={18} aria-hidden="true" />
                    <span className="text-brand-dark text-sm sm:text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
