import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { SEO } from '../components/SEO';

const MOOVS_URL = "https://customer.moovs.app/mib-lane/new/info";

export function BookNow() {
  return (
    <div className="flex flex-col bg-white pt-32 pb-24 px-6 md:px-12 min-h-[85vh] items-center justify-center">
      <SEO 
        title="Book Now | MiBLane Luxury Limo — San Francisco Bay Area"
        description="Book your luxury chauffeur or limousine service with MiBLane online. Available 24/7 across the San Francisco Bay Area. Airport transfers, corporate rides, wine tours and more."
        keywords="book limo San Francisco, reserve luxury car Bay Area, book chauffeur SFO, online limo booking Bay Area, book airport transfer San Francisco"
        url="https://miblane.com/book-now"
      />
      <div className="max-w-xl mx-auto w-full text-center mt-10">
        <AnimatedSection>
          <div className="bg-cream rounded-sm p-12 md:p-16 border border-gray-200">
             <p className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Reservations</p>
            <h1 className="font-serif text-4xl md:text-6xl text-dark mb-4">
              Book Your Ride
            </h1>
            <p className="text-graytext text-sm font-light mb-12">
              Reserve your luxury experience in just a few steps.
            </p>
            
            <a 
              href={MOOVS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center bg-gold text-white px-12 py-5 rounded-sm text-sm uppercase font-semibold tracking-widest hover:bg-[#b39441] transition-colors"
            >
              Book Now
            </a>
            
            <div className="mt-16 pt-10 border-t border-gray-200/50">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-graytext mb-6">
                Prefer to speak with us?
              </p>
              <div className="flex flex-col gap-4 items-center justify-center">
                <a 
                  href="tel:+16692719105" 
                  className="font-serif text-2xl text-dark hover:text-gold transition-colors"
                >
                  +1 669 271 9105
                </a>
                <a 
                  href="mailto:booking@miblane.com" 
                  className="text-sm font-medium text-dark hover:text-gold transition-colors"
                >
                  booking@miblane.com
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
