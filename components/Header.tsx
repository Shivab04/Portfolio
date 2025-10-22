import React, { useEffect, useRef } from 'react';
import Hero from './Hero';
import { PERSONAL_INFO } from '../constants';
import { LinkedInIcon, GithubIcon, EmailIcon, PhoneIcon } from './icons/Icons';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive }) => {
    const activeClasses = isActive ? 'w-16 bg-white' : 'w-8 bg-gray-600';
    const activeTextClasses = isActive ? 'text-white' : 'text-gray-500';

    return (
    <li className="nav-item">
        <a className="group flex items-center py-3 hover:scale-105 transition-transform duration-300" href={href}>
            <span className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-white group-focus-visible:w-16 group-focus-visible:bg-white motion-reduce:transition-none ${activeClasses}`}></span>
            <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-white group-focus-visible:text-white ${activeTextClasses}`}>
                {children}
            </span>
        </a>
    </li>
)};

const Header: React.FC<{ activeSection: string }> = ({ activeSection }) => {
    const navRef = useRef<HTMLUListElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const socialRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        // Check for reduced motion preference for accessibility
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            return;
        }

        // Try to enhance with animations, but don't block content if it fails
        import('gsap').then(({ gsap }) => {
            const tl = gsap.timeline({ delay: 2.5 });

            // Navigation animation
            const navItems = navRef.current?.querySelectorAll('li');
            if (navItems && navItems.length > 0) {
                tl.to(navItems, {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                });
            }

            // Button animation
            tl.to(buttonRef.current, {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: "back.out(1.7)",
            }, "-=0.3");

            // Social icons animation
            const socialItems = socialRef.current?.querySelectorAll('li');
            if (socialItems && socialItems.length > 0) {
                tl.to(socialItems, {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "elastic.out(1, 0.3)",
                    stagger: 0.15,
                }, "-=0.2");
            }

        }).catch((error) => {
            // GSAP failed, but content is already visible - no problem!
            console.log('GSAP animation failed in Header, but content is visible:', error);
        });
    }, []);

    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <Hero />
                {/* Navigation Menu with Slide-in Animation */}
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul
                        ref={navRef}
                        className="mt-16 w-max"
                        style={{ opacity: 1 }} // Always visible
                    >
                        <NavLink href="#about" isActive={activeSection === 'about'}>About</NavLink>
                        <NavLink href="#experience" isActive={activeSection === 'experience'}>Experience</NavLink>
                        <NavLink href="#projects" isActive={activeSection === 'projects'}>Projects</NavLink>
                        <NavLink href="#skills" isActive={activeSection === 'skills'}>Skills</NavLink>
                    </ul>
                </nav>
            </div>
             <div>
                {/* Resume Button with Pop Animation */}
                <a
                    ref={buttonRef}
                    className="inline-block rounded-md bg-white px-5 py-3 text-sm font-medium text-black shadow-sm transition-all duration-300 hover:bg-gray-200 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black mt-8 btn-hover resume-button"
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View my resume (opens in a new tab)"
                    style={{
                        opacity: 1, // Always visible
                        transform: 'scale(0.8)' // Will be animated to 1
                    }}
                >
                    View Full Résumé
                </a>

                {/* Social Icons - Always visible */}
                <ul ref={socialRef} className="ml-1 mt-8 flex items-center" aria-label="Social media">
                    <li 
                        className="mr-5 shrink-0 social-icon"
                        style={{ 
                            opacity: 1,
                            transform: 'translateY(-50px)' // Will be animated to 0 if GSAP works
                        }}
                    >
                        <a 
                            className="block hover:text-white transition-colors duration-300 hover:scale-110" 
                            href={PERSONAL_INFO.contact.linkedin} 
                            target="_blank" 
                            rel="noreferrer noopener" 
                            aria-label="LinkedIn (opens in a new tab)"
                        >
                            <span className="sr-only">LinkedIn</span>
                            <LinkedInIcon />
                        </a>
                    </li>
                    <li 
                        className="mr-5 shrink-0 social-icon"
                        style={{ 
                            opacity: 1,
                            transform: 'translateY(-50px)' // Will be animated to 0 if GSAP works
                        }}
                    >
                        <a 
                            className="block hover:text-white transition-colors duration-300 hover:scale-110" 
                            href={PERSONAL_INFO.contact.github} 
                            target="_blank" 
                            rel="noreferrer noopener" 
                            aria-label="GitHub (opens in a new tab)"
                        >
                            <span className="sr-only">GitHub</span>
                            <GithubIcon />
                        </a>
                    </li>
                     <li 
                        className="mr-5 shrink-0 social-icon"
                        style={{ 
                            opacity: 1,
                            transform: 'translateY(-50px)' // Will be animated to 0 if GSAP works
                        }}
                    >
                        <a 
                            className="block hover:text-white transition-colors duration-300 hover:scale-110" 
                            href={`mailto:${PERSONAL_INFO.contact.email}`} 
                            aria-label="Email"
                        >
                            <span className="sr-only">Email</span>
                            <EmailIcon />
                        </a>
                    </li>
                    <li 
                        className="mr-5 shrink-0 social-icon"
                        style={{ 
                            opacity: 1,
                            transform: 'translateY(-50px)' // Will be animated to 0 if GSAP works
                        }}
                    >
                        <a 
                            className="block hover:text-white transition-colors duration-300 hover:scale-110" 
                            href={`tel:${PERSONAL_INFO.contact.phone}`} 
                            aria-label="Phone"
                        >
                            <span className="sr-only">Phone</span>
                            <PhoneIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;