import React from 'react';
import Section from './Section';
import { EXPERIENCES } from '../constants';
import { ExternalLinkIcon } from './icons/Icons';
import type { Experience as ExperienceType } from '../types';

const ExperienceCard: React.FC<{ item: ExperienceType }> = ({ item }) => (
  <li className="mb-12" data-aos="fade-up" data-aos-delay="200">
    <div className="group relative grid pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 card-hover">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-900/75 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2" aria-label={item.date}>{item.date}</header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-white">
          <div>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-white hover:text-gray-300 focus-visible:text-gray-300 group/link text-base transition-colors duration-300"
              href={item.companyLink}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${item.role} at ${item.company} (opens in a new tab)`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>{item.role} · <span className="inline-block">{item.company}</span></span>
               <ExternalLinkIcon className="ml-1" />
            </a>
          </div>
        </h3>
        <ul className="mt-2 list-disc list-inside text-sm">
          {item.tasks.map((task, index) => (
            <li key={index} className="mt-2">{task}</li>
          ))}
        </ul>
      </div>
    </div>
  </li>
);

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <ol className="group/list">
        {EXPERIENCES.map((exp, index) => (
          <ExperienceCard key={index} item={exp} />
        ))}
      </ol>
    </Section>
  );
};

export default Experience;