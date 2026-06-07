import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatedSection } from '../components/AnimatedSection';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import NapaValley from '../components/napa valley.jpg';

const MOOVS_URL = "https://customer.moovs.app/mib-lane/new/info";

export function About() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-[120px] pb-24">
      <Helmet>
        <title>About Us | MiBLane Premium Chauffeur Service</title>
        <meta name="description" content="Discover MiBLane. We provide safe, luxurious, and reliable transportation across the San Francisco Bay Area and beyond." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="flex items-center gap-2 text-[15px] text-gray-500 mb-12 font-medium">
            <Link to="/" className="hover:text-dark transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-dark">About us</span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection delay={100}>
            <div className="max-w-xl pr-4">
              <h1 className="text-4xl lg:text-[2.5rem] font-bold text-dark mb-8 leading-tight tracking-tight font-sans">
                Rooted in San Francisco. Elevating travel everywhere.
              </h1>
              
              <div className="space-y-6 text-[1.15rem] leading-relaxed text-[#111111] font-medium">
                <p>
                  MiBLane was founded on a core commitment: offering a safe start to a safe journey. We have grown into a trusted luxury transportation partner for the Bay Area's professionals, families, and global visitors.
                </p>
                
                <p>
                  Whether you are flying out of SFO, rolling up to an executive meeting, or planning a scenic getaway to Napa Valley — we make it effortless to reserve a premium vehicle with a professional chauffeur. No stress, no surprises, just a flawless ride.
                </p>

                <p className="text-dark italic font-semibold text-[1.25rem]">
                  We deliver more than just a destination.
                </p>

                <p>
                  We are here to elevate your travel experience, providing uncompromised comfort, punctuality, and discretion. From our pristine fleet to our vetted chauffeurs, every detail is tailored for excellence.
                </p>

                <div className="pt-2 space-y-1">
                  <p className="font-bold text-dark italic text-[1.25rem]">A safe start to a safe journey.</p>
                  <p className="font-bold text-dark italic text-[1.25rem]">For your comfort. For your peace of mind.</p>
                </div>

                <div className="pt-8">
                  <a 
                    href={MOOVS_URL}
                    className="inline-flex items-center px-8 py-4 bg-dark text-gold rounded-xl font-bold hover:bg-black transition-all transform hover:scale-105"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} className="relative h-[600px] lg:h-[700px] mt-8 lg:mt-0">
            <div className="absolute inset-0 rounded-[24px] overflow-hidden">
              <img 
                src={NapaValley} 
                alt="MiBLane Luxury Experience" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
