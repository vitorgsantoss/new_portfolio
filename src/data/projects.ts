import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'RAG Chat',
    description:
      'Através do RAG Chat você pode realizar o upload de documentos e fazer perguntas para o agente de IA com base no conteúdo. O acesso às informações se torna muito mais prático — deixa a inteligência artificial fazer o trabalho duro por você.',
    technologies: ['Python', 'LangChain', 'OpenAI', 'RAG', 'ChromaDB', 'FastAPI'],
    gradientFrom: '#6366f1',
    gradientTo: '#4f46e5',
    imageUrl: '/img/rag_chat.png',
    repoUrl: 'https://github.com/vitorgsantoss/rag_chat',
    featured: true,
  },
  {
    id: '2',
    title: 'Agente de Estoque',
    description:
      'Agente de IA que permite acessar registros do banco de dados através de linguagem natural. Criado com LangChain e ferramentas SQL, Streamlit para a interface e a API da OpenAI para processar as requisições.',
    technologies: ['Python', 'LangChain', 'Streamlit', 'OpenAI', 'SQL', 'PostgreSQL'],
    gradientFrom: '#f59e0b',
    gradientTo: '#d97706',
    imageUrl: '/img/stock_agent.png',
    repoUrl: 'https://github.com/vitorgsantoss/stock_agent',
    featured: true,
  },
  {
    id: '3',
    title: 'E-commerce',
    description:
      'Protótipo que implementa as principais funcionalidades de um e-commerce: controle de estoque, cadastro de produtos, gerenciamento de pedidos e muito mais, centralizando todas as informações da loja online.',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Docker'],
    gradientFrom: '#06b6d4',
    gradientTo: '#0891b2',
    imageUrl: '/img/e-commerce.png',
    // demoUrl: 'https://ecommerce-bitter-snowflake-9171.fly.dev/',
    repoUrl: 'https://github.com/vitorgsantoss/e-commerce',
    featured: true,
  },
  
  
  {
    id: '4',
    title: 'Blog Tech',
    description:
      'Aplicação web que utiliza o framework Django para gerenciamento de dados e Docker para containerização. Permite o cadastro e gerenciamento de posts, explorando roteamento, ORM, autenticação e templates do Django.',
    technologies: ['Django', 'Python', 'Docker', 'PostgreSQL'],
    gradientFrom: '#10b981',
    gradientTo: '#059669',
    imageUrl: '/img/blog.png',
    // demoUrl: 'https://blog-project-cool-sea-1718.fly.dev/',
    repoUrl: 'https://github.com/vitorgsantoss/blog-project',
    featured: false,
  },
  {
    id: '5',
    title: 'Agenda',
    description:
      'Aplicação para gerenciamento de contatos com operações de CRUD, interface intuitiva, gerenciamento de usuários e sistema de autenticação robusto.',
    technologies: ['Django', 'Python', 'PostgreSQL', 'HTML5', 'CSS3'],
    gradientFrom: '#8b5cf6',
    gradientTo: '#7c3aed',
    imageUrl: '/img/agenda.png',
    // demoUrl: 'https://agenda-floral-voice-9073.fly.dev/',
    repoUrl: 'https://github.com/vitorgsantoss/agenda-project',
    featured: false,
  },
  {
    id: '6',
    title: 'Work Insertion',
    description:
      'MVP de uma plataforma de cursos gratuita voltada para a inclusão de pessoas com deficiência visual no mercado de trabalho. O objetivo é oferecer qualificação profissional acessível e inclusiva.',
    technologies: ['Python', 'Django', 'HTML5', 'CSS3'],
    gradientFrom: '#ef4444',
    gradientTo: '#dc2626',
    imageUrl: '/img/work_insertion.png',
    repoUrl: 'https://github.com/vitorgsantoss/work_insertion',
    featured: false,
  },
];
