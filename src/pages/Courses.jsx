import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("All courses");

  const tabs = [
    "All courses",
    "Business",
    "Finance",
    "Development",
    "Language",
    "Management",
    "Web design"
  ];

  const allCourses = [
    {
      id: 1,
      category: "Finance",
      title: "Optimize workflow for peak productivity",
      lessons: 60,
      price: "175.00",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tag: "Finance"
    },
    {
      id: 2,
      category: "Management",
      title: "Operations strategy & performance improvement",
      lessons: 35,
      price: "130.00",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      tag: "Management"
    },
    {
      id: 3,
      category: "Design",
      title: "Modern UI components and frameworks",
      lessons: 35,
      price: "189.00",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      tag: "Web design"
    },
    {
      id: 4,
      category: "Management",
      title: "Empower success through effective management",
      lessons: 39,
      price: "110.00",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      tag: "Management"
    },
    {
      id: 5,
      category: "Design",
      title: "Enhance UI, UX, and professional design skills",
      lessons: 30,
      price: "180.00",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      tag: "Web design"
    },
    {
      id: 6,
      category: "Design",
      title: "Unleash creativity with modern design tools",
      lessons: 42,
      price: "190.00",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
      tag: "Web design"
    },
    {
      id: 7,
      category: "Finance",
      title: "Unlock wealth strategies through finance education",
      lessons: 34,
      price: "97.00",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
      tag: "Finance"
    },
    {
      id: 8,
      category: "Language",
      title: "Professional writing and communication mastery",
      lessons: 32,
      price: "160.00",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      tag: "Language"
    },
    {
      id: 9,
      category: "Negotiation",
      title: "Advanced deal strategies and communication",
      lessons: 30,
      price: "170.00",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&q=80",
      tag: "Business"
    },
    {
      id: 10,
      category: "Development",
      title: "Comprehensive web development with MERN",
      lessons: 36,
      price: "100.00",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      tag: "Development"
    },
    {
      id: 11,
      category: "Development",
      title: "Building single page applications with angular",
      lessons: 25,
      price: "140.00",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      tag: "Development"
    },
    {
      id: 12,
      category: "Language",
      title: "Content creation and language proficiency",
      lessons: 29,
      price: "110.00",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
      tag: "Language"
    }
  ];

  const filteredCourses = activeTab === "All courses" 
    ? allCourses.slice(0, 9)
    : allCourses.filter(course => course.tag === activeTab);

  return (
    <div className="bg-white min-h-screen py-20 px-6 md:px-12 lg:px-16">
      
      {/* HEADING */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-12"
      >
        <p className="text-gray-500 uppercase tracking-widest text-[11px] font-semibold mb-3">
          FIND THE COURSE RIGHT FOR YOUR GOAL
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
          Select the program tailored to your success
        </h2>
      </motion.div>

      {/* TABS */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-8 mb-16 max-w-5xl mx-auto"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium relative transition-colors pb-1 ${
              activeTab === tab
                ? "text-black"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-black"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </motion.div>

      {/* COURSE CARDS */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12"
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer h-[480px]"
            >
              {/* FULL BACKGROUND IMAGE */}
              <div className="absolute inset-0">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark overlay that gets darker on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
              </div>

              {/* CONTENT OVERLAY */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                {/* TOP: Category */}
                <div>
                  <p className="text-[11px] font-bold text-white/90 uppercase tracking-wider mb-3 inline-block bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {course.category}
                  </p>
                </div>

                {/* BOTTOM: Title, Price, Lessons */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 leading-snug line-clamp-2 drop-shadow-lg">
                    {course.title}
                  </h3>
                  
                  {/* PRICE AND LESSONS */}
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p className="text-3xl font-bold text-white drop-shadow-lg">$ {course.price}</p>
                      <p className="text-xs text-white/80 mt-1">USD</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-white leading-none drop-shadow-lg">{course.lessons}</p>
                      <p className="text-xs text-white/80 mt-1">Lessons</p>
                    </div>
                  </div>

                  {/* BUTTON - Hidden by default, shown on hover */}
                  <motion.button 
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ scale: 1.02 }}
                    className="w-full flex items-center justify-between py-4 px-5 text-sm font-semibold bg-white text-black rounded-lg transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                  >
                    <span>Course details</span>
                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* EMPTY STATE */}
      {filteredCourses.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-xl text-gray-400">No courses found in this category</p>
        </motion.div>
      )}

      {/* SHOW MORE BUTTON */}
      {activeTab === "All courses" && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8"
        >
          <button className="text-sm font-semibold text-black hover:text-gray-600 transition-colors underline underline-offset-4">
            Expand your knowledge — Show more
          </button>
        </motion.div>
      )}
    </div>
  );
}