import React from 'react';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';
import type { SkillCategory } from '../types';

const SkillBadge: React.FC<{ name: string; index: number }> = ({ name, index }) => (
    <li 
        className="mr-1.5 mt-2" 
        data-aos="fade-up" 
        data-aos-delay={100 + (index * 50)}
    >
        <div className="flex items-center rounded-full bg-gray-800 px-3 py-1 text-xs font-medium leading-5 text-gray-300 transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:text-white cursor-default">
            {name}
        </div>
    </li>
);

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      {SKILL_CATEGORIES.map((category: SkillCategory, index: number) => (
        <div key={index} className="mb-6" data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
          <h3 className="font-bold text-white mb-2">{category.name}</h3>
          <ul className="flex flex-wrap">
            {category.skills.map((skill, skillIndex) => (
              <SkillBadge key={skillIndex} name={skill} index={skillIndex} />
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
};

export default Skills;