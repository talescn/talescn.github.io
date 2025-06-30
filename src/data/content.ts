import { NavItem, Skill, Project, SocialLink, Experience, Education } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const skills: Skill[] = [
  // Programming
  { name: 'Python', category: 'programming', icon: 'Code' },
  { name: 'SQL', category: 'programming', icon: 'Database' },
  { name: 'NoSQL', category: 'programming', icon: 'HardDrive' },
  
  // Data Science
  { name: 'Machine Learning', category: 'data', icon: 'Brain' },
  { name: 'Data Visualization', category: 'data', icon: 'PieChart' },
  { name: 'Statistical Analysis', category: 'data', icon: 'TrendingUp' },
  { name: 'Deep Learning', category: 'data', icon: 'Zap' },
  { name: 'Natural Language Processing', category: 'data', icon: 'MessageSquare' },
  { name: 'Computer Vision', category: 'data', icon: 'Eye' },
  
  // Tools & Libraries
  { name: 'Pandas', category: 'tools', icon: 'Table' },
  { name: 'Power BI', category: 'tools', icon: 'Activity' },
  { name: 'Git', category: 'tools', icon: 'GitBranch' },
  { name: 'GitHub', category: 'tools', icon: 'Github' },
  { name: 'Docker', category: 'tools', icon: 'Package' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sales Data Analysis – Olist Dataset',
    description: 'Análise exploratória do conjunto de dados de e-commerce brasileiro (Olist), com visualizações interativas sobre comportamento de compra, entregas e avaliação de clientes.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'Pandas', 'Seaborn/Matplotlib', 'Exploratory Data Analysis'],
    githubUrl: 'https://github.com/talescn',
    category: 'data',
    featured: true,
  },
  {
    id: 2,
    title: 'Customer Support Audio Assistant',
    description: 'Sistema inteligente que escuta o áudio de vendedores em tempo real e sugere falas com base em IA, utilizando técnicas de NLP e geração de texto.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'OpenAI API', 'Real-Time Audio', 'Speech Recognition', 'IA'],
    githubUrl: 'https://github.com/talescn',
    category: 'ai',
    featured: true,
  },
  {
    id: 3,
    title: 'Teacher Allocation System',
    description: 'Developed a desktop application in Python using Tkinter to automate the allocation of teachers to academic courses, considering schedule availability, teaching modality, and lab requirements.',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'Tkinter', 'JSON/CSV Export', 'GUI Application', 'Scheduling Algorithm'],
    githubUrl: 'https://github.com/talescn',
    category: 'automation',
    featured: true,
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/tales-noronha',
    icon: 'Linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/talescn',
    icon: 'Github',
  },
  {
    name: 'Email',
    url: 'mailto:talesnoronha40@gmail.com',
    icon: 'Mail',
  },
  {
    name: 'Phone',
    url: 'tel:+5511999446511',
    icon: 'Phone',
  },
];

export const experiences: Experience[] = [
  {
    title: 'Data Analyst Intern',
    company: 'ABC Analytics',
    period: 'Jan 2023 - Present',
    description: 'Analyzing customer data to identify trends and patterns. Creating data visualizations and reports for stakeholders. Collaborating with cross-functional teams to improve data-driven decision making.',
    skills: ['Python', 'SQL', 'Tableau', 'Data Analysis'],
  },
  {
    title: 'Research Assistant',
    company: 'University Research Lab',
    period: 'Aug 2022 - Dec 2022',
    description: 'Assisted in data collection and analysis for research projects. Implemented statistical models using R and Python. Presented findings at department seminars.',
    skills: ['R', 'Statistical Analysis', 'Research', 'Python'],
  },
  {
    title: 'Marketing Analyst',
    company: 'XYZ Corporation',
    period: 'Jun 2021 - Jul 2022',
    description: 'Analyzed marketing campaign performance using Google Analytics. Created reports and dashboards to track KPIs. Provided data-driven recommendations to optimize marketing strategies.',
    skills: ['Google Analytics', 'Excel', 'Data Visualization', 'Marketing'],
  },
];

export const education: Education[] = [
  {
    degree: 'MS in Data Science',
    institution: 'University of Data Sciences',
    period: '2022 - Present',
    description: 'Focusing on machine learning, statistical analysis, and big data technologies. Currently maintaining a 3.8 GPA.',
  },
  {
    degree: 'BS in Statistics',
    institution: 'State University',
    period: '2018 - 2022',
    description: 'Graduated with honors. Coursework included probability theory, regression analysis, and computational statistics.',
  },
];

export const aboutMe = {
  intro: "Sou Tales Noronha, estudante de Ciência da Computação na UniAnchieta e profissional com experiência em sistemas empresariais. Estou em transição para a área de Ciência de Dados, com foco em análise, visualização e inteligência artificial.",
  description: "Tenho conhecimento em Python, SQL e ferramentas como Pandas e Matplotlib. Já participei de hackathons, automatizei processos no meu trabalho atual e estou sempre buscando aplicar dados para resolver problemas reais com clareza e impacto.",
  mission: "Meu objetivo é transformar dados em decisões mais inteligentes, unindo pensamento analítico com soluções práticas.",
};