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
    title: 'Customer Segmentation Analysis',
    description: 'Used K-means clustering to segment customers based on purchasing behavior, helping a retail company target their marketing campaigns more effectively.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'Scikit-Learn', 'K-means', 'Data Visualization'],
    githubUrl: 'https://github.com',
    category: 'data',
    featured: true,
  },
  {
    id: 2,
    title: 'Sales Prediction Model',
    description: 'Developed a time series forecasting model to predict monthly sales for a manufacturing company, achieving a 15% improvement in forecast accuracy.',
    image: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'Time Series', 'ARIMA', 'Pandas'],
    githubUrl: 'https://github.com',
    category: 'data',
    featured: true,
  },
  {
    id: 3,
    title: 'Sentiment Analysis Dashboard',
    description: 'Created an interactive dashboard for real-time sentiment analysis of customer reviews using NLP techniques and visualization tools.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'NLP', 'Dash', 'NLTK'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'ai',
    featured: true,
  },
  {
    id: 4,
    title: 'Data Cleaning Pipeline',
    description: 'Built an automated data cleaning pipeline for a healthcare dataset, improving data quality and reducing preprocessing time by 40%.',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'Pandas', 'Data Cleaning', 'Automation'],
    githubUrl: 'https://github.com',
    category: 'automation',
    featured: false,
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Developed a responsive portfolio website using React and modern web technologies to showcase data science projects and skills.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'web',
    featured: false,
  },
  {
    id: 6,
    title: 'Image Classification Model',
    description: 'Built a deep learning model for image classification using convolutional neural networks, achieving 95% accuracy on test data.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'TensorFlow', 'CNN', 'Computer Vision'],
    githubUrl: 'https://github.com',
    category: 'ai',
    featured: true,
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'Linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'Github',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'Twitter',
  },
  {
    name: 'Medium',
    url: 'https://medium.com',
    icon: 'FileText',
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
  intro: "I'm Tales Noronha, a data science enthusiast with a background in statistics, currently transitioning into the exciting world of data science.",
  description: "With a solid foundation in statistics and a growing expertise in data science methodologies, I'm passionate about extracting meaningful insights from complex datasets. My journey began in traditional statistical analysis, but I've since expanded my skills to include machine learning, data visualization, and programming. I'm particularly interested in how data can drive decision-making and create value across different industries. Whether it's uncovering hidden patterns in consumer behavior or optimizing business processes through predictive modeling, I'm eager to tackle challenging problems with data-driven solutions.",
  mission: "My goal is to bridge the gap between raw data and actionable insights, helping organizations make informed decisions based on solid evidence rather than intuition alone. I believe that data science, when applied thoughtfully, has the power to transform businesses and improve lives.",
};