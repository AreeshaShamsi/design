import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/logo.jpg';

const PremiumNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Product');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [, 'About', 'Courses', 'Hackathons', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-out ${isScrolled
            ? 'bg-black/60 backdrop-blur-2xl border-b border-white/5 shadow-[0_8px_32px_rgba(255,255,255,0.05)]'
            : 'bg-transparent'
          } ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-2 bg-white/20 rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700"></div>
                <img src={Logo} alt="Logo" className="w-auto h-10 rounded-full" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-white group-hover:to-white/90 transition-all duration-500 tracking-tight">
                SkillSpardha
              </span>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveItem(item)}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative px-5 py-2.5 text-[15px] font-medium transition-all duration-300 group"
                >
                  {activeItem === item && item !== 'Product' && (
                    <span className="absolute inset-0 bg-white/5 rounded-lg border border-white/10 backdrop-blur-xl transition-all duration-300"></span>
                  )}

                  <span
                    className={`absolute inset-0 bg-white/10 rounded-lg opacity-0 transition-all duration-500 ${hoveredItem === item ? 'opacity-100' : ''
                      }`}
                  ></span>

                  {hoveredItem === item && (
                    <span className="absolute inset-0 bg-white/5 rounded-lg blur-sm animate-pulse"></span>
                  )}

                  <span
                    className={`relative z-10 transition-all duration-300 ${activeItem === item
                        ? 'text-white'
                        : hoveredItem === item
                          ? 'text-white'
                          : 'text-white/60'
                      }`}
                  >
                    {item}
                  </span>
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-3">


              <button className="btn relative overflow-hidden group isolate">
                <span className="relative z-10">Sign up</span>



                {/* Hover glow layer */}
                <div className="absolute inset-0 -z-10
  bg-gradient-to-r from-blue-400/20 to-purple-500/20
  opacity-0 scale-75 
  blur-2xl 
  transition-all duration-500 ease-out
  group-hover:opacity-100 group-hover:scale-100 group-hover:blur-xl">
                </div>

              </button>


            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-500 ease-out ${isMobileMenuOpen
              ? 'max-h-[600px] opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
            }`}
        >
          <div className="px-6 py-8 bg-black/90 backdrop-blur-2xl border-t border-white/5">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveItem(item);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full px-5 py-4 text-left text-[15px] font-medium rounded-xl transition-all duration-300 ${activeItem === item
                      ? 'text-white bg-white/5 border border-white/10'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-8 space-y-3">


              <button className="btn relative overflow-hidden group isolate">
                <span className="relative z-10">Sign up</span>



                {/* Hover glow layer */}
                <div className="absolute inset-0 -z-10
  bg-gradient-to-r from-blue-400/20 to-purple-500/20
  opacity-0 scale-75 
  blur-2xl 
  transition-all duration-500 ease-out
  group-hover:opacity-100 group-hover:scale-100 group-hover:blur-xl">
                </div>
              </button>

            </div>
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </>
  );
};

export default PremiumNavbar;