import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { SEO } from '../components/SEO';

// Image imports
import CadillacExecutiveImg from '../components/Cadillacexecutivesuv.27.09.png';
import GmcYukonImg from '../components/gmcyukonsuv.27.34.png';
import Bmw530Img from '../components/bmw530sedan.28.03.png';
import MercedesSedanImg from '../components/mercedessedan.28.24.png';
import SprinterImg from '../components/sprinter.29.16.png';

const fleet = [
  {
    category: "Executive SUV",
    name: "Cadillac Escalade Platinum Sport",
    desc: "The pinnacle of luxury and space. Perfect for executive travel or premium airport transfers.",
    image: CadillacExecutiveImg,
  },
  {
    category: "SUV",
    name: "GMC Yukon",
    desc: "A bold and spacious option combining sophisticated design with premium comfort for group travel.",
    image: GmcYukonImg,
  },
  {
    category: "Sedan",
    name: "BMW 530",
    desc: "Elegant, dynamic, and refined. Ideal for corporate transportation and stylish city navigation.",
    image: Bmw530Img,
  },
  {
    category: "Sedan",
    name: "Mercedes Benz E 350",
    desc: "A masterclass in comfort and class. The perfect choice for standard executive trips.",
    image: MercedesSedanImg,
  },
  {
    category: "Sprinter",
    name: "Mercedes Sprinter",
    desc: "Generous seating and ample headroom for group outings, wine tours, or corporate events.",
    image: SprinterImg,
  }
];

export function Fleet() {
  return (
    <div className="flex flex-col bg-[#161616] pt-32 pb-24 px-6 md:px-12 min-h-screen overflow-hidden">
      <SEO 
        title="Our Fleet | Luxury Vehicles — MiBLane Bay Area"
        description="Explore MiBLane's premium fleet including the Cadillac Escalade Platinum Sport, GMC Yukon, BMW 530, Mercedes Benz E 350, and Mercedes Sprinter. Contact for special pricing."
        keywords="Cadillac Escalade limo Bay Area, luxury SUV rental San Francisco, Mercedes Sprinter hire Bay Area, BMW sedan chauffeur, executive fleet San Francisco, luxury vehicle rental Bay Area"
        url="https://miblane.com/fleet"
      />
      
      <div className="max-w-7xl mx-auto w-full text-center mb-20 md:mb-32 mt-10">
        <AnimatedSection>
          <h1 className="font-serif text-4xl md:text-5xl text-white uppercase tracking-widest mb-6">
            Our Fleet
          </h1>
        </AnimatedSection>
      </div>

      <div className="max-w-6xl mx-auto w-full space-y-24 md:space-y-40">
        {fleet.map((vehicle, index) => (
          <AnimatedSection key={index} delay={100} className="w-full">
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
              
              <div className="w-full md:w-1/2 flex justify-center shrink-0">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full max-w-[600px] h-auto object-contain hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
                <h2 className="text-xl md:text-2xl text-white mb-4 tracking-wide font-light">
                  {vehicle.category}
                </h2>
                <p className="text-gray-400 text-sm md:text-base mb-10 font-light tracking-wide">
                  {vehicle.name}
                </p>
                
                <Link 
                  to="/contact"
                  className="inline-block bg-[#d8dce2] text-[#111] hover:bg-white transition-colors duration-300 px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-none"
                >
                  Contact for Special Pricing
                </Link>
              </div>

            </div>
          </AnimatedSection>
        ))}
      </div>
      
    </div>
  );
}
