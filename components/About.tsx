
import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" title="About">
      <p className="mb-4">
        {PERSONAL_INFO.summary}
      </p>
    </Section>
  );
};

export default About;
