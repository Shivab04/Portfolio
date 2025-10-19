import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const navObserver = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize AOS (Animate On Scroll) library
    import('aos').then((AOS) => {
      AOS.default.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        delay: 100,
        disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      });
    });

    const sections = Array.from(document.querySelectorAll('main section'));
    
    // Observer for nav highlighting
    navObserver.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.1, rootMargin: "-30% 0px -70% 0px" });

    sections.forEach(section => {
      if(navObserver.current) {
        navObserver.current.observe(section);
      }
    });

    // Observer for custom animations
    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        animationObserver.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if(navObserver.current) {
          navObserver.current.unobserve(section);
        }
        animationObserver.unobserve(section);
      });
    };
  }, []);

  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Set loading state and trigger animations
    setIsLoaded(true);
    
    // Add page-loaded class to body for CSS animations
    document.body.classList.add('page-loaded');
    
    // Check for reduced motion preference for accessibility
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // For accessibility, just ensure content is visible
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.transform = 'none';
        }
      }, 100);
      return;
    }
    
    // Animate content section after header animations
    import('gsap').then(({ gsap }) => {
      // 7. Right Section Content Animation - Fade in and slide from right
      gsap.to(contentRef.current, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        delay: 1, // Start 1s after page load
      });
    }).catch((error) => {
      // Fallback: content is already visible, just ensure transforms are reset
      console.log('GSAP failed to load in App, using fallback:', error);
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.transform = 'none';
        }
      }, 100);
    });
  }, []);

  return (
    <div className={`mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 ${isLoaded ? 'page-loaded' : 'page-loading'}`}>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header activeSection={activeSection} />
        <main 
          id="content" 
          ref={contentRef}
          className="pt-24 lg:w-1/2 lg:py-24"
          style={{ 
            opacity: 1, // Always visible
            transform: 'translateX(50px)' // Will be animated to 0
          }}
        >
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;