import React, { useEffect, useRef } from 'react';

import WelcomeImg from './pexels-pavel-danilyuk-7594130.jpg';
import InteriorImg from './sprinterinterior.14.28.png';
import ChargerImg from './pexels-eddievaldes155-19871522.jpg';

const cards = [
  {
    title: "A welcome like no other",
    body: "The door is opened for you. Your luggage is stowed. Everything is taken care of.",
    image: WelcomeImg
  },
  {
    title: "You set the tone",
    body: "Sit back and relax. Music and temperature will be adjusted to your preferences.",
    image: InteriorImg
  },
  {
    title: "Recharge your batteries",
    body: "Stay connected on the go with universal chargers for iOS and Android.",
    image: ChargerImg
  }
];

export function StickyScrollCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      // the total scrollable distance
      const scrollDistance = containerRect.height - window.innerHeight;
      
      // Calculate how far we've scrolled within the container (0 to 1)
      let progress = -containerRect.top / scrollDistance;
      progress = Math.max(0, Math.min(1, progress));

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // the fraction of scroll allocated to each transition
        const totalCards = cards.length;
        const indexProgress = progress * (totalCards - 1); // 0 to 2
        
        let y = 0;
        let scale = 1;

        if (indexProgress < index - 1) {
          // Off screen bottom
          y = window.innerHeight;
        } else if (indexProgress < index) {
          // Sliding up
          const localProgress = index - indexProgress; // 1 to 0
          y = window.innerHeight * localProgress;
        } else {
          // Pinned, might scale down slightly
          const distanceOver = indexProgress - index; // 0 to max
          y = 0;
          scale = Math.max(0.9, 1 - distanceOver * 0.05);
        }

        // Card 0 doesn't slide from bottom, it is just there
        if (index === 0 && y > 0) {
           y = 0;
        }

        card.style.transform = `translateY(${y}px) scale(${scale})`;
      });

      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: '300vh' }} className="relative w-full">
      <div 
        ref={stickyRef}
        className="sticky top-0 w-full h-screen overflow-hidden bg-dark"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="absolute inset-0 w-full h-full will-change-transform rounded-lg overflow-hidden origin-top"
            style={{ 
              transform: index === 0 ? 'translateY(0) scale(1)' : 'translateY(100vh) scale(1)',
              boxShadow: index > 0 ? '0 -10px 40px rgba(0,0,0,0.3)' : 'none'
            }}
          >
            {/* Background Image */}
            <img 
              src={card.image} 
              alt={card.title}
              loading={index === 0 ? "eager" : "lazy"}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Text Box */}
            <div className="absolute bottom-10 left-5 md:bottom-16 md:left-12 max-w-[90%] md:max-w-[420px] bg-black/55 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="font-serif text-[1.2rem] md:text-[1.8rem] text-white mb-3 tracking-wide">
                {card.title}
              </h3>
              <p className="font-sans text-[0.9rem] md:text-[1rem] text-white/90 leading-[1.6] font-light">
                {card.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
