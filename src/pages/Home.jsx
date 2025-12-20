import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Video from "../assets/video1.mp4";
import Navbar from "../components/Navbar.jsx";
import Stats from "./stats.jsx";
import LearnerSection from "./LearnerSection.jsx";
import CoursesSection from "./Courses.jsx";
import Learning from "./Learning.jsx";
import Footer from "../components/Footer.jsx";
import PlacementSection from "./PlacementSection.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
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

  const navigate = useNavigate();

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


  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white">

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">

          {/* BG Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 bg-black/90 w-full h-full object-cover brightness-[0.5]"
          >
            <source src={Video} />
          </video>

          {/* Dark Layer */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Noise Overlay */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

          {/* Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

          {/* Content */}
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
                  Making Learning <br />
                  <span className="text-transparent bg-clip-text bg-orange-400">Limitless</span>
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
                  <span onClick={() => navigate("/courses")}
                    className="relative z-10 cursor-pointer">Explore</span>

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

        </section>
        <LearnerSection />

        <Stats />
        <CoursesSection />
        <Learning />
        <PlacementSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;