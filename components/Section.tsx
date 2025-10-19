import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section 
      id={id} 
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 fade-in-section" 
      aria-label={title}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="100"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">{title}</h2>
      </div>
      <div data-aos="fade-up" data-aos-delay="200">{children}</div>
    </section>
  );
};

export default Section;