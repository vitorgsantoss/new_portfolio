import type { Experience } from '../types';
import type { Language } from '../hooks/useLanguage';

const experiencesData: Record<Language, Experience[]> = {
  'pt-BR': [
    {
      id: '1',
      company: 'Freelancer - PJ',
      role: 'Desenvolvedor de Software',
      period: { start: 'Jan / 2023', end: 'Presente' },
      description:
        'Desenvolvimento de soluções com foco em Inteligência Artificial, automação de processos e aplicações web. Criação de agentes de IA com RAG, ferramentas de busca em linguagem natural e APIs escaláveis.',
      responsibilities: [
        'Desenvolvimento de agentes de IA com LangChain, RAG e OpenAI API',
        'Construção de ferramentas de busca SQL via linguagem natural com Streamlit',
        'Criação de APIs RESTful com FastAPI e Django',
        'Containerização de aplicações com Docker e deploy em GCP',
      ],
      technologies: ['Python', 'LangChain', 'OpenAI', 'FastAPI', 'Django', 'Docker', 'PostgreSQL'],
      location: 'Brasil (Remoto)',
    },
    {
      id: '2',
      company: 'Ford Motor Company - IEL',
      role: 'Desenvolvedor Fullstack',
      period: { start: 'Mai / 2025', end: 'Nov / 2025' },
      description:
        'Desenvolvimento de aplicações web completas com Django e PostgreSQL, explorando todas as camadas do desenvolvimento: backend, banco de dados, autenticação e frontend.',
      responsibilities: [
        'Desenvolvimento de e-commerce com controle de estoque e gerenciamento de pedidos',
        'Criação de sistema de blog com gerenciamento de conteúdo e autenticação',
        'Implementação de aplicação de agenda com CRUD completo e gerenciamento de usuários',
        'Containerização e deploy de aplicações com Docker',
      ],
      technologies: ['Django', 'Python', 'PostgreSQL', 'Docker', 'HTML5', 'CSS3', 'JavaScript'],
      location: 'Brasil',
    },
    {
      id: '3',
      company: 'Ford Motor Company - Terceirizado',
      role: 'Desenvolvedor Fullstack',
      period: { start: 'Nov / 2025', end: 'Presente' },
      description:
        'Aprendizado autodidata das bases da programação com Python, lógica de programação, estruturas de dados e bancos de dados relacionais. Desenvolvimento dos primeiros projetos e construção do portfólio.',
      responsibilities: [
        'Aprendizado de Python, lógica de programação e orientação a objetos',
        'Estudo de bancos de dados relacionais e SQL',
        'Desenvolvimento dos primeiros projetos web com HTML, CSS e JavaScript',
        'Introdução ao Django e ao desenvolvimento backend',
      ],
      technologies: ['Python', 'SQL', 'HTML5', 'CSS3', 'JavaScript', 'Git'],
      location: 'Brasil',
    },
  ],
  'en-US': [
    {
      id: '1',
      company: 'Freelancer - Self-employed',
      role: 'Software Developer',
      period: { start: 'Jan / 2023', end: 'Present' },
      description:
        'Development of solutions focused on Artificial Intelligence, process automation and web applications. Creation of AI agents with RAG, natural language search tools and scalable APIs.',
      responsibilities: [
        'Development of AI agents with LangChain, RAG and OpenAI API',
        'Building SQL search tools via natural language with Streamlit',
        'Creation of RESTful APIs with FastAPI and Django',
        'Application containerization with Docker and deployment on GCP',
      ],
      technologies: ['Python', 'LangChain', 'OpenAI', 'FastAPI', 'Django', 'Docker', 'PostgreSQL'],
      location: 'Brazil (Remote)',
    },
    {
      id: '2',
      company: 'Ford Motor Company - IEL',
      role: 'Fullstack Developer',
      period: { start: 'May / 2025', end: 'Nov / 2025' },
      description:
        'Development of complete web applications with Django and PostgreSQL, exploring all layers of development: backend, database, authentication and frontend.',
      responsibilities: [
        'E-commerce development with inventory control and order management',
        'Creation of blog system with content management and authentication',
        'Implementation of schedule application with full CRUD and user management',
        'Containerization and deployment of applications with Docker',
      ],
      technologies: ['Django', 'Python', 'PostgreSQL', 'Docker', 'HTML5', 'CSS3', 'JavaScript'],
      location: 'Brazil',
    },
    {
      id: '3',
      company: 'Ford Motor Company - Contractor',
      role: 'Fullstack Developer',
      period: { start: 'Nov / 2025', end: 'Present' },
      description:
        'Self-taught learning of programming fundamentals with Python, programming logic, data structures and relational databases. Development of first projects and portfolio building.',
      responsibilities: [
        'Learning Python, programming logic and object-oriented programming',
        'Study of relational databases and SQL',
        'Development of first web projects with HTML, CSS and JavaScript',
        'Introduction to Django and backend development',
      ],
      technologies: ['Python', 'SQL', 'HTML5', 'CSS3', 'JavaScript', 'Git'],
      location: 'Brazil',
    },
  ],
};

export const getExperiences = (language: Language): Experience[] => experiencesData[language];

// Default export for backwards compatibility
export const experiences = experiencesData['pt-BR'];
