import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';

export function PrivacyPolicy() {
  return (
    <div className="flex flex-col bg-white pt-32 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-3xl mx-auto w-full mt-10">
        <AnimatedSection>
          <div className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Legal
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-dark mb-12 tracking-tight">
            Privacy Policy
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="space-y-8 text-graytext font-light text-sm leading-relaxed">
            
            <section>
              <h2 className="text-lg font-serif text-dark mb-3">1. Introduction</h2>
              <p>
                Welcome to MiBLane. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website miblane.com and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-serif text-dark mb-3">2. Information We Collect</h2>
              <p className="mb-2">We may collect the following types of information from you:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, address, payment information, and any other information you provide when booking our services.</li>
                <li><strong>Usage Data:</strong> Information about your interactions with our website, including IP address, browser type, operating system, pages viewed, and the dates/times of your visits.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-serif text-dark mb-3">3. How We Use Your Information</h2>
              <p className="mb-2">We use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To provide and maintain our services.</li>
                <li>To process your bookings and payments.</li>
                <li>To communicate with you regarding your bookings, inquiries, and other requests.</li>
                <li>To improve our website, services, and customer experience.</li>
                <li>To send you promotional materials and updates (you may opt-out at any time).</li>
                <li>To comply with legal obligations and protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-serif text-dark mb-3">4. Sharing Your Information</h2>
              <p className="mb-2">We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating our website, processing payments, and providing our services.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-serif text-dark mb-3">5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet or electronic storage method is completely secure, so we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-serif text-dark mb-3">6. Your Rights</h2>
              <p className="mb-2">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
                <li><strong>Correction:</strong> You can request that we correct any inaccurate or incomplete information.</li>
                <li><strong>Deletion:</strong> You can request that we delete your personal information, subject to certain legal obligations.</li>
                <li><strong>Opt-Out:</strong> You can opt-out of receiving promotional communications from us by following the unsubscribe instructions provided in the emails.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-serif text-dark mb-3">7. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-serif text-dark mb-3">8. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have inadvertently collected such information, we will take steps to delete it.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-serif text-dark mb-3">9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any significant changes by posting the new Privacy Policy on our website and updating the effective date.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-serif text-dark mb-3">10. Contact Us</h2>
              <p className="mb-2">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
              <p>
                Email: <a href="mailto:booking@miblane.com" className="text-gold hover:underline">booking@miblane.com</a>
              </p>
            </section>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
