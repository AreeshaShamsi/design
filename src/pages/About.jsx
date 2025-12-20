import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

// Import your images at the top of your file:
import Girl2 from "../assets/girl2.webp";
import Girl3 from "../assets/girl3.webp";
import Study from "../assets/study.webp";
import Bg from "../assets/bg.avif";
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx';
import Stats from './stats.jsx';
import Learning from './Learning.jsx';
import Choose from './Choose.jsx';

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2.5,
        ease: [0.06, 0.9, 0.12, 0.99]
      }
    }
  };

  const float = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse"
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check if content section is in viewport
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax calculations
  const bgParallax = scrollY * 0.5;
  const contentParallax = scrollY * 0.3;
  const glowParallax = scrollY * 0.2;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">

          {/* BG Image with Parallax */}
          <img
            src={Bg}
            alt="Background"
            className="absolute inset-0 bg-black/90 w-full h-full object-cover brightness-[0.5]"
            style={{
              transform: `translateY(${bgParallax}px)`,
            }}
          />

          {/* Dark Layer */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Noise Overlay */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

          {/* Glow Effects with Parallax */}
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            style={{
              transform: `translate(${glowParallax * 0.5}px, ${glowParallax}px)`,
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            style={{
              transform: `translate(-${glowParallax * 0.5}px, -${glowParallax}px)`,
            }}
          />

          {/* Content with Parallax */}
          <div
            className="relative z-10 w-full"
            style={{
              transform: `translateY(-${contentParallax}px)`,
              opacity: Math.max(0, 1 - scrollY / 500),
            }}
          >
            <div className="relative z-10 max-w-7xl  mx-auto px-0 w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center ">

                {/* Left content with consistent animation */}
                <motion.div
                  className="space-y-4 mt-[20rem] sm:mt-[25rem] sm:ml-[1rem] md:mt-[35rem] md:ml-[2rem] lg:mt-[16rem]"

                  initial="hidden"
                  animate="visible"
                  transition={{ staggerChildren: 0.9 }}
                >

                  <motion.h1
                    variants={fadeUp}
                    className=" md:text-5xl sm:text-3xl  leading-none tracking-tight"
                  >

Your dreams, <br />
                    <span className="text-transparent bg-clip-text bg-orange-400">our mission</span>
                  </motion.h1>

                  <motion.p
                    variants={fadeUp}
                    className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-xl leading-relaxed"
                  >
                    Learn with clarity, not clutter. No shortcuts. No noise. Just intentional progress — one skill at a time.
                  </motion.p>


                  <motion.button
                    variants={fadeUp}
                    whileHover={{
                      scale: 1.015,
                      y: -4,
                      transition: { duration: 1, ease: [0.06, 0.9, 0.12, 0.99] }
                    }}
                    whileTap={{
                      scale: 0.985,
                      transition: { duration: 0.4, ease: [0.06, 0.9, 0.12, 0.99] }
                    }}
                    className="btn relative overflow-hidden group isolate flex items-center gap-2"
                  >
                    <span className="relative z-10">Explore</span>

                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <ArrowRight
                        size={16}
                        className="relative z-10 transition-all duration-500 group-hover:translate-x-1"
                      />
                    </motion.div>

                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl -z-10"></div>
                  </motion.button>
                </motion.div>

              </div>
            </div>
          </div>

        </section>

        {/* Content Section with Scroll Animations */}
        <div ref={contentRef} className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Text Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8"
                style={{
                  transitionDelay: isVisible ? '0ms' : '0ms'
                }}
              >
                Consistent growth,<br />boundless potential
              </h2>
              <p
                className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed"
                style={{
                  transitionDelay: isVisible ? '100ms' : '0ms'
                }}
              >
                SkillSpardha cutting-edge online learning platform empowers individuals and teams with vital skills, enhancing their confidence for professional success and personal growth.
              </p>

              {/* Features */}
              <ul className="space-y-6">
                {[
                  "Our online learning platform inspires learners to discover their potential and embark on a journey of growth.",
                  "Our platform motivates learners to pursue their dreams and reach significant milestones in their education.",
                  "Our learning platform encourages individuals to achieve their best, paving the way for personal and professional success."
                ].map((text, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
                    style={{
                      transitionDelay: isVisible ? `${600 + index * 150}ms` : '0ms'
                    }}
                  >
                    <span className="flex-shrink-0 w-6 h-6 flex items-center font-bold justify-center text-orange-400 text-xl font-bold">
                      ✓
                    </span>
                    <span className="text-base leading-relaxed text-gray-700">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div
                className={`rounded-3xl h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-[#f5b5a0] to-[#e89480] hover:scale-105 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{
                  transitionDelay: isVisible ? '200ms' : '0ms'
                }}
              >
                <img src={Girl2} alt="Student with laptop" className="w-full h-full object-cover" />
              </div>
              <div
                className={`rounded-3xl row-span-2 min-h-[450px] sm:min-h-[500px] overflow-hidden bg-gradient-to-br from-[#c4a365] to-[#9d8b70] hover:scale-105 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{
                  transitionDelay: isVisible ? '400ms' : '0ms'
                }}
              >
                <img src={Girl3} alt="Student studying" className="w-full h-full object-cover" />
              </div>
              <div
                className={`rounded-3xl h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-[#c4c1b8] to-[#a8a59d] hover:scale-105 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{
                  transitionDelay: isVisible ? '600ms' : '0ms'
                }}
              >
                <img src={Study} alt="Students collaborating" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease-out both;
        }

        .animate-fadeUp > * {
          animation: fadeUp 1s ease-out both;
        }
      `}</style>
      </div>
      <Stats />
      <Learning />
      <Choose />
      <Footer />
    </>
  );
}