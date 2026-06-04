'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView, motion } from 'framer-motion'

interface CounterProps {
  endValue: number;
  suffix?: string;
  duration?: number;
}

function Counter({ endValue, suffix = '', duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = endValue
    if (start === end) {
      setCount(end)
      return
    }

    const startTime = performance.now()
    const totalDuration = duration * 1000

    const updateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / totalDuration, 1)
      
      // Easing function - easeOutQuad
      const easeProgress = progress * (2 - progress)
      const currentCount = Math.floor(easeProgress * (end - start) + start)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(updateCount)
  }, [isInView, endValue, duration])

  return (
    <span ref={ref} className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-brand-blue block mb-2">
      {count}
      {suffix}
    </span>
  )
}

export default function Statistics() {
  const stats = [
    {
      value: 4,
      suffix: '+',
      label: 'Countries Served',
      description: 'Tanzania, DRC, Malawi, Mozambique'
    },
    {
      value: 2024,
      suffix: '',
      label: 'Year Established',
      description: 'Delivering excellence from day one'
    },
    {
      value: 24,
      suffix: '/7',
      label: 'Customer Support',
      description: 'Dedicated assistance anytime'
    },
    {
      value: 100,
      suffix: '%',
      label: 'Commitment to Service',
      description: 'Safety and convenience guaranteed'
    }
  ]

  return (
    <section className="bg-white border-y border-brand-gray py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center p-4"
            >
              <Counter endValue={stat.value} suffix={stat.suffix} />
              <h3 className="font-bold text-brand-dark text-base sm:text-lg mb-1">
                {stat.label}
              </h3>
              <p className="text-brand-muted text-xs sm:text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
