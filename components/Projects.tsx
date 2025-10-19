import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { ExternalLinkIcon } from './icons/Icons';
import type { Project as ProjectType } from '../types';

const ProjectCard: React.FC<{ item: ProjectType }> = ({ item }) => (
  <li className="mb-12" data-aos="fade-up" data-aos-delay="200">
    <div className="group relative grid gap-4 pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 card-hover">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-900/75 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          {item.link ? (
            <a
              className="inline-flex items-baseline font-medium leading-tight text-white hover:text-gray-300 focus-visible:text-gray-300 group/link text-base transition-colors duration-300"
              href={item.link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${item.title} (opens in a new tab)`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {item.title}
                <ExternalLinkIcon className="ml-1 inline-block h-4 w-4 shrink-0" />
              </span>
            </a>
          ) : (
            <span className="font-medium text-white text-base">{item.title}</span>
          )}
        </h3>
        {item.description.map((desc, i) => (
             <p key={i} className="mt-2 text-sm leading-normal">{desc}</p>
        ))}
      </div>
      <div className="z-10 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2" aria-label={item.date}>{item.date}</div>
    </div>
  </li>
);

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      <ul className="group/list">
        {PROJECTS.map((proj, index) => (
          <ProjectCard key={index} item={proj} />
        ))}
      </ul>
    </Section>
  );
};

export default Projects;