import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';

export function TermsConditions() {
  return (
    <div className="flex flex-col bg-white pt-32 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-3xl mx-auto w-full mt-10">
        <AnimatedSection>
          <div className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Legal
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-dark mb-12 tracking-tight">
            Terms and Conditions
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="space-y-8 text-graytext font-light text-sm leading-relaxed">
            
            <section>
              <h2 className="text-lg font-serif text-dark mb-3">1. Introduction</h2>
              <p className="mb-2">Welcome to MiBLane!</p>
              <p className="mb-2">
                These Terms and Conditions govern your use of our services and website, miblane.com, operated by MiB.
              </p>
              <p>
                Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard, and disclose information resulting from your web page use.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-serif text-dark mb-3">2. Booking and Reservations</h2>
              <div className="space-y-2 mt-2">
                <p><strong>2.1.</strong> All bookings are subject to availability and confirmation by the Company.</p>
                <p><strong>2.2.</strong> A full reservation fee is required to confirm your reservation.</p>
                <p><strong>2.3.</strong> Any changes to the booking must be made in writing and are subject to availability and possible additional charges.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-serif text-dark mb-3">3. Payment Terms</h2>
              <div className="space-y-2 mt-2">
                <p><strong>3.1.</strong> Payment can be made via the payment methods on our website.</p>
                <p><strong>3.2.</strong> Full payment must be received before the commencement of service.</p>
                <p><strong>3.3.</strong> All prices are subject to change without notice. Prices are inclusive/exclusive of taxes and optional gratuities.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-serif text-dark mb-3">4. Cancellations and Refunds</h2>
              <div className="space-y-2 mt-2">
                <p><strong>4.1.</strong> Cancellations made 1 day before the service date will be refunded 100% of the total booking cost.</p>
                <p><strong>4.2.</strong> Cancellations made within 6 hours of the service date will not be eligible for a refund.</p>
                <p><strong>4.3.</strong> The Company reserves the right to cancel the booking at any time due to unforeseen circumstances, in which case a full refund will be issued.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-serif text-dark mb-3">5. Passenger Conduct</h2>
              <div className="space-y-2 mt-2">
                <p><strong>5.1.</strong> Passengers must comply with all local laws and regulations during the service.</p>
                <p><strong>5.2.</strong> Smoking, consumption of alcohol, and use of illegal substances are strictly prohibited in the vehicle.</p>
                <p><strong>5.3.</strong> Passengers are responsible for any damage caused to the vehicle during the service.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-serif text-dark mb-3">6. Liability</h2>
              <div className="space-y-2 mt-2">
                <p><strong>6.1.</strong> The Company is not responsible for delays caused by traffic, weather, or any other circumstances beyond our control.</p>
              </div>
            </section>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
