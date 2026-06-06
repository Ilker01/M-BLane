import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const MOOVS_URL = "https://customer.moovs.app/mib-lane/new/info";

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Services', path: '/services' },
    { name: 'Wine Tour', path: '/wine-tour' },
    { name: 'Our Fleet', path: '/fleet' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const navClass = isScrolled || !isHome
    ? 'bg-white border-b border-gray-100 text-dark'
    : 'bg-transparent text-white border-b border-transparent';

  const linkClass = isScrolled || !isHome
    ? 'text-[#6B6B6B] hover:text-dark'
    : 'text-white/80 hover:text-white';

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
              <Link
                key={link.name}
                to={link.path}
                className={`text-[11px] font-medium uppercase tracking-[0.15em] transition-colors ${linkClass}`}
              >
                {link.name}
              </Link>
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
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white text-dark shadow-lg border-t border-gray-100">
            <nav className="flex flex-col p-5 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-xs font-medium uppercase tracking-[0.15em] text-[#6B6B6B] border-b border-gray-50 pb-3"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={MOOVS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-white text-center py-4 rounded-sm text-xs font-bold uppercase tracking-widest mt-2"
              >
                Book Now
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-dark text-white pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-serif text-3xl mb-4 inline-block font-medium tracking-tighter">
              MiBLane
            </Link>
            <p className="text-white/60 text-xs font-light">
              A safe start to a safe journey.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-[10px] uppercase tracking-[0.2em] text-white/50">Explore</h4>
            <ul className="flex flex-col gap-4 text-xs text-white/60">
              <li><Link to="/services" className="hover:text-gold transition-colors">Our Services</Link></li>
              <li><Link to="/wine-tour" className="hover:text-gold transition-colors">Wine Tour</Link></li>
              <li><Link to="/fleet" className="hover:text-gold transition-colors">Our Fleet</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[10px] uppercase tracking-[0.2em] text-white/50">Contact</h4>
            <ul className="flex flex-col gap-4 text-xs text-white/60">
              <li>225 Cuesta Drive<br/>South San Francisco, CA 94080</li>
              <li><a href="tel:+16692719105" className="hover:text-gold transition-colors">+1 669 271 9105</a></li>
              <li><a href="mailto:booking@miblane.com" className="hover:text-gold transition-colors">booking@miblane.com</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-[10px] uppercase tracking-[0.2em] text-white/50">Legal</h4>
            <ul className="flex flex-col gap-4 text-xs text-white/60">
              <li><Link to="/terms-conditions" className="hover:text-gold transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between text-[9px] uppercase tracking-[0.2em] text-white/30">
          <p>© 2025 MiBLane Luxury • All Rights Reserved</p>
        </div>
      </footer>

      {/* Floating mobile Book Now button */}
      {(!isHome || isScrolled) && (
        <div className="sm:hidden fixed bottom-6 left-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-5">
          <a 
            href={MOOVS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center bg-gold text-white py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-[#b39441] transition-colors"
          >
            Book Now
          </a>
        </div>
      )}
    </div>
  );
}
