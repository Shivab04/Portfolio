import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { EmailIcon } from './icons/Icons';

const Contact: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const handleContactClick = async () => {
        try {
            // Try to copy email to clipboard
            await navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            // Fallback: show contact info in alert
            alert(`Contact Information:\n\nEmail: ${PERSONAL_INFO.contact.email}\nPhone: ${PERSONAL_INFO.contact.phone}\n\nName: Shiva Billakanti`);
        }
    };

    return (
        <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 fade-in-section" aria-label="Contact">
             <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">Contact</h2>
            </div>
            <p className="mt-4">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
            </p>
            <div className="mt-6">
                 <button 
                    className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-medium text-black shadow-sm transition-all duration-300 hover:bg-gray-200 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black btn-hover" 
                    onClick={handleContactClick}
                    data-aos="zoom-in"
                    data-aos-delay="300"
                >
                    <EmailIcon className="mr-2 h-5 w-5" />
                    {copied ? 'Email Copied!' : 'Get In Touch'}
                </button>
            </div>

            <div className="mt-8 text-sm text-gray-400">
                <p>Contact Information:</p>
                <div className="mt-2 flex flex-col items-start gap-1">
                    <div className="font-medium text-gray-300">
                        <strong>Name:</strong> Shiva Billakanti
                    </div>
                    <a href={`mailto:${PERSONAL_INFO.contact.email}?subject=Let's Connect`} className="font-medium text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                        <strong>Email:</strong> {PERSONAL_INFO.contact.email}
                    </a>
                    <a href={`tel:${PERSONAL_INFO.contact.phone}`} className="font-medium text-gray-300 hover:text-white">
                        <strong>Phone:</strong> {PERSONAL_INFO.contact.phone}
                    </a>
                </div>
            </div>
            
        </section>
    );
};

export default Contact;