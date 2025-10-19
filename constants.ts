import { Experience, Project, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: 'Shiva Billakanti',
  title: 'Full Stack Developer',
  summary: 'Results-oriented Full Stack Developer skilled in building scalable, production-ready web applications using React.js, Node.js, and Python. Demonstrated success in delivering end-to-end solutions for global clients, improving application performance and user engagement. Adept at collaborating in agile environments and contributing to innovative AI-driven products that enhance business value and customer experience.',
  contact: {
    phone: '+91 9000176036',
    email: 'billakantishiva4@gmail.com',
    linkedin: 'https://www.linkedin.com/feed/',
    portfolio: 'https://shivab04.github.io/beyondchats/',
    github: 'https://github.com/Shivab04',
  }
};

export const EXPERIENCES: Experience[] = [
  {
    role: 'Data Associate Engineer',
    company: 'Amazon',
    companyLink: 'https://www.amazon.com/',
    location: 'Hyderabad, India',
    date: 'Jul 2024 – Oct 2024',
    tasks: [
      'Processed large multimodal datasets (text, image, audio, video) to enhance AI model accuracy.',
      'Delivered high-quality labeled data adhering to stringent KPIs, improving data pipeline efficiency.',
      'Conducted root cause analysis and quality audits to reduce error rates by identifying key error patterns.',
      'Proposed process and tooling improvements that streamlined annotation workflows.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Beyond',
    link: 'https://shivab04.github.io/beyondchats/',
    date: 'Oct 2024 – Present',
    description: [
      'Designed and developed a conversational AI web interface integrating LLMs for real-time Q&A.',
      'Implemented dynamic chat UI using React.js, API integration for backend communication, and user session management.',
      'Enhanced response accuracy and UX by optimizing frontend-backend API flow.'
    ]
  },
  {
    title: 'One Legacy (Australia)',
    link: 'https://onelegacyitf.com/',
    date: 'Jan 2024 – Apr 2024',
    description: [
      'Built a responsive and SEO-optimized landing page using React.js.',
      'Integrated payment gateway, certificate generation, and user tracking modules using Node.js and Python.'
    ]
  },
  {
    title: 'Manpower Placing (HYD)',
    link: 'https://www.manpowerplacing.com/',
    date: 'May 2024 – Jun 2024',
    description: [
      'Developed resume builder and job scheduling modules using Node.js.',
      'Created reusable React components for an interactive front-end experience.'
    ]
  },
   {
    title: 'Palm Beach Resorts (Saudi Arabia)',
    link: 'https://palmbeach.com.sa/',
    date: 'Nov 2024',
    description: [
      'Enhanced the resort’s landing page and implemented query submission forms using Node.js.'
    ]
  },
  {
    title: 'Bridger IT Solutions (HYD)',
    link: 'https://bridgerits.com/',
    date: 'May 2024',
    description: [
        'Created a dynamic corporate landing page with responsive design using React.js.'
    ]
  },
   {
    title: 'Sentence Classification using CNN',
    date: 'Sep 2022 – May 2023',
    description: [
      'Designed a CNN-based NLP model to classify sentences into categories using supervised learning.',
      'Optimized parameters for improved accuracy on labeled training datasets.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        name: 'Programming & Databases',
        skills: ['React.js', 'Node.js', 'Python', 'JavaScript', 'HTML5', 'CSS3', 'Express.js', 'Flask', 'RESTful API design', 'SQL', 'NoSQL (MongoDB basics)', 'Database Modeling']
    },
    {
        name: 'Cloud & DevOps',
        skills: ['Azure', 'Docker', 'Git', 'GitHub', 'CI/CD Workflows', 'Containerization', 'Serverless Architecture', 'Microservices', 'Networking', 'Basic Cloud Architecture']
    },
    {
        name: 'AI / LLMs & Tools',
        skills: ['Prompt Engineering', 'LLM API Integration', 'OpenAI GPT-4/5', 'ChatGPT', 'Claude', 'Perplexity.ai', 'Cursor AI', 'Bolt.new', 'Windsurf']
    },
    {
        name: 'AI Ops & Automation',
        skills: ['Data Labeling', 'Model Evaluation', 'Workflow Automation', 'Zapier', 'n8n']
    },
    {
        name: 'Project Management',
        skills: ['Agile/Scrum', 'Cross-functional Collaboration']
    }
];