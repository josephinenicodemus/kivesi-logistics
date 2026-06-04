
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#003E91',
          'blue-dark': '#002C66',
          light: '#F9FAFB',
          gray: '#F3F4F6',
          dark: '#1F2937',
          muted: '#4B5563'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}

export default config
