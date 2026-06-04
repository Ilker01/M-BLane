import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { StickyScrollCards } from '../components/StickyScrollCards';
import { SEO } from '../components/SEO';
import MeetAndGreetImg from '../components/meetandgreet.42.48.png';
import HeroImg from '../components/hero-main-pic.jpg';

const MOOVS_URL = "https://customer.moovs.app/mib-lane/new/info";

const services = [
  { 
    title: "Airport Transfers", 
    desc: "A seamless journey from any Bay Area airport, tailored to your schedule.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#111111] group-hover:text-[#C9A84C] transition-colors duration-300">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.7l-1.2 3.6c-.2.5.1 1 .5 1.2L9 14l-3.5 3.5-3.1-.9c-.4-.1-.8.2-1 .6l-.8 2.3c-.1.3 0 .7.3.9l4.6 2c.3.1.6 0 .8-.2l3.4-3.4 2.8-2.8 1.5 1.5-3.3 3.3c-.2.2-.3.5-.2.8l2 4.6c.2.3.6.5.9.3l2.3-.8c.4-.2.7-.6.6-1l-.9-3.1 2.3-6 4.7 6c.2.3.7.6 1.2.5l3.6-1.2c.5-.2.8-.6.7-1.1z"/>
      </svg>
    )
  },
  { 
    title: "Corporate Transportation", 
    desc: "Elevate your business travel with punctual, professional limo service.",
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#111111] group-hover:text-[#C9A84C] transition-colors duration-300">
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ) 
  },
  { 
    title: "Meet & Greet", 
    desc: "Your chauffeur meets you at arrivals — luggage handled, ride waiting.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#111111] group-hover:text-[#C9A84C] transition-colors duration-300">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ) 
  },
  { 
    title: "Special Events", 
    desc: "Arrive in style for weddings, galas, and every occasion that matters.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#111111] group-hover:text-[#C9A84C] transition-colors duration-300">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ) 
  },
  { 
    title: "VIP City Sight Tours", 
    desc: "Explore San Francisco and the Bay Area in comfort and luxury.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#111111] group-hover:text-[#C9A84C] transition-colors duration-300">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ) 
  },
  { 
    title: "Napa Wine Tour", 
    desc: "Discover Napa Valley's finest wineries in a meticulously maintained limousine.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#111111] group-hover:text-[#C9A84C] transition-colors duration-300">
        <path d="M8 22h8"/>
        <path d="M7 10h10"/>
        <path d="M12 15v7"/>
        <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"/>
      </svg>
    ) 
  }
];

const faqs = [
  {
    q: "How do I make a booking?",
    a: 'You can book directly through our online booking system via the "Book Now" button, or reach us by phone at +1 669 271 9105. We\'re available 24/7.'
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
    a: "We are available 24 hours a day, 7 days a week. You can also reach us through our chat agent on the website at any time."
  }
];

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0E0E0E]">
          <img 
            src={HeroImg} 
            alt="MiBLane Luxury Fleet"
            className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        
        <div className="relative z-10 w-full px-6 md:px-16 mt-20">
          <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
            <AnimatedSection animation="fade-up">
              <h1 
                className="font-serif text-white mb-4 leading-none"
                style={{ fontSize: 'clamp(4rem, 8vw, 7rem)' }}
              >
                Arrive in Style.
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-xl md:text-2xl text-white/80 mb-10 font-light">
                A safe start to a safe journey.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
                <a 
                  href={MOOVS_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gold text-white px-10 py-4 rounded-sm text-sm uppercase font-semibold tracking-widest hover:bg-[#b39441] transition-colors w-full sm:w-auto"
                >
                  Schedule a Pickup
                </a>
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center border border-white/40 text-white px-10 py-4 rounded-sm text-sm uppercase font-semibold tracking-widest hover:bg-white hover:text-dark transition-colors w-full sm:w-auto"
                >
                  Our Services
                </Link>
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
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4">
            <AnimatedSection>
              <p className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Premium Offerings</p>
              <h2 className="font-serif text-3xl md:text-5xl text-dark">
                How can we serve you?
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Link to="/services" className="text-xs font-semibold mt-6 md:mt-0 inline-block text-dark hover:text-gold transition-colors uppercase tracking-wider">
                VIEW ALL SERVICES &rarr;
              </Link>
            </AnimatedSection>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Link to="/services" className="block group h-full">
                  <div className="h-full flex flex-col p-8 bg-[#F5F0E8] rounded-[12px] border-t-2 border-transparent hover:border-[#C9A84C] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <div className="mb-6">
                      {service.icon}
                    </div>
                    <div className="flex-grow flex flex-col">
                      <h3 className="font-serif text-[1.5rem] leading-tight text-dark mb-8 tracking-tight">{service.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-light mt-auto">{service.desc}</p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
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
                <p className="text-2xl md:text-3xl font-serif text-white mb-2">+1 669 271 9105</p>
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

      {/* Experience Luxury Storytelling */}
      <section className="bg-dark pt-24">
        <div className="max-w-7xl mx-auto px-5 mb-12">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Experience Luxury with MiBLane
            </h2>
          </AnimatedSection>
        </div>
        
        <StickyScrollCards />
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
              <a href="tel:+16692719105" className="hover:text-gold transition-colors font-serif text-xl">
                 +1 669 271 9105
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
