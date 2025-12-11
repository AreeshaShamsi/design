import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
   

      {/* Hero Section */}
      <section className="py-20 px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight"
          >
            Explore a wide range of<br />courses all in one place.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
          >
            Embrace a realm of possibilities and take charge of your destiny by honing new skills that again to there help you fulfill your ambitions.
          </motion.p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Grid - 3 Columns aligned at bottom */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            
            {/* Left Column - 2 Cards Stacked */}
            <div className="flex flex-col gap-8">
              {/* Hours Videos Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-10 shadow-sm relative"
              >
                <div className="absolute top-8 right-8 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
  className="w-8 h-8 text-yellow-400"
  fill="none"
  stroke="currentColor"
  strokeWidth={2}
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
  />
</svg>

                </div>
                <h2 className="text-5xl font-bold text-black mb-6">120+</h2>
                <h3 className="text-2xl font-bold text-black mb-4">Hours videos</h3>
                <p className="text-gray-600 leading-relaxed">
                  Engage with a wealth of expertly crafted courses, delivered by top-tier professionals from the industry.
                </p>
              </motion.div>

              {/* Images Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-3xl p-10 shadow-sm flex items-center justify-center overflow-hidden"
              >
                <div className="flex gap-6">
                  <div className="w-32 h-44 rounded-3xl overflow-hidden transform rotate-6 shadow-lg">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80" alt="Student" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-32 h-44 rounded-3xl overflow-hidden transform -rotate-6 shadow-lg">
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80" alt="Learning" className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Center Column - Tall Card */}
            <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="bg-white rounded-3xl p-10 shadow-sm flex flex-col justify-center h-full"
>
  <h3 className="text-3xl font-bold text-black mb-4">A Great Community</h3>

  <p className="text-gray-600 leading-relaxed mb-8">
    We cherish the support of our diverse global community, fostering an inclusive
    environment where everyone feels valued.
  </p>

  <button
  className="
    inline-flex items-center gap-[4px]
    px-3 py-1
    text-[10px] font-medium uppercase tracking-[0.08em]
    bg-white text-black
    border border-black rounded-full
    cursor-pointer
    transition-all duration-300
    hover:bg-black hover:text-white
    w-auto
  "
>
  Explore
</button>


</motion.div>


            {/* Right Column - 2 Cards Stacked */}
            <div className="flex flex-col gap-8">
              {/* Community Chat Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-3xl p-10 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-6 right-6 flex flex-col gap-3">
                  {/* Chat Bubble 1 */}
                  <div className="flex items-start gap-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl px-4 py-2 max-w-xs">
                      <p className="text-sm text-gray-800">Hey, How are you?</p>
                    </div>
                  </div>
                  
                  {/* Chat Bubble 2 */}
                  <div className="flex items-start gap-2 flex-row-reverse">
                    <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-gray-900 text-white rounded-2xl px-4 py-2">
                      <p className="text-sm">Good</p>
                    </div>
                  </div>
                  
                  {/* Chat Bubble 3 */}
                  <div className="flex items-start gap-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl px-4 py-2 max-w-xs">
                      <p className="text-sm text-gray-800">Hey, How are you?</p>
                    </div>
                    <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-yellow-100 rounded-2xl px-4 py-2">
                      <p className="text-sm text-gray-800">Good</p>
                    </div>
                  </div>
                </div>
                
                {/* Avatar Row */}
                <div className="flex gap-3 mt-36">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                {/* UK Badge */}
                <div className="absolute bottom-6 right-6 bg-white border border-gray-300 rounded-full px-3 py-1 text-sm flex items-center gap-2 shadow-sm">
                  🇬🇧 UK
                </div>
              </motion.div>

              {/* Happy Students Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-3xl p-10 shadow-sm relative"
              >
                <div className="absolute top-8 right-8 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                   <svg
    className="w-8 h-8 text-yellow-400"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-6xl font-bold text-black mb-6">45K+</h2>
                <h3 className="text-2xl font-bold text-black mb-4">Happy Students</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our core belief: experiential learning drives results. Each course is designed to enhance practical skills and promote openness.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
          {/* Bottom Row - Network Card */}
          <div className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-3xl p-10 shadow-sm relative overflow-hidden"
            >
              {/* Smiley Icons */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="absolute top-20 right-20 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              {/* Connected Avatars */}
              <div className="absolute bottom-20 right-8">
                <div className="relative w-64 h-32">
                  {/* Avatar circles */}
                  <div className="absolute top-8 left-0 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" alt="" className="w-full h-full object-cover bg-yellow-300" />
                  </div>
                  <div className="absolute top-0 left-16 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="" className="w-full h-full object-cover bg-pink-300" />
                  </div>
                  <div className="absolute top-12 left-32 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80" alt="" className="w-full h-full object-cover bg-blue-300" />
                  </div>
                  <div className="absolute top-4 left-48 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="" className="w-full h-full object-cover bg-purple-300" />
                  </div>
                  
                  {/* Dotted connection lines */}
                  <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 250 120">
                    <path d="M 30,40 Q 60,20 90,30" stroke="#d1d5db" strokeWidth="2" fill="none" strokeDasharray="4,4"/>
                    <path d="M 90,30 Q 130,15 170,35" stroke="#d1d5db" strokeWidth="2" fill="none" strokeDasharray="4,4"/>
                    <path d="M 170,35 Q 200,25 230,30" stroke="#d1d5db" strokeWidth="2" fill="none" strokeDasharray="4,4"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>