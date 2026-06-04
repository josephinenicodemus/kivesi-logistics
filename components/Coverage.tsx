'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'

interface CountryDetails {
  name: string;
  role: string;
  description: string;
  keyPoints: string[];
}

export default function Coverage() {
  const [selectedCountry, setSelectedCountry] = useState<string>('Tanzania')

  const countryData: Record<string, CountryDetails> = {
    Tanzania: {
      name: 'Tanzania',
      role: 'Primary Logistics Hub',
      description: 'The core operational base of Kivesi Logistics. Utilizing port access in Dar es Salaam, we process and dispatch freight onto vital highway corridors linking East Africa to central landlocked destinations.',
      keyPoints: ['Dar es Salaam HQ & terminal coordination', 'Port clearance & transit documentation handling', 'Seamless linkage to central highway corridors']
    },
    DRC: {
      name: 'DR Congo',
      role: 'Central Corridor Destination',
      description: 'Providing reliable cargo passage into the industrial and mining centers of the Democratic Republic of Congo, primarily serving Lubumbashi, Kolwezi, and surrounding regions.',
      keyPoints: ['Frequent cross-border fleet dispatches', 'Secure route safety monitoring', 'Specialized handling for heavy industrial cargo']
    },
    Malawi: {
      name: 'Malawi',
      role: 'Cross-Border Supply Link',
      description: 'Delivering direct and efficient transportation services to cities like Lilongwe and Blantyre, bypassing bottlenecks through experienced border-clearing operations.',
      keyPoints: ['Direct routes from Dar es Salaam port', 'Optimized border clearing through Songwe/Kasumulu', 'Fast retail and wholesale supply distribution']
    },
    Mozambique: {
      name: 'Mozambique',
      role: 'Southern Corridor Transit',
      description: 'Extending logistics operations into northern and central Mozambique, offering dependable transport pathways for commercial trade and cross-border connectivity.',
      keyPoints: ['Access routes via southern border junctions', 'Regional clearing compliance and support', 'Safe and fully verified delivery networks']
    }
  }

  const handleCountrySelect = (countryKey: string) => {
    setSelectedCountry(countryKey)
  }

  return (
    <section id="coverage" className="section-padding bg-white">
      <style jsx>{`
        @keyframes routeCrawl {
          to {
            stroke-dashoffset: -24;
          }
        }
        .route-line-anim {
          stroke-dasharray: 8, 4;
          animation: routeCrawl 1.2s linear infinite;
        }
      `}</style>
      
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-brand-blue uppercase tracking-widest block mb-3">
            Our Network
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
            Delivering Excellence Across Borders
          </h2>
          <p className="text-brand-muted text-base sm:text-lg">
            An integrated logistics network linking sea ports, commercial terminals, and industrial centers across East and Central Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Interactive SVG Map (Left 58% on desktop) */}
          <div className="lg:col-span-7 bg-brand-gray-light border border-brand-gray rounded p-6 sm:p-10 flex justify-center items-center relative overflow-hidden">
            
            <svg
              viewBox="0 0 600 500"
              width="100%"
              height="100%"
              className="max-w-[500px] h-auto drop-shadow-sm select-none"
              aria-label="Interactive Logistics Map"
              role="img"
            >
              {/* Regional Outline representation (simplified vector paths for lightweight map) */}
              {/* DR Congo Background Outline */}
              <path
                d="M 50,150 L 150,130 L 220,180 L 190,260 L 150,290 L 90,280 L 40,220 Z"
                fill="#E5E7EB"
                stroke="#D1D5DB"
                strokeWidth="1.5"
              />
              {/* Tanzania Background Outline */}
              <path
                d="M 220,180 L 320,140 L 410,180 L 390,300 L 290,290 L 220,250 Z"
                fill={selectedCountry === 'Tanzania' ? '#E5EEFA' : '#F3F4F6'}
                stroke={selectedCountry === 'Tanzania' ? '#003E91' : '#D1D5DB'}
                strokeWidth={selectedCountry === 'Tanzania' ? '2' : '1.5'}
                className="transition-all duration-300"
              />
              {/* Malawi Background Outline */}
              <path
                d="M 290,290 L 310,295 L 300,350 L 260,330 Z"
                fill={selectedCountry === 'Malawi' ? '#E5EEFA' : '#F3F4F6'}
                stroke={selectedCountry === 'Malawi' ? '#003E91' : '#D1D5DB'}
                strokeWidth={selectedCountry === 'Malawi' ? '2' : '1.5'}
                className="transition-all duration-300"
              />
              {/* Mozambique Background Outline */}
              <path
                d="M 300,350 L 350,340 L 380,390 L 320,480 L 290,440 L 280,380 Z"
                fill={selectedCountry === 'Mozambique' ? '#E5EEFA' : '#F3F4F6'}
                stroke={selectedCountry === 'Mozambique' ? '#003E91' : '#D1D5DB'}
                strokeWidth={selectedCountry === 'Mozambique' ? '2' : '1.5'}
                className="transition-all duration-300"
              />

              {/* Connecting Routes (Dar es Salaam as Core Node to others) */}
              {/* Dar es Salaam Coordinate: (380, 220) */}
              {/* Lubumbashi DRC Coordinate: (160, 240) */}
              {/* Lilongwe Malawi Coordinate: (285, 320) */}
              {/* Beira Mozambique Coordinate: (320, 420) */}
              
              {/* Route to DRC */}
              <path
                d="M 380,220 Q 270,210 160,240"
                fill="none"
                stroke={selectedCountry === 'DRC' ? '#003E91' : '#9CA3AF'}
                strokeWidth={selectedCountry === 'DRC' ? '3' : '2'}
                className="route-line-anim transition-all duration-300"
              />
              {/* Route to Malawi */}
              <path
                d="M 380,220 Q 330,270 285,320"
                fill="none"
                stroke={selectedCountry === 'Malawi' ? '#003E91' : '#9CA3AF'}
                strokeWidth={selectedCountry === 'Malawi' ? '3' : '2'}
                className="route-line-anim transition-all duration-300"
              />
              {/* Route to Mozambique */}
              <path
                d="M 380,220 Q 360,320 320,420"
                fill="none"
                stroke={selectedCountry === 'Mozambique' ? '#003E91' : '#9CA3AF'}
                strokeWidth={selectedCountry === 'Mozambique' ? '3' : '2'}
                className="route-line-anim transition-all duration-300"
              />

              {/* Country Nodes / Interactive Pins */}
              
              {/* Tanzania Pin (Hub) */}
              <g
                className="cursor-pointer focus:outline-none"
                onClick={() => handleCountrySelect('Tanzania')}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleCountrySelect('Tanzania')}
                aria-label="Select Tanzania Hub"
              >
                <circle cx="380" cy="220" r="16" fill="#003E91" opacity="0.15" />
                <circle cx="380" cy="220" r="8" fill="#003E91" />
                <circle cx="380" cy="220" r="4" fill="#FFFFFF" />
                <text x="395" y="225" font-family="'Inter', sans-serif" font-size="12" font-weight="800" fill="#003E91">TANZANIA (HUB)</text>
              </g>

              {/* DRC Pin */}
              <g
                className="cursor-pointer focus:outline-none"
                onClick={() => handleCountrySelect('DRC')}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleCountrySelect('DRC')}
                aria-label="Select DR Congo Destination"
              >
                <circle cx="160" cy="240" r="12" fill={selectedCountry === 'DRC' ? '#003E91' : '#4B5563'} opacity="0.2" />
                <circle cx="160" cy="240" r="6" fill={selectedCountry === 'DRC' ? '#003E91' : '#4B5563'} className="transition-all duration-300" />
                <text x="85" y="244" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill={selectedCountry === 'DRC' ? '#003E91' : '#4B5563'}>DR CONGO</text>
              </g>

              {/* Malawi Pin */}
              <g
                className="cursor-pointer focus:outline-none"
                onClick={() => handleCountrySelect('Malawi')}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleCountrySelect('Malawi')}
                aria-label="Select Malawi Destination"
              >
                <circle cx="285" cy="320" r="12" fill={selectedCountry === 'Malawi' ? '#003E91' : '#4B5563'} opacity="0.2" />
                <circle cx="285" cy="320" r="6" fill={selectedCountry === 'Malawi' ? '#003E91' : '#4B5563'} className="transition-all duration-300" />
                <text x="210" y="324" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill={selectedCountry === 'Malawi' ? '#003E91' : '#4B5563'}>MALAWI</text>
              </g>

              {/* Mozambique Pin */}
              <g
                className="cursor-pointer focus:outline-none"
                onClick={() => handleCountrySelect('Mozambique')}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleCountrySelect('Mozambique')}
                aria-label="Select Mozambique Destination"
              >
                <circle cx="320" cy="420" r="12" fill={selectedCountry === 'Mozambique' ? '#003E91' : '#4B5563'} opacity="0.2" />
                <circle cx="320" cy="420" r="6" fill={selectedCountry === 'Mozambique' ? '#003E91' : '#4B5563'} className="transition-all duration-300" />
                <text x="335" y="424" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill={selectedCountry === 'Mozambique' ? '#003E91' : '#4B5563'}>MOZAMBIQUE</text>
              </g>
            </svg>

            {/* Map Instruction Prompt */}
            <div className="absolute bottom-3 left-3 bg-white px-2.5 py-1.5 rounded border border-brand-gray text-xs font-bold text-brand-dark flex items-center gap-1 shadow-sm">
              <MapPin size={12} className="text-brand-blue" />
              <span>Click nodes to view route details</span>
            </div>
          </div>

          {/* Route Details Box (Right 42% on desktop) */}
          <div className="lg:col-span-5">
            <motion.div
              key={selectedCountry}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border border-brand-gray rounded p-8 bg-brand-gray-light min-h-[300px] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-2">
                  Selected Corridor Region
                </span>
                
                <h3 className="text-2xl font-extrabold text-brand-dark mb-1">
                  {countryData[selectedCountry].name}
                </h3>
                
                <p className="text-sm font-bold text-brand-blue mb-4">
                  {countryData[selectedCountry].role}
                </p>

                <p className="text-brand-muted text-sm sm:text-base leading-relaxed mb-6">
                  {countryData[selectedCountry].description}
                </p>

                {/* Key Corridors bullet points */}
                <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider mb-3">
                  Service Highlights:
                </h4>
                
                <ul className="space-y-3" aria-label={`Service highlights for ${selectedCountry}`}>
                  {countryData[selectedCountry].keyPoints.map((pt, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-brand-dark font-medium">
                      <ArrowRight size={14} className="text-brand-blue mt-0.5 flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interactive Quick Quote Trigger */}
              <div className="mt-8 pt-4 border-t border-brand-gray/60">
                <a
                  href="#quote"
                  className="bg-brand-blue text-white text-center block w-full py-3.5 rounded font-bold text-sm hover:bg-brand-blue-dark transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  Request Route Quote
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
