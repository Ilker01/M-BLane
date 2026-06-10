import React, { useState, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronDown, Star, ArrowLeft, ArrowRight, Users, Briefcase, Phone } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import MeetAndGreetImg from '../components/meetandgreet.42.48.png';
import HeroImg from '../components/hero-main-pic.jpg';

import SprinterVan from '../components/newsprinter.png';
import NewFirstClassSedan from '../components/newfirstclasssedan.png';
import NewFirstClassSUV from '../components/newfirstclasssuv.jpg';
import NewPremiumSedan from '../components/newpremiumsedan.png';
import NewPremiumSUV from '../components/newpremiumsuv.png';

import NapaValley from '../components/napa valley.jpg';
import TopNapa from '../components/topnapa.jpg';
import TopPalo from '../components/toppalo.jpg';
import TopMonterey from '../components/topmonterey.jpg';

const MOOVS_URL = "https://customer.moovs.app/mib-lane/new/info";

const vehicles = [
  {
    title: "Premium sedan",
    desc: "Mercedes E-Class, BMW 530, Lexus ES, Cadillac CT6, or similar.",
    passengers: "2",
    luggage: "2",
    image: NewPremiumSedan,
  },
  {
    title: "First class sedan",
    desc: "Mercedes S-Class, BMW 7 Series, or similar.",
    passengers: "2",
    luggage: "2",
    image: NewFirstClassSedan,
  },
  {
    title: "Premium SUV",
    desc: "GMC Yukon, Chevy Suburban, Ford Expedition, or similar.",
    passengers: "6",
    luggage: "6",
    image: NewPremiumSUV,
  },
  {
    title: "First class SUV",
    desc: "Cadillac Escalade Platinum Sport, Lincoln Navigator, or similar.",
    passengers: "6",
    luggage: "5",
    image: NewFirstClassSUV,
  },
  {
    title: "Sprinter Van",
    desc: "Mercedes Sprinter or similar.",
    passengers: "12",
    luggage: "10",
    image: SprinterVan,
  }
];

const destinations = [
  {
    title: "Napa, CA",
    image: TopNapa,
    path: "/wine-tour"
  },
  {
    title: "Palo Alto, CA",
    image: TopPalo,
    path: "/?title=Palo%20Alto"
  },
  {
    title: "Monterey, CA",
    image: TopMonterey,
    path: "/?title=Monterey"
  }
];

const faqs = [
  {
    q: "How do I make a booking?",
    a: 'You can book directly through our online booking system via the "Book Now" button, or reach us by phone at +1 (650) 580-5650. We\'re available 24/7.'
  },
  {
    q: "Is a deposit required to confirm my reservation?",
    a: "Yes, a full reservation fee is required to confirm your booking. Full payment must be received before the commencement of service."
  },
  {
    q: "What is your cancellation policy?",
    a: "Cancellations made more than 24 hours before the service date will receive a 100% refund. Cancellations made within 6 hours of the service date are not eligible for a refund."
  },
  {
    q: "Can I make changes to my booking?",
    a: "Yes, any changes must be made in writing and are subject to availability and possible additional charges."
  },
  {
    q: "What vehicles do you have available?",
    a: "Our fleet includes the Cadillac Escalade Platinum Sport (Executive SUV), GMC Yukon (SUV), BMW 530 and Mercedes Benz E 350 (Sedan), and Mercedes Sprinter for larger groups. View our full fleet on the Our Fleet page."
  },
  {
    q: "Do you serve San Francisco International Airport (SFO)?",
    a: "Yes — we serve SFO and all other San Francisco Bay Area airports with premium meet & greet and transfer services."
  },
  {
    q: "Are gratuities included in the price?",
    a: "Gratuity is not included in our standard pricing. For wine tours, a 20% gratuity is standard and listed separately."
  },
  {
    q: "What are your service hours?",
    a: "We are available 24 hours a day, 7 days a week."
  }
];

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchParams] = useSearchParams();
  const vehiclesScrollRef = useRef<HTMLDivElement>(null);
  const destinationsScrollRef = useRef<HTMLDivElement>(null);

  const scrollVehicles = (direction: 'left' | 'right') => {
    if (vehiclesScrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 450;
      vehiclesScrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollDestinations = (direction: 'left' | 'right') => {
    if (destinationsScrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 450;
      destinationsScrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };
  
  const bookingTitle = searchParams.get('title');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="MiBLane | Luxury Chauffeur & Limo Service — San Francisco Bay Area"
        description="Premium luxury chauffeur and limousine service in the San Francisco Bay Area. Airport transfers, corporate transportation, meet & greet, special events, and Napa wine tours. Available 24/7."
        keywords="luxury limo service San Francisco, chauffeur service Bay Area, airport transfer SFO, corporate transportation San Francisco, luxury car service South San Francisco, limo rental Bay Area, Napa wine tour limo, meet and greet airport, executive transportation San Francisco, MiBLane"
        url="https://miblane.com"
        isHome={true}
      />
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[850px] min-h-[100dvh] pt-48 pb-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0E0E0E]">
          <img 
            src={HeroImg} 
            alt="MiBLane Luxury Fleet"
            className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        
        <div className="relative z-10 w-full px-2 md:px-4">
          <div className="max-w-[1600px] mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <div className="flex items-center justify-center gap-6 mb-8 mt-12 md:mt-0 opacity-80">
                <div className="h-[1px] w-12 sm:w-24 bg-gold"></div>
                <span className="text-gold font-sans font-bold tracking-[0.25em] text-xs sm:text-sm uppercase whitespace-nowrap">
                  Serving the Bay Area
                </span>
                <div className="h-[1px] w-12 sm:w-24 bg-gold"></div>
              </div>
              <h1 
                className="font-serif text-white mb-6 leading-[0.95]"
                style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', letterSpacing: '-0.02em', fontWeight: 700 }}
              >
                {bookingTitle ? decodeURIComponent(bookingTitle) : <>Arrive in<br />Style.</>}
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-xl md:text-[1.4rem] text-white/90 mb-14 font-light tracking-wide max-w-2xl mx-auto font-sans">
                A safe start to a safe journey.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
                <a 
                  href={MOOVS_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-12 py-5 bg-gold text-white font-bold uppercase tracking-[0.15em] text-sm hover:bg-[#b39441] transition-colors"
                >
                  Book Online
                </a>
                <a 
                  href="tel:+16505805650" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-12 py-5 bg-transparent border border-white text-white font-bold uppercase tracking-[0.15em] text-sm hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Call Us Today
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        <div className="absolute bottom-8 right-6 md:right-12 z-10 hidden md:block">
        </div>
      </section>

      {/* Immersive Statement */}
      <section className="py-32 px-6 bg-cream border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center border-y border-gray-200/50 py-16">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-dark mb-6 leading-none">
              Your journey.<br/>Perfected.
            </h2>
            <p className="text-lg md:text-xl text-graytext font-light max-w-2xl mx-auto">
              Thoughtful service, meticulous vehicles, and professional chauffeurs — every time.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview */}
      <section className="pt-24 pb-32 px-6 md:px-12 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          <AnimatedSection className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 drop-shadow-sm font-sans tracking-tight">
              Excellent
            </h2>
            <div className="flex gap-[2px] mb-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-sm bg-[#00b67a] flex items-center justify-center">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-3 font-medium">Based on <span className="underline decoration-1 underline-offset-2">208 reviews</span></p>
            <div className="flex items-center justify-center gap-1.5 font-bold text-lg md:text-xl text-dark tracking-tight">
              <Star className="w-6 h-6 text-[#00b67a] fill-[#00b67a]" /> Trustpilot
            </div>
          </AnimatedSection>

          <div className="w-full text-left max-w-7xl mb-12">
            <AnimatedSection>
              <h2 className="text-3xl md:text-[2.5rem] font-bold text-dark mb-4 font-sans tracking-tight leading-tight">
                Premium Vehicles for Every Occasion
              </h2>
              <p className="text-lg md:text-[1.35rem] text-gray-500 font-normal max-w-3xl leading-relaxed">
                Select from sleek sedans or spacious SUVs &mdash; comfort and style come standard.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400 mt-6 md:hidden">
                <ArrowLeft className="w-4 h-4" />
                <span>Swipe to see more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </AnimatedSection>
          </div>
          
          <div className="relative w-full -mx-4 px-4 sm:mx-0 sm:px-0">
            {/* Desktop Navigation Arrows */}
            <button 
              onClick={() => scrollVehicles('left')}
              className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-dark hover:bg-gray-50 hover:scale-105 transition-all border border-gray-100"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => scrollVehicles('right')}
              className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-dark hover:bg-gray-50 hover:scale-105 transition-all border border-gray-100"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            <div 
              ref={vehiclesScrollRef}
              className="w-full overflow-x-auto pb-8 snap-x snap-mandatory flex gap-6 hide-scrollbar" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {vehicles.map((vehicle, index) => (
                <AnimatedSection key={index} delay={index * 100} className="snap-start shrink-0 w-[85vw] sm:w-[450px]">
                <div className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col h-full hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="w-full h-[200px] sm:h-[240px] mb-6 flex items-center justify-center">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.title} 
                      className="w-full h-full object-contain object-center scale-110"
                      style={{ clipPath: vehicle.title === 'Sprinter Van' ? 'inset(0 0 16% 0)' : 'none' }}
                    />
                  </div>
                  <div className="flex justify-between items-center mb-3 mt-auto">
                    <h3 className="text-[1.5rem] font-bold font-sans text-dark tracking-tight">{vehicle.title}</h3>
                    <div className="flex items-center gap-3 text-sm font-semibold text-dark">
                      <div className="flex items-center gap-1.5 hover:text-gray-600 transition-colors" title="Passengers">
                        <Users className="w-[18px] h-[18px]" />
                        <span className="text-[1rem]">{vehicle.passengers}</span>
                      </div>
                      <div className="flex items-center gap-1.5 hover:text-gray-600 transition-colors" title="Luggage">
                        <Briefcase className="w-[18px] h-[18px]" />
                        <span className="text-[1rem]">{vehicle.luggage}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#6B6B6B] text-[1.1rem] leading-relaxed">
                    {vehicle.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="pt-24 pb-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="w-full text-left max-w-7xl mb-12">
            <AnimatedSection>
              <h2 className="text-3xl md:text-[2.5rem] font-bold text-dark mb-4 font-sans tracking-tight leading-tight">
                Top Destinations
              </h2>
              <p className="text-lg md:text-[1.35rem] text-gray-500 font-normal max-w-3xl leading-relaxed">
                From coast to coast &mdash; premium rides, no matter the city.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400 mt-6 md:hidden">
                <ArrowLeft className="w-4 h-4" />
                <span>Swipe to see more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </AnimatedSection>
          </div>
          
          <div className="relative w-full -mx-4 px-4 sm:mx-0 sm:px-0">
            {/* Desktop Navigation Arrows */}
            <button 
              onClick={() => scrollDestinations('left')}
              className="hidden md:flex absolute -left-6 top-[37%] -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-dark hover:bg-gray-50 hover:scale-105 transition-all border border-gray-100"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => scrollDestinations('right')}
              className="hidden md:flex absolute -right-6 top-[37%] -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-dark hover:bg-gray-50 hover:scale-105 transition-all border border-gray-100"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            <div 
              ref={destinationsScrollRef}
              className="w-full overflow-x-auto pb-8 snap-x snap-mandatory flex gap-6 hide-scrollbar" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {destinations.map((dest, index) => (
                <AnimatedSection key={index} delay={index * 100} className="snap-start shrink-0 w-[85vw] sm:w-[450px]">
                  <Link to={dest.path} onClick={() => { if(dest.path.includes('#hero')) setTimeout(() => document.getElementById('hero')?.scrollIntoView({behavior: 'smooth'}), 100) }} className="block group">
                    <div className="flex flex-col">
                      <div className="overflow-hidden rounded-[24px] mb-5 aspect-[4/3] w-full bg-gray-200">
                        <img 
                          src={dest.image} 
                          alt={dest.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-center" 
                        />
                      </div>
                      <h3 className="text-[1.4rem] font-bold font-sans text-dark tracking-tight">{dest.title}</h3>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-24 bg-dark text-white px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <AnimatedSection>
               <div className="bg-white/5 p-8 border border-white/10 rounded-sm hover:border-gold/30 transition-colors">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3">Direct Assistance</p>
                <p className="text-2xl md:text-3xl font-serif text-white mb-2">+1 (650) 580-5650</p>
                <p className="text-xs text-gold">booking@miblane.com</p>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-8">
            <AnimatedSection>
              <h3 className="text-2xl md:text-3xl font-serif mb-8 border-b border-white/10 pb-6 text-white text-left">The MiBLane Promise</h3>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatedSection delay={100}>
                <div className="flex items-start space-x-4">
                  <div className="w-5 h-5 mt-1 border border-gold rounded-full flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-wider text-gold mb-1">Available 24/7</h4>
                    <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">We're always on call, day or night for your convenience.</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <div className="flex items-start space-x-4">
                  <div className="w-5 h-5 mt-1 border border-gold rounded-full flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-wider text-gold mb-1">Expert Chauffeurs</h4>
                    <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">Trained, discreet, and dedicated to your comfort and safety.</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex items-start space-x-4">
                  <div className="w-5 h-5 mt-1 border border-gold rounded-full flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-wider text-gold mb-1">Bay Area Experts</h4>
                    <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">Serving SFO and the entire Bay Area with precision.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-24 bg-dark text-white px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <AnimatedSection delay={100}>
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
              <span className="text-gold text-2xl">24/7</span>
            </div>
            <h3 className="font-serif text-xl mb-3">Available 24/7</h3>
            <p className="text-gray-400 font-light">We're always on call, day or night.</p>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
              <span className="text-gold text-2xl font-serif">Pro</span>
            </div>
            <h3 className="font-serif text-xl mb-3">Professional Chauffeurs</h3>
            <p className="text-gray-400 font-light">Trained, discreet, and dedicated to your comfort.</p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
              <span className="text-gold text-2xl font-serif">SF</span>
            </div>
            <h3 className="font-serif text-xl mb-3">Bay Area Experts</h3>
            <p className="text-gray-400 font-light">Serving SFO and the entire Bay Area with precision.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-center">Information</p>
            <h2 className="font-serif text-3xl md:text-5xl text-center text-dark mb-16">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>
          
          <div className="space-y-0">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="border-b border-gray-200 overflow-hidden"
                >
                  <button 
                    className="w-full text-left py-6 flex justify-between items-center focus:outline-none group hover:bg-gray-50/50 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <span 
                      className={`font-medium text-sm md:text-base pr-8 transition-colors ${isOpen ? 'text-gold' : 'text-dark group-hover:text-gold'}`}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown 
                      className={`text-gold shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                      size={20} 
                    />
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-graytext text-sm leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-32 bg-dark px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
             <p className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Bookings</p>
            <h2 className="font-serif text-3xl md:text-5xl mb-6 text-white">
              Ready to book your ride?
            </h2>
            <p className="text-white/60 mb-10 font-light">
              Reach out if you have any special requests or custom travel needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={MOOVS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gold text-white px-10 py-4 rounded-sm text-sm uppercase font-semibold tracking-widest hover:bg-[#b39441] transition-colors"
              >
                Book Now
              </a>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto border border-white/40 text-white px-10 py-4 rounded-sm text-sm uppercase font-semibold tracking-widest hover:bg-white hover:text-dark transition-colors"
              >
                Drop Us a Line
              </Link>
            </div>
            <div className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-center gap-8 text-sm text-white/50">
              <a href="tel:+16505805650" className="hover:text-gold transition-colors font-serif text-xl">
                 +1 (650) 580-5650
              </a>
              <a href="mailto:booking@miblane.com" className="hover:text-gold transition-colors font-serif text-xl">
                 booking@miblane.com
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
