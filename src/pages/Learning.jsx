import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function LearningJourneySection() {
  const sectionRef = useRef(null);

  // Scroll-based parallax for background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section
      ref={sectionRef}
      aria-label="Start your learning journey"
      className="relative w-full min-h-[420px] flex items-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url('https://www.udacity.com/_next/image?url=%2Fimages%2Fexperiments%2Fab_plp_redesign_2025%2Fit-specialist-in-front-of-computer.png&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white"
          >
           

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
            >
              Start Your Learning Journey
              <span className="text-orange-400"> Today</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-xl text-sm md:text-base text-white/90 leading-relaxed mb-6"
            >
              Master real-world skills with practical, industry-ready learning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4"
            >
              <button className="btn group">
                Get Started
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          </motion.div>

          {/* Right spacer */}
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
