/**
 * HERO COMPONENT - RELIABLE WITH ENHANCED ANIMATIONS
 * 
 * This component ensures content is ALWAYS visible while providing
 * enhanced animations when GSAP is available.
 */

import React, { useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Check for reduced motion preference for accessibility
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // For accessibility, just ensure content is visible
      return;
    }

    // Try to enhance with animations, but don't block content if it fails
    import('gsap').then(({ gsap }) => {
      const tl = gsap.timeline({ delay: 0.5 });

      // Simple name animation - animate the whole title instead of individual characters
      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      });

      // Tagline animation
      tl.to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.3");

      // Description animation
      tl.to(descriptionRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      }, "-=0.5");

    }).catch((error) => {
      // GSAP failed, but content is already visible - no problem!
      console.log('GSAP animation failed, but content is visible:', error);
    });
  }, []);

  return (
    <div ref={heroRef} className="hero-entrance">
      {/* Hero Name - Simple and reliable */}
      <h1 
        ref={titleRef}
        className="text-4xl font-bold tracking-tight text-white sm:text-5xl gradient-text"
        style={{ 
          opacity: 1,
          transform: 'translateY(-20px)' // Will be animated to 0 if GSAP works
        }}
      >
        <a href="/" className="hover:text-gray-300 transition-colors duration-300">
          {PERSONAL_INFO.name}
        </a>
      </h1>
      
      {/* Tagline */}
      <h2 
        ref={subtitleRef}
        className="mt-3 text-lg font-medium tracking-tight text-white sm:text-xl"
        style={{ 
          opacity: 1,
          transform: 'translateY(30px)' // Will be animated to 0 if GSAP works
        }}
      >
        {PERSONAL_INFO.title}
      </h2>
      
      {/* Description */}
      <p 
        ref={descriptionRef}
        className="mt-4 max-w-xs leading-normal text-gray-300"
        style={{ 
          opacity: 1,
          transform: 'translateY(20px)' // Will be animated to 0 if GSAP works
        }}
      >
        I build accessible, inclusive products and digital experiences for the web.
      </p>
    </div>
  );
};

export default Hero;