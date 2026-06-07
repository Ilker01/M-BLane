import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function CookiePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a short delay if not already accepted/customized
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleCustomize = () => {
    // In a real app this would open privacy settings
    localStorage.setItem('cookieConsent', 'customized');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <React.Fragment>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-[9998]"
            onClick={handleCustomize} // Optional: clicking overlay doesn't have to close, but let's keep it safe
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-[9999] p-4 outline-none"
          >
            <div className="bg-[#111] border border-[#222] rounded-xl shadow-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">We value your privacy</h2>
              <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                We use cookies to enhance your browsing experience, serve
                personalized ads or content, and analyze our traffic. By clicking "Accept
                All", you consent to our use of cookies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleCustomize}
                  className="flex-1 py-3 px-6 rounded border border-gray-600 hover:bg-gray-800 transition-colors font-medium text-sm"
                >
                  Customize
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 py-3 px-6 rounded bg-[#1e58d6] hover:bg-[#1848b3] transition-colors font-medium text-sm text-white"
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
}
