import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import { Users, Briefcase, Award, ShieldCheck, BatteryCharging, Plane, Headset } from 'lucide-react';

// Image imports
import ServicesCadillac from '../components/servicescadillac.jpg';
import ServicesGMC from '../components/servicesgmc.32.07.png';
import ServicesBMW from '../components/servicesbmw.jpg';
import ServicesMercedes from '../components/servicesmercedes.jpg';
import ServicesSprinter from '../components/servicessprinter.jpg';

const fleet = [
  {
    category: "First class",
    name: "Cadillac Escalade Platinum Sport",
    desc: "Upgraded comfort for 2 to 6 passengers. The pinnacle of luxury and space. Perfect for executive travel or premium airport transfers.",
    passengers: "2-6",
    luggage: "2-5",
    image: ServicesCadillac,
  },
  {
    category: "Premium SUV",
    name: "GMC Yukon",
    desc: "A bold and spacious option combining sophisticated design with premium comfort for group travel.",
    passengers: "2-6",
    luggage: "2-6",
    image: ServicesGMC,
  },
  {
    category: "Premium Sedan",
    name: "BMW 530",
    desc: "Elegant, dynamic, and refined. Ideal for corporate transportation and stylish city navigation.",
    passengers: "2",
    luggage: "2",
    image: ServicesBMW,
  },
  {
    category: "Premium Sedan",
    name: "Mercedes Benz E 350",
    desc: "A masterclass in comfort and class. The perfect choice for standard executive trips.",
    passengers: "2",
    luggage: "2",
    image: ServicesMercedes,
  },
  {
    category: "Sprinter Van",
    name: "Mercedes Sprinter",
    desc: "Great for group travel for up to 12 passengers. Generous seating and ample headroom for group outings, wine tours, or corporate events.",
    passengers: "12",
    luggage: "10",
    image: ServicesSprinter,
    imagePosition: "object-bottom"
  }
];

export function Fleet() {
  return (
    <div className="flex flex-col bg-[#F9F9F9] pt-32 pb-24 px-4 sm:px-6 md:px-12 min-h-screen overflow-hidden">
      <SEO 
        title="Our Fleet | Luxury Vehicles — MiBLane Bay Area"
        description="Explore MiBLane's premium fleet including the Cadillac Escalade Platinum Sport, GMC Yukon, BMW 530, Mercedes Benz E 350, and Mercedes Sprinter. Contact for special pricing."
        keywords="Cadillac Escalade limo Bay Area, luxury SUV rental San Francisco, Mercedes Sprinter hire Bay Area, BMW sedan chauffeur, executive fleet San Francisco, luxury vehicle rental Bay Area"
        url="https://miblane.com/fleet"
      />
      
      <div className="max-w-7xl mx-auto w-full text-center mb-16 md:mb-24 mt-4">
        <AnimatedSection>
          <h1 className="font-sans text-4xl md:text-[2.75rem] font-bold text-dark tracking-tight mb-4">
            Our Fleet
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Select the perfect vehicle for your journey, from premium sedans to spacious sprinter vans.
          </p>
        </AnimatedSection>
      </div>

      <div id="fleet-list" className="max-w-4xl mx-auto w-full space-y-12">
        {fleet.map((vehicle, index) => (
          <AnimatedSection key={index} delay={100} className="w-full">
            <div className="bg-white rounded-2xl md:rounded-[24px] shadow-sm border border-gray-100 overflow-hidden flex flex-col group">
              
              {/* Image Section */}
              <div className="w-full aspect-[4/3] md:aspect-[16/9] relative block overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${vehicle.imagePosition || 'object-center'}`}
                />
              </div>
              
              {/* Content Section */}
              <div className="p-6 md:p-10 flex flex-col">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <h2 className="text-2xl md:text-3xl font-bold font-sans text-dark tracking-tight">
                    {vehicle.category}
                  </h2>
                  <div className="flex items-center gap-4 text-gray-700 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-5 h-5" />
                      <span>{vehicle.passengers}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-5 h-5" />
                      <span>{vehicle.luggage}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed font-light">
                  {vehicle.desc}
                </p>

                <div className="mb-8">
                  <p className="text-gray-500 font-medium mb-3">Featuring</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="bg-[#F5F5F7] px-4 py-2.5 rounded-full flex items-center gap-2 text-sm text-dark font-medium whitespace-nowrap">
                      <Award className="w-4 h-4 text-dark" />
                      Licensed chauffeurs
                    </div>
                    <div className="bg-[#F5F5F7] px-4 py-2.5 rounded-full flex items-center gap-2 text-sm text-dark font-medium whitespace-nowrap">
                      <ShieldCheck className="w-4 h-4 text-dark" />
                      Interior sanitizing
                    </div>
                    <div className="bg-[#F5F5F7] px-4 py-2.5 rounded-full flex items-center gap-2 text-sm text-dark font-medium whitespace-nowrap">
                      <BatteryCharging className="w-4 h-4 text-dark" />
                      Cell phone charger
                    </div>
                  </div>
                </div>

                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  *Exact features may vary by vehicle. Luggage assist & Meet & Greet included. {vehicle.category.includes('Sprinter') ? 'Sprinter-style vehicles vary in exterior and interior configurations; actual vehicle may differ from reference photos.' : ''}
                </p>

                <div className="flex items-center gap-3 text-dark font-medium mb-8">
                  <Plane className="w-5 h-5" />
                  <span>60 min of complimentary waiting time</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 pt-8 items-center">
                  <div className="flex gap-4">
                    <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                      <Headset className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <p className="font-bold text-dark mb-0.5 tracking-tight">24/7 Support</p>
                      <p className="text-gray-600 text-sm">
                        +1 669 271 9105 & booking@miblane.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex md:justify-end">
                    <a
                      href="https://customer.moovs.app/mib-lane/new/info"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto bg-[#1A1A1A] hover:bg-dark text-white text-center font-bold font-sans py-4 px-10 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex justify-center items-center group/btn"
                    >
                      Book Now 
                      <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
      
    </div>
  );
}
