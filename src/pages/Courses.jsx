import React, { useState } from "react";

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("All courses");

  const tabs = [
    "All courses",
    "Web Development",
    "Web Design",
    "AI & ML",
    "Data Science"
  ];

  const allCourses = [
    {
      id: 1,
      category: "WEB DEVELOPMENT",
      title: "Full-Stack Web Development Bootcamp",
      price: "$ 299.00 USD",
      lessons: 85,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      tag: "Web Development"
    },
    {
      id: 2,
      category: "AI & ML",
      title: "Machine Learning Fundamentals",
      price: "$ 349.00 USD",
      lessons: 75,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      tag: "AI & ML"
    },
    {
      id: 3,
      category: "WEB DESIGN",
      title: "Modern UI/UX Design & Figma Mastery",
      price: "$ 189.00 USD",
      lessons: 45,
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      tag: "Web Design"
    },
    {
      id: 4,
      category: "DATA SCIENCE",
      title: "Python for Data Science & Analytics",
      price: "$ 249.00 USD",
      lessons: 70,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tag: "Data Science"
    },
    {
      id: 5,
      category: "WEB DEVELOPMENT",
      title: "React & Next.js Master Course",
      price: "$ 220.00 USD",
      lessons: 50,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      tag: "Web Development"
    },
    {
      id: 6,
      category: "WEB DEVELOPMENT",
      title: "Advanced JavaScript & TypeScript",
      price: "$ 199.00 USD",
      lessons: 55,
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&q=80",
      tag: "Web Development"
    },
    {
      id: 7,
      category: "WEB DEVELOPMENT",
      title: "Node.js & Express Backend Mastery",
      price: "$ 259.00 USD",
      lessons: 62,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      tag: "Web Development"
    },
    {
      id: 8,
      category: "WEB DEVELOPMENT",
      title: "MERN Stack Complete Guide",
      price: "$ 319.00 USD",
      lessons: 95,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
      tag: "Web Development"
    },
    {
      id: 9,
      category: "WEB DESIGN",
      title: "Responsive Web Design & CSS Grid",
      price: "$ 159.00 USD",
      lessons: 38,
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
      tag: "Web Design"
    },
    {
      id: 10,
      category: "WEB DESIGN",
      title: "Advanced CSS & Animation Techniques",
      price: "$ 169.00 USD",
      lessons: 42,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      tag: "Web Design"
    },
    {
      id: 11,
      category: "WEB DESIGN",
      title: "UI Design System & Component Library",
      price: "$ 199.00 USD",
      lessons: 48,
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
      tag: "Web Design"
    },
    {
      id: 12,
      category: "AI & ML",
      title: "Deep Learning & Neural Networks",
      price: "$ 399.00 USD",
      lessons: 90,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
      tag: "AI & ML"
    },
    {
      id: 13,
      category: "AI & ML",
      title: "Natural Language Processing with Python",
      price: "$ 329.00 USD",
      lessons: 65,
      image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&q=80",
      tag: "AI & ML"
    },
    {
      id: 14,
      category: "AI & ML",
      title: "Computer Vision & Image Recognition",
      price: "$ 379.00 USD",
      lessons: 80,
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80",
      tag: "AI & ML"
    },
    {
      id: 15,
      category: "AI & ML",
      title: "AI Model Deployment & MLOps",
      price: "$ 359.00 USD",
      lessons: 58,
      image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&q=80",
      tag: "AI & ML"
    },
    {
      id: 16,
      category: "DATA SCIENCE",
      title: "Data Analysis with Pandas & NumPy",
      price: "$ 229.00 USD",
      lessons: 52,
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80",
      tag: "Data Science"
    },
    {
      id: 17,
      category: "DATA SCIENCE",
      title: "Big Data & Apache Spark",
      price: "$ 289.00 USD",
      lessons: 68,
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
      tag: "Data Science"
    },
    {
      id: 18,
      category: "DATA SCIENCE",
      title: "Data Visualization with Tableau & Power BI",
      price: "$ 199.00 USD",
      lessons: 45,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tag: "Data Science"
    }
  ];

  const filteredCourses = activeTab === "All courses" 
    ? allCourses.slice(0, 5)
    : allCourses.filter(course => course.tag === activeTab);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-20 px-4 md:px-8 lg:px-20">
      
      {/* HEADING */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-4 animate-fade-in">
          FIND THE COURSE RIGHT FOR YOUR GOAL
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight animate-fade-in-up">
          Select the program tailored to your success
        </h1>
      </div>

      {/* TABS */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16 border-b-2 border-gray-200 pb-6 max-w-5xl mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-base md:text-lg font-bold pb-3 transition-all relative ${
              activeTab === tab
                ? "text-gray-900 scale-105"
                : "text-gray-400 hover:text-gray-700"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500 rounded-full animate-slide-in" />
            )}
          </button>
        ))}
      </div>

      {/* COURSE COUNT */}
      <div className="text-center mb-8">
        <p className="text-gray-600 font-semibold">
          {activeTab === "All courses" ? "Featured " : ""}Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
        </p>
      </div>

      {/* COURSE CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredCourses.map((course, index) => (
          <div
            key={course.id}
            style={{ animationDelay: `${index * 50}ms` }}
            className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white hover:-translate-y-2 animate-fade-in-up"
          >
            {/* IMAGE BACKGROUND */}
            <div className="h-96 relative overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* LESSONS BADGE */}
              <div className="absolute top-6 right-6 bg-red-500 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-2xl z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <span className="text-3xl font-black">{course.lessons}</span>
                <span className="text-sm font-bold">Lessons</span>
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                <p className="text-xs font-black tracking-widest uppercase mb-3 text-red-400">
                  {course.category}
                </p>
                <h3 className="text-2xl font-black mb-4 leading-tight group-hover:text-yellow-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-2xl font-black text-yellow-400">
                  {course.price}
                </p>
              </div>
            </div>

            {/* HOVER EFFECT BORDER */}
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-red-500 rounded-3xl transition-all duration-300 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-20">
          <p className="text-2xl font-bold text-gray-400">No courses found in this category</p>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}