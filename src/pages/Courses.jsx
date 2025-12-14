import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("All courses");

  const tabs = [
    "All courses",
    "AI",
    "Web Development",
    "ML",
    "Designing",
    "Data Analytics"
  ];

  const allCourses = [
    {
      id: 1,
      category: "AI",
      title: "Master Artificial Intelligence and Machine Learning",
      lessons: 60,
      price: "199.00",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      tag: "AI"
    },
    {
      id: 2,
      category: "Web Development",
      title: "Full Stack Web Development Bootcamp",
      lessons: 45,
      price: "149.00",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      tag: "Web Development"
    },
    {
      id: 3,
      category: "ML",
      title: "Deep Learning and Neural Networks",
      lessons: 55,
      price: "189.00",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      tag: "ML"
    },
    {
      id: 4,
      category: "Designing",
      title: "UI/UX Design Masterclass",
      lessons: 40,
      price: "129.00",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      tag: "Designing"
    },
    {
      id: 5,
      category: "Data Analytics",
      title: "Data Science and Analytics Fundamentals",
      lessons: 50,
      price: "159.00",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tag: "Data Analytics"
    },
    {
      id: 6,
      category: "AI",
      title: "Natural Language Processing with Python",
      lessons: 38,
      price: "179.00",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
      tag: "AI"
    },
    {
      id: 7,
      category: "Web Development",
      title: "Modern React and Next.js Development",
      lessons: 42,
      price: "139.00",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      tag: "Web Development"
    },
    {
      id: 8,
      category: "ML",
      title: "Computer Vision and Image Recognition",
      lessons: 48,
      price: "194.00",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80",
      tag: "ML"
    },
    {
      id: 9,
      category: "Designing",
      title: "Graphic Design and Branding Essentials",
      lessons: 35,
      price: "119.00",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
      tag: "Designing"
    },
    {
      id: 10,
      category: "Data Analytics",
      title: "Advanced SQL and Database Management",
      lessons: 44,
      price: "144.00",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tag: "Data Analytics"
    },
    {
      id: 11,
      category: "Web Development",
      title: "Backend Development with Node.js",
      lessons: 40,
      price: "134.00",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      tag: "Web Development"
    },
    {
      id: 12,
      category: "Designing",
      title: "Figma and Prototyping for Designers",
      lessons: 32,
      price: "109.00",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
      tag: "Designing"
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
          Select the program tailored to your <span className="text-orange-500">success!</span>
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
            className={`text-sm font-bold relative transition-colors pb-1 ${
              activeTab === tab
                ? "text-orange-400"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-orange-500"
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
                      <p className="text-3xl font-bold text-orange-400 leading-none drop-shadow-lg">$ {course.price}</p>
                      <p className="text-xs text-orange-400 mt-1">USD</p>
                    </div>
                    {/* <div className="text-right">
                      <p className="text-3xl font-bold text-white leading-none drop-shadow-lg">{course.lessons}</p>
                      <p className="text-xs text-white/80 mt-1">Lessons</p>
                    </div> */}
                  </div>

                  {/* BUTTON - Hidden by default, shown on hover */}
                 <button
  className="
   inline-flex items-center justify-center
    gap-1 px-6 py-2 text-xs font-medium uppercase tracking-wide
    bg-orange-500 text-white
    border border-black 
    shadow-xl
    transition-all duration-500
    opacity-0 translate-y-4
    group-hover:opacity-100 group-hover:translate-y-0
    hover:bg-orange-400 hover:text-white
    cursor-pointer
  "
>
  


                    <span>Course details</span>
                    <ArrowUpRight size={18} className="transition-transform" />
                  </button>
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
         <motion.button
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "#000"
                          }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="inline-flex items-center justify-center gap-1 px-6 py-2 text-xs font-medium uppercase tracking-wide bg-white text-black border border-black  cursor-pointer w-fit hover:text-white"
                        >
                          View All Courses
                          <ArrowRight
                              size={16}
                              className="relative z-10 transition-all duration-500 group-hover:translate-x-1"
                            />
                        </motion.button>
        </motion.div>
      )}
    </div>
  );
}