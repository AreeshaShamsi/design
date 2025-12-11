import { motion } from "framer-motion";

export default function LearningJourneySection() {
  return (
    <section
      aria-label="Start your learning journey"
      className="relative w-full min-h-[70vh] flex items-center"
      style={{
        backgroundImage:
          "url('https://www.udacity.com/_next/image?url=%2Fimages%2Fexperiments%2Fab_plp_redesign_2025%2Fit-specialist-in-front-of-computer.png&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to improve text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left: Text content on top of background */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="py-16 md:py-24 lg:py-32 text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Start Your Learning
              <span className="block">Journey Today</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm md:text-base text-white/90">
              A focused IT professional at a modern workstation — a snapshot of
              hands-on learning, problem solving, and the skills that drive
              successful tech careers. Master real-world skills with practical,
              industry-ready learning.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-2xl px-6 py-3 text-base shadow-lg bg-white text-black hover:opacity-95 transition">
                Get Started
              </button>
              <button className="rounded-2xl px-6 py-3 text-base border border-white/60 text-white hover:bg-white hover:text-black transition">
                Explore Courses
              </button>
            </div>
          </motion.div>

          {/* Right: optional empty column for layout balance (keeps text left on large screens) */}
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
