import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import { Users, Briefcase, Award, ShieldCheck, BatteryCharging, Plane, Headset, ChevronLeft, ChevronRight } from 'lucide-react';

// Image imports
import ServicesCadillac from '../components/newourfirstclassuv.jpg';
import ServicesGMC from '../components/newourpremiumsuv.jpg';
import ServicesFirstClassSedan from '../components/newourfirstclass.png';
import ServicesMercedes from '../components/newourpremiumsedan.jpg';
import InteriorPremiumSUV from '../components/interiorpremiumsuv.png';
import ServicesSprinter from '../components/servicessprinter.jpg';
import InteriorSprinter from '../components/interiorsprinter.22.13.png';

function VehicleImageGallery({ images, name, imagePosition }: { images: string[], name: string, imagePosition?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length <= 1) {
    return (
      <img
        src={images[0]}
        alt={name}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${imagePosition || 'object-center'}`}
      />
    );
  }

  return (
    <>
      <img
        src={images[currentIndex]}
        alt={`${name} view ${currentIndex + 1}`}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${imagePosition || 'object-center'}`}
      />
      <button 
        onClick={(e) => { e.preventDefault(); setCurrentIndex((prev) => (prev - 1 + images.length) % images.length); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-dark shadow-md hover:bg-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={(e) => { e.preventDefault(); setCurrentIndex((prev) => (prev + 1) % images.length); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-dark shadow-md hover:bg-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div key={i} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentIndex ? 'bg-white' : 'bg-white/50'}`} />
        ))}
      </div>
    </>
  );
}

const fleet = [
  {
    category: "First Class SUV",
    name: "Cadillac Escalade Platinum Sport",
    desc: "Upgraded comfort for 2 to 6 passengers. The pinnacle of luxury and space. Perfect for executive travel or premium airport transfers.",
    passengers: "2-6",
    luggage: "2-5",
    image: ServicesCadillac,
    images: [ServicesCadillac, InteriorPremiumSUV],
  },
  {
    category: "Premium SUV",
    name: "GMC Yukon",
    desc: "A bold and spacious option combining sophisticated design with premium comfort for group travel.",
    passengers: "2-6",
    luggage: "2-6",
    image: ServicesGMC,
    images: [ServicesGMC, InteriorPremiumSUV],
  },
  {
    category: "First class sedan",
    name: "Mercedes S-Class / BMW 7 Series",
    desc: "Experience ultimate luxury and comfort with our top-tier sedans. The ideal choice for VIP executive trips and special occasions.",
    passengers: "2",
    luggage: "2",
    image: ServicesFirstClassSedan,
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
    images: [ServicesSprinter, InteriorSprinter],
    imagePosition: "object-bottom"
  }
];

export function Fleet() {
  return (
    <div className="flex flex-col bg-[#F9F9F9] pt-48 pb-24 px-4 sm:px-6 md:px-12 min-h-screen overflow-hidden">
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
                <VehicleImageGallery 
                  images={vehicle.images || [vehicle.image]} 
                  name={vehicle.name}
                  imagePosition={vehicle.imagePosition}
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
                        +1 (650) 580-5650 & booking@miblane.com
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
