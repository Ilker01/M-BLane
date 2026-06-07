import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CookiePopup } from './CookiePopup';

const MOOVS_URL = "https://customer.moovs.app/mib-lane/new/info";

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastFleet, setIsPastFleet] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isFleet = location.pathname === '/fleet';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const fleetList = document.getElementById('fleet-list');
      if (fleetList) {
        const rect = fleetList.getBoundingClientRect();
        setIsPastFleet(rect.bottom < window.innerHeight);
      } else {
        setIsPastFleet(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Services', path: '/services' },
    { 
      name: 'Top Destinations', 
      dropdown: [
        { name: 'Napa', path: '/wine-tour' },
        { name: 'Palo Alto', path: '/?title=Palo%20Alto' },
        { name: 'Monterey', path: '/?title=Monterey' },
      ]
    },
    { 
      name: 'Events', 
      dropdown: [
        { name: 'FIFA World Cup 2026 (Jun 13 - Jul 2)', path: '/?title=FIFA%20World%20Cup%202026' },
        { name: 'Outside Lands (Aug 7-9)', path: '/?title=Outside%20Lands%20(Aug%207-9)' },
        { name: 'Monterey Car Week (Aug 14-23)', path: '/?title=Monterey%20Car%20Week%20(Aug%2014-23)' }
      ]
    },
    { name: 'Our Fleet', path: '/fleet' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const navClass = isScrolled || !isHome
    ? 'bg-white border-b border-gray-100 text-dark'
    : 'bg-transparent text-white border-b border-transparent';

  const linkClass = isScrolled || !isHome
    ? 'text-[#6B6B6B] hover:text-dark'
    : 'text-white/80 hover:text-white';

  let showMobileFloatingBtn = false;
  if (isFleet) {
    showMobileFloatingBtn = isPastFleet;
  } else if (isHome) {
    showMobileFloatingBtn = isScrolled;
  } else {
    showMobileFloatingBtn = true;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${navClass}`}>
        <div className="w-full px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl font-medium tracking-tighter">
            MiBLane
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <button className={`flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.15em] transition-colors ${linkClass}`}>
                    {link.name} <ChevronDown size={14} />
                  </button>
                  <div className="absolute top-full left-0 pt-4 w-48 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
                    <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100 py-2">
                      {link.dropdown.map(drop => (
                        <Link 
                          key={drop.name} 
                          to={drop.path} 
                          className="block px-4 py-2 hover:bg-gray-50 text-[11px] uppercase tracking-[0.15em] text-[#6B6B6B] hover:text-gold transition-colors"
                        >
                          {drop.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path as string}
                  className={`text-[11px] font-medium uppercase tracking-[0.15em] transition-colors ${linkClass}`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {(!isHome || isScrolled) && (
              <a
                href={MOOVS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex bg-gold hover:bg-[#b39441] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md transition-colors animate-in fade-in"
              >
                Book Now
              </a>
            )}

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden absolute top-20 left-0 w-full bg-white text-dark shadow-lg border-t border-gray-100 overflow-hidden"
            >
              <nav className="flex flex-col p-6 gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    {link.dropdown ? (
                      <div className="block border-b border-gray-50 pb-4">
                        <div className="text-sm font-medium uppercase tracking-[0.15em] text-[#6B6B6B] mb-2">
                          {link.name}
                        </div>
                        <div className="flex flex-col gap-3 pl-4 pt-1">
                          {link.dropdown.map(drop => (
                            <Link 
                              key={drop.name} 
                              to={drop.path} 
                              className="text-xs uppercase tracking-[0.15em] text-[#6B6B6B] hover:text-gold transition-colors"
                            >
                              {drop.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={link.path as string}
                        className="block text-sm font-medium uppercase tracking-[0.15em] text-[#6B6B6B] border-b border-gray-50 pb-4"
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                >
                  <a
                    href={MOOVS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gold text-white text-center py-4 rounded-sm text-sm font-bold uppercase tracking-widest mt-2"
                  >
                    Book Now
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-[#1a1a1a] text-white pt-20 pb-8 mt-auto">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-[2rem] font-medium tracking-tighter hover:text-gray-200 transition-colors">
              MiBLane
            </Link>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-[1.1rem] text-white font-sans">Our services</h4>
            <ul className="flex flex-col gap-5 text-[15px] text-gray-300 font-medium">
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/wine-tour" className="hover:text-white transition-colors">Wine Tour</Link></li>
              <li><Link to="/fleet" className="hover:text-white transition-colors">Our Fleet</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[1.1rem] text-white font-sans">Company</h4>
            <ul className="flex flex-col gap-5 text-[15px] text-gray-300 font-medium">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[1.1rem] text-white font-sans">Legal</h4>
            <ul className="flex flex-col gap-5 text-[15px] text-gray-300 font-medium">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-white transition-colors">Terms of service</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-start lg:items-end">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-dark rounded-xl font-bold hover:bg-gray-100 transition-colors mb-10 w-full sm:w-auto text-center"
            >
              Contact us
            </Link>
            
            <div className="self-start lg:self-end">
              <h4 className="font-bold mb-4 text-[1.1rem] text-white font-sans">Social media</h4>
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Facebook className="w-5 h-5 fill-white text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Twitter className="w-5 h-5 fill-black text-black" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#0a66c2] flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Linkedin className="w-5 h-5 fill-white text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-[13px] text-gray-400">
          <p>© {new Date().getFullYear()} MiBLane. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/terms-conditions" className="hover:text-white transition-colors underline decoration-gray-500 underline-offset-4">Terms of service</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors underline decoration-gray-500 underline-offset-4">Privacy policy</Link>
          </div>
        </div>
      </footer>

      {/* Floating mobile Book Now button */}
      <AnimatePresence>
        {showMobileFloatingBtn && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="sm:hidden fixed bottom-6 left-6 right-6 z-40"
          >
            <a 
              href={MOOVS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center bg-gold text-white py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-[#b39441] transition-colors"
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <CookiePopup />
    </div>
  );
}
