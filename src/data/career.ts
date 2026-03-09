import type { Experience } from '../types';

export const experiences: Experience[] = [
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
    role: 'Desenvolvedor Fullstack - Bolsista Pesquisador',
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
];
