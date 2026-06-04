import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { SEO } from '../components/SEO';

// Image imports
import MeetAndGreetImg from '../components/meetandgreet.42.48.png';

const MOOVS_URL = "https://customer.moovs.app/mib-lane/new/info";

const services = [
  {
    title: "Airport Transfers",
    desc: "A peace of mind and a smooth travel experience right after or before your flight! A premium airport transfer service to guarantee a seamless journey from the airport to your destination. Tailored services of meet and greet, baggage assistance, and luxury transportation upon your arrival. Whether it is SFO or any other San Francisco Bay Area airport, our expert chauffeurs will support you at every step. Reserve our airport transfer services today and commence your trip in style.",
    placeholder: "",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Corporate Transportation",
    desc: "Elevate your business travel with our premier Corporate Limo Transportation service. From the moment you are picked up in one of our luxurious vehicles, you'll experience professionalism and comfort. Whether you need transportation for a crucial meeting, a corporate event, or airport transfers, our service ensures punctuality and reliability. Enjoy a stress-free ride with our professional chauffeurs dedicated to providing exceptional service. Impress your clients and colleagues with our top-tier transportation solutions tailored to meet the demands of the corporate world. Book our Corporate Limo Transportation service today and travel with the confidence and sophistication your business deserves.",
    placeholder: "",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Meet & Greet",
    desc: "Our premium 'Meet & Greet' limo service, where luxury meets convenience. Whether arriving from a long flight or setting off on an important business trip, our professional chauffeurs are here to ensure your journey is seamless and stress-free. Upon your arrival, you will be warmly greeted by our courteous driver, holding a personalized sign and ready to assist you with your luggage and escort you to your luxurious limousine. Our fleet of top-of-the-line vehicles is meticulously maintained to offer you the utmost comfort and style. Enjoy a smooth and relaxing ride to your destination with complimentary amenities tailored to enhance your experience.",
    placeholder: "",
    image: MeetAndGreetImg
  },
  {
    title: "Special Events",
    desc: "At MiBLane Limos, we specialize in providing luxury transportation services for weddings, proms, and other special events. Our fleet of vehicles includes SUVs and party buses, all equipped with the latest amenities and features to make your special day even more special. Our highly trained chauffeurs are experienced and will ensure you arrive at your destination on time and in style. Contact us at booking@miblane.com to book your next ride!",
    placeholder: "",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "VIP City Sight Tours",
    desc: "Discover the stunning San Francisco Bay Area with our exclusive VIP sightseeing tours, thoughtfully designed to meet your unique preferences. Our luxurious limousines feature premium amenities, including TV entertainment systems and panoramic sunroofs, for a comfortable and immersive journey through the city's renowned landmarks and hidden treasures. Whether you're arriving at SFO and eager to dive right into exploration or already in the city seeking an elevated experience, our professional chauffeurs will guide you through San Francisco's iconic sights and scenic surroundings. Elevate your journey beyond the ordinary— reserve your exclusive tour today and experience San Francisco in ultimate style!",
    placeholder: "",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop"
  }
];

export function Services() {
  return (
    <div className="flex flex-col bg-cream pt-20">
      <SEO 
        title="Our Services | MiBLane Luxury Chauffeur — Bay Area"
        description="Explore MiBLane's premium services including airport transfers, corporate transportation, meet & greet, special events, and VIP city tours across the San Francisco Bay Area."
        keywords="airport transfer Bay Area, corporate limo service San Francisco, meet and greet SFO, special event limo Bay Area, VIP city tours San Francisco, luxury transportation services"
        url="https://miblane.com/services"
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-dark">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop')" }}
            title="[PHOTO PLACEHOLDER: luxury vehicle on city road]"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 mt-16">
          <AnimatedSection animation="fade-up">
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-none">
              Our Services
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto">
              Premium tailored transportation for every occasion.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services List */}
      <div className="flex flex-col border-t border-gray-200">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <section 
              key={index} 
              className={`py-24 px-6 md:px-12 ${isEven ? 'bg-white' : 'bg-cream'}`}
            >
              <div className="max-w-7xl mx-auto">
                <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <AnimatedSection animation="fade-up" delay={100} className="w-full">
                      <div 
                        className="aspect-[4/3] rounded-sm overflow-hidden bg-gray-200 relative group"
                        title={service.placeholder}
                      >
                        <div 
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                          style={{ backgroundImage: `url('${service.image}')` }}
                        >
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                          <div className="absolute bottom-6 left-6 text-white text-[10px] font-bold uppercase tracking-widest drop-shadow-md">
                            {service.placeholder}
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                  
                  {/* Content */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <AnimatedSection animation="fade-up" delay={200}>
                      <h2 className="font-serif text-3xl md:text-5xl text-dark mb-6">
                        {service.title}
                      </h2>
                      <p className="text-graytext text-sm md:text-base leading-relaxed font-light mb-10">
                        {service.desc}
                      </p>
                      <a 
                        href={MOOVS_URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[11px] font-bold uppercase tracking-[0.2em] text-dark border-b border-dark pb-1 hover:text-gold hover:border-gold transition-colors group"
                      >
                        Book This Service <span className="ml-3 transform group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    </AnimatedSection>
                  </div>
                  
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
