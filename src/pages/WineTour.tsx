import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import NapaValley1 from '../components/napa valley.jpg';
import NapaValley2 from '../components/napa valley 2.jpg';

const MOOVS_URL = "https://customer.moovs.app/mib-lane/new/info";

export function WineTour() {
  return (
    <div className="flex flex-col bg-cream pt-20">
      <SEO 
        title="Napa Wine Tour Limo | MiBLane — Mill Valley, SF, San Jose"
        description="Unforgettable Napa Valley wine tour limousine services from Mill Valley, San Francisco, and San Jose. Luxury sedans, SUVs, and Sprinters with professional chauffeurs. Starting from $405."
        keywords="Napa wine tour limo, wine tour limousine Bay Area, Napa Valley wine tour San Francisco, wine tour Mill Valley, luxury wine tour Bay Area, Napa wine tour SUV, wine country limo service California"
        url="https://miblane.com/wine-tour"
      />
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-screen min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-dark">
          <div 
            className="absolute inset-0 bg-cover bg-center parallax-bg opacity-70"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070&auto=format&fit=crop')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-6 md:px-16 w-full mt-20">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-[7rem] text-white leading-[1.1] tracking-tight mb-8 max-w-4xl" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                NAPA WINE<br/>TOUR
              </h1>
              <div className="flex items-center space-x-4">
                <span className="text-white text-sm md:text-base font-medium tracking-wider drop-shadow-md">From Mill Valley, CA & Bay Cities</span>
                <div className="h-[1px] w-24 bg-white/60"></div>
                <div className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center bg-white/5">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Split Section 1 */}
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Image */}
          <div className="h-[50vh] lg:h-auto min-h-[500px] relative overflow-hidden">
             <div 
               className="absolute inset-0 bg-cover bg-center"
               style={{ backgroundImage: `url('${NapaValley1}')` }}
             />
          </div>
          {/* Right: Content */}
          <div className="flex items-center justify-center py-20 px-8 md:px-16 lg:px-24">
            <div className="max-w-lg w-full">
              <AnimatedSection animation="fade-up">
                <p className="text-[#a54245] text-xs font-bold uppercase tracking-[0.2em] mb-4">ABOUT</p>
                <h2 className="font-serif text-4xl md:text-5xl text-dark mb-8">Unforgettable Experiences</h2>
                <div className="space-y-6 text-gray-600 text-sm md:text-base font-light leading-relaxed mb-10">
                  <p>
                    Welcome to MiBLane, where luxury meets adventure with our premier Napa wine tour limousine services from Mill Valley, CA, and all over the Bay Area including but not limited to San Francisco and San Jose. Our dedicated team is committed to providing an exceptional wine tour limo experience, ensuring that your journey through Northern California's renowned wine country is elegant and enjoyable.
                  </p>
                  <p>
                    At MiBLane, we understand that a wine tour is more than just a trip; it's an opportunity to indulge in the beauty and flavors of the region in style and comfort. Our top-of-the-line wine tour limousines are designed to offer you the highest level of luxury while you explore the picturesque vineyards and exquisite wineries of Napa.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Split Section 2 */}
      <section className="bg-[#FAF9F6]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Content */}
          <div className="flex items-center justify-center py-20 px-8 md:px-16 lg:px-24 order-2 lg:order-1">
            <div className="max-w-lg w-full">
              <AnimatedSection animation="fade-up">
                <p className="text-[#a54245] text-xs font-bold uppercase tracking-[0.2em] mb-4">PREMIER SERVICE</p>
                <h2 className="font-serif text-4xl md:text-5xl text-dark mb-8">Comfort & Luxury</h2>
                <div className="space-y-6 text-gray-600 text-sm md:text-base font-light leading-relaxed">
                  <p>
                    Our meticulously maintained limousines feature plush interiors, state-of-the-art amenities, and ample space, making your wine tour both comfortable and enjoyable. Whether celebrating a special occasion, planning a romantic getaway, or organizing a group outing, our wine tour limo services are tailored to meet your needs.
                  </p>
                  <p>
                    With MiBLane, you'll benefit from the expertise of our professional chauffeurs, who are well-versed in the best wine regions and wineries. They will ensure a seamless and personalized experience, handling all aspects of your tour from start to finish. Sit back and relax as we take care of the driving, allowing you to focus on savoring the finest wines and breathtaking views.
                  </p>
                  <p>
                    Our wine tour limousine service includes flexible scheduling and customizable itineraries to match your preferences. We work closely with you to design a tour highlighting your favorite wineries and destinations, ensuring a unique and memorable experience.
                  </p>
                  <p className="font-medium text-dark italic border-l-[3px] border-[#a54245] pl-6 py-2 mt-4 text-sm">
                    Choose MiBLane for your next wine tour and experience the perfect blend of luxury and adventure. Contact us today to book your wine tour limousine from the Bay Cities of Mill Valley, CA, San Francisco, CA and other Bay Cities let us elevate your wine-tasting journey to new heights.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
          {/* Right: Image */}
          <div className="h-[50vh] lg:h-auto min-h-[500px] relative overflow-hidden order-1 lg:order-2">
             <div 
               className="absolute inset-0 bg-cover bg-center"
               style={{ backgroundImage: `url('${NapaValley2}')` }}
             />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 md:px-12 bg-cream border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-center">Flexible Rates</p>
            <h2 className="font-serif text-4xl md:text-5xl text-center text-dark mb-24">
              Services & Pricing
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start text-dark">
            
            <AnimatedSection delay={100} className="w-full">
              <div className="bg-white rounded-sm p-10 border border-gray-200/50">
                <h3 className="font-serif text-2xl border-b border-gray-100 pb-6 mb-8 uppercase tracking-widest text-[#111111]">6-Hour Napa Tour</h3>
                <ul className="space-y-6 mb-12">
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-graytext font-medium uppercase tracking-wider">Luxury Sedan</span>
                    <span className="font-serif text-xl">$405 <span className="text-[10px] uppercase font-sans text-gray-400 block text-right mt-1">+ 20% gratuity</span></span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-graytext font-medium uppercase tracking-wider">Luxury SUV</span>
                    <span className="font-serif text-xl">$485 <span className="text-[10px] uppercase font-sans text-gray-400 block text-right mt-1">+ 20% gratuity</span></span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-graytext font-medium uppercase tracking-wider">Luxury Sprinter</span>
                    <span className="font-serif text-xl">$905 <span className="text-[10px] uppercase font-sans text-gray-400 block text-right mt-1">+ 20% gratuity</span></span>
                  </li>
                </ul>

                <h3 className="font-serif text-xl border-b border-gray-100 pb-4 mb-6 uppercase tracking-widest">Additional Hour</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center text-xs">
                    <span className="text-graytext uppercase tracking-wider">Sedan</span>
                    <span className="font-serif text-lg">$95 <span className="text-[9px] uppercase font-sans text-gray-400 ml-2">+ 20% grat.</span></span>
                  </li>
                  <li className="flex justify-between items-center text-xs">
                    <span className="text-graytext uppercase tracking-wider">SUV</span>
                    <span className="font-serif text-lg">$115 <span className="text-[9px] uppercase font-sans text-gray-400 ml-2">+ 20% grat.</span></span>
                  </li>
                  <li className="flex justify-between items-center text-xs">
                    <span className="text-graytext uppercase tracking-wider">Sprinter</span>
                    <span className="font-serif text-lg">$175 <span className="text-[9px] uppercase font-sans text-gray-400 ml-2">+ 20% grat.</span></span>
                  </li>
                </ul>

                <p className="mt-10 text-[10px] uppercase tracking-widest text-gray-400">
                  * This promotion cannot be combined with other promotional offers.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="w-full space-y-10 flex flex-col items-center lg:items-start lg:pl-10 lg:mt-10">
              <h3 className="font-serif text-3xl md:text-4xl text-center lg:text-left text-dark">Book your exquisite journey</h3>
              <p className="text-graytext font-light leading-relaxed text-center lg:text-left text-sm md:text-base">
                Embark on an unforgettable Napa wine tour with our exclusive service. From the moment you step into our luxurious vehicle, you'll experience the ultimate in comfort and style as we transport you to some of the finest vineyards in Napa Valley. Enjoy personalized itineraries, expert guidance, and VIP access to renowned wineries.
              </p>
              
              <a 
                href={MOOVS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-white px-10 py-4 rounded-sm text-sm uppercase font-semibold tracking-widest hover:bg-[#b39441] transition-colors w-full sm:w-auto text-center"
              >
                Reserve Your Tour
              </a>
            </AnimatedSection>
            
          </div>
        </div>
      </section>
    </div>
  );
}
