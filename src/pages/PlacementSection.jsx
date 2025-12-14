import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      title: "Full mastery program!",
      text: "Professional, responsive, and easy to work with. They understood our needs perfectly. The final product exceeded expectations well good.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      name: "James Anderson"
    },
    {
      id: 2,
      title: "Ultimate learning journey!",
      text: "From start to finish, everything was perfect. Great attention to detail, pixel-perfect layouts, and a strong sense of user experience.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      name: "Charlotte Williams"
    },
    {
      id: 3,
      title: "From basics to mastery!",
      text: "We're over the moon with our new website. It looks sharp, functions brilliantly, and has already drawn great feedback.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      name: "Oliver Smith"
    },
    {
      id: 4,
      title: "Exceptional experience!",
      text: "The team delivered beyond our expectations. Every detail was carefully crafted, and the final result speaks for itself.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      name: "Emma Johnson"
    },
    {
      id: 5,
      title: "Game-changing results!",
      text: "Working with them transformed our business. The quality and professionalism were outstanding from day one.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&q=80",
      name: "Michael Brown"
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Get visible cards (previous, current, next)
  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length;
      cards.push({ ...testimonials[index], position: i });
    }
    return cards;
  };

  return (
    <div className="bg-gray-100 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gray-500 uppercase tracking-widest text-xs font-semibold mb-3">
            REVIEWS FROM GLOBAL LEARNERS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What our clients say about us
          </h2>
        </motion.div>

        {/* CAROUSEL CONTAINER */}
        <div className="relative flex justify-center items-center gap-8 px-4">
          <AnimatePresence mode="sync">
            {getVisibleCards().map((testimonial) => (
              <motion.div
                key={`${testimonial.id}-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: testimonial.position === 0 ? 1 : 0.3,
                  scale: testimonial.position === 0 ? 1 : 0.85,
                  x: testimonial.position * 420,
                  zIndex: testimonial.position === 0 ? 10 : 0
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                className="absolute w-full max-w-sm"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {/* Quote Icon */}
                  <div className="text-gray-300 text-6xl font-serif mb-4">"</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {testimonial.title}
                  </h3>

                  {/* Text */}
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {testimonial.text}
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-1 bg-red-500 mb-6"></div>

                  {/* Profile */}
                  <div className="flex flex-col items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover mb-4"
                    />
                    <p className="text-gray-700 font-semibold">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Spacer for height */}
        <div className="h-[600px]"></div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-red-500 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}