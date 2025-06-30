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
    title: 'Técnico em Suporte de Sistemas',
    company: 'Expand Sistemas',
    period: 'Jan 2023 – Presente',
    description: 'Atuação em um escritório de contabilidade, realizando instalação, configuração e suporte de sistemas empresariais, como ponto eletrônico, frente de caixa e controle de jornada. Desenvolvimento de soluções em Python para automatizar tarefas operacionais, como o lançamento de extratos bancários.',
    skills: ['Python', 'Automação de Processos', 'Suporte Técnico', 'Instalação de Sistemas'],
  },
  {
    title: 'Desenvolvedor de Projeto em Hackathon',
    company: 'Universidade Anchieta',
    period: 'Jun 2025',
    description: 'Participação em hackathon universitário com foco em inteligência artificial. Desenvolvimento de um MVP para melhorar a comunicação interna em empresas, com potencial de economizar mais de 200 horas mensais. Premiado com o 3º lugar entre as equipes.',
    skills: ['Python', 'Flask', 'NLP', 'Trabalho em Equipe'],
  },
  {
    title: 'Projetos Acadêmicos e Pessoais (Freelance e Estudos)',
    company: '2023 – Presente',
    period: '2023 – Presente',
    description: 'Criação de um sistema de alocação de professores com interface gráfica e alocação automática baseada em regras. Desenvolvimento de dashboards interativos com dados da Olist e análises com Python e bibliotecas de visualização. Produção de conteúdos gráficos para redes sociais da empresa com uso do Canva.',
    skills: ['Python', 'Tkinter', 'Pandas', 'Canva', 'Data Visualization'],
  },
];

export const education: Education[] = [
  {
    degree: 'Bacharelado em Ciência da Computação (em andamento)',
    institution: 'Centro Universitário Anchieta – UniAnchieta',
    period: '2022 – Presente',
    description: 'Foco em ciência de dados, inteligência artificial, programação distribuída e automação. Participação ativa em projetos práticos, eventos e hackathons.',
  },
  {
    degree: 'Formação Complementar – Carreira em Ciência de Dados',
    institution: 'Alura – Cursos Online',
    period: '2024 – Presente',
    description: 'Trilha de formação voltada à análise e ciência de dados, com foco em estatística aplicada, visualização de dados e modelagem preditiva. Cursos concluídos ou em andamento: Data Science: analisando e prevendo séries temporais, Data Science: testando relações com Regressão Linear, Data Visualization: criando gráficos com bibliotecas Python, Data Science: explorando e analisando dados, Data Science: testando hipóteses. Habilidades desenvolvidas: Séries temporais, regressão linear, testes de hipótese, visualização com Seaborn/Matplotlib, análise exploratória e modelagem estatística com Python.',
  },
];

export const aboutMe = {
  intro: "Sou Tales Noronha, estudante de Ciência da Computação na UniAnchieta e profissional com experiência em sistemas empresariais. Estou em transição para a área de Ciência de Dados, com foco em análise, visualização e inteligência artificial.",
  description: "Tenho conhecimento em Python, SQL e ferramentas como Pandas e Matplotlib. Já participei de hackathons, automatizei processos no meu trabalho atual e estou sempre buscando aplicar dados para resolver problemas reais com clareza e impacto.",
  mission: "Meu objetivo é transformar dados em decisões mais inteligentes, unindo pensamento analítico com soluções práticas.",
};