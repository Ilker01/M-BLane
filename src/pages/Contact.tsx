import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { SEO } from '../components/SEO';

export function Contact() {
  return (
    <div className="flex flex-col bg-white pt-32 pb-24 px-6 md:px-12 min-h-screen">
      <SEO 
        title="Contact Us | MiBLane — South San Francisco, CA"
        description="Get in touch with MiBLane. Call +1 669 271 9105 or email booking@miblane.com. Located at 225 Cuesta Drive, South San Francisco, CA 94080. Available 24/7."
        keywords="contact MiBLane, limo service contact San Francisco, luxury transportation South San Francisco, MiBLane phone number, chauffeur service contact Bay Area"
        url="https://miblane.com/contact"
      />
      <div className="max-w-7xl mx-auto w-full mb-20 text-center mt-10">
        <AnimatedSection>
           <p className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Connect</p>
          <h1 className="font-serif text-4xl md:text-6xl text-dark mb-4">
            Get In Touch
          </h1>
          <p className="text-graytext font-light text-base max-w-xl mx-auto">
            We are here to assist you 24/7 with any inquiries, bespoke travel plans, or special requests.
          </p>
        </AnimatedSection>
      </div>

      <div className="max-w-4xl mx-auto w-full gap-16 lg:gap-24">
        
        {/* Contact Info & Map */}
        <div className="space-y-12">
          <AnimatedSection delay={100} className="bg-cream p-10 md:p-14 rounded-sm border border-gray-200/50">
            <h3 className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-10">Information</h3>
            <ul className="space-y-8 text-dark text-sm">
              <li className="flex flex-col">
                <span className="text-gray-400 text-[9px] uppercase tracking-widest mb-2">Address</span>
                <span className="font-medium">225 Cuesta Drive<br/>South San Francisco, CA 94080</span>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-400 text-[9px] uppercase tracking-widest mb-2">Phone</span>
                <a href="tel:+16692719105" className="font-serif text-2xl hover:text-gold transition-colors">+1 669 271 9105</a>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-400 text-[9px] uppercase tracking-widest mb-2">Email</span>
                <a href="mailto:booking@miblane.com" className="font-medium hover:text-gold transition-colors">booking@miblane.com</a>
              </li>
              <li className="flex flex-col pt-4 border-t border-gray-200">
                <span className="text-gray-400 text-[9px] uppercase tracking-widest mb-2">Hours</span>
                <span className="font-medium">Available 24/7</span>
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={200} className="w-full h-96 bg-gray-200 rounded-sm overflow-hidden relative border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.625471415053!2d-122.4172403!3d37.6534571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7aa95804ee9d%3A0xe54e6fc2ce44be2!2s225%20Cuesta%20Dr%2C%20South%20San%20Francisco%2C%20CA%2094080!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="MiBLane Location Google Map"
            />
          </AnimatedSection>
        </div>

      </div>
    </div>
  );
}
