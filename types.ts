
export interface Experience {
  role: string;
  company: string;
  companyLink: string;
  location: string;
  date: string;
  tasks: string[];
}

export interface Project {
  title: string;
  link?: string;
  description: string[];
  date: string;
}

export interface SkillCategory {
    name: string;
    skills: string[];
}
