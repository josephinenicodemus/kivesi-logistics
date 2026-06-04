'use client'

import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'

export default function FloatingWhatsApp() {
  const whatsappUrl = 'https://wa.me/255689583281?text=Hello%20Kivesi%20Logistics%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.'

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center min-h-[50px] min-w-[50px] sm:min-h-[56px] sm:min-w-[56px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      aria-label="Chat with Kivesi Logistics on WhatsApp"
    >
      {/* Dynamic WhatsApp Icon using SVG to ensure pixel-perfect brand fidelity */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 sm:w-7 sm:h-7"
        aria-hidden="true"
      >
        <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.764.462 3.42 1.267 4.908L2 22l5.244-1.22c1.428.777 3.05 1.22 4.76 1.22C17.524 22 22 17.52 22 12.004 22 6.48 17.52 2 12.004 2zM12 20.364c-1.5 0-2.928-.403-4.17-1.107l-.3-.168-3.1.72.74-3.007-.19-.315a8.318 8.318 0 0 1-1.277-4.483c0-4.604 3.75-8.354 8.354-8.354s8.354 3.75 8.354 8.354-3.75 8.354-8.354 8.354zm4.787-5.748c-.263-.131-1.55-.765-1.79-.853-.24-.087-.414-.131-.588.131-.174.262-.676.853-.83 1.028-.152.175-.306.197-.569.066-.263-.13-.11-.054-1.1-.937-.77-.687-1.29-1.536-1.44-1.798-.153-.262-.016-.404.115-.535.118-.118.263-.306.394-.459.13-.153.175-.262.263-.437.087-.175.043-.328-.022-.459-.065-.132-.588-1.42-.806-1.947-.212-.513-.448-.443-.61-.45-.16-.008-.344-.01-.52-.01-.174 0-.458.065-.697.327-.24.263-.918.897-.918 2.185 0 1.288.939 2.533 1.07 2.708.13.175 1.848 2.822 4.477 3.957.625.27 1.113.43 1.493.55.628.2 1.2.172 1.652.105.503-.075 1.55-.634 1.768-1.246.22-.613.22-1.138.153-1.247-.065-.11-.24-.175-.503-.306z" />
      </svg>
    </motion.a>
  )
}
