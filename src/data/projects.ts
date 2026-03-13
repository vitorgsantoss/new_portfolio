import type { Project } from '../types';
import type { Language } from '../hooks/useLanguage';

const projectsData: Record<Language, Project[]> = {
  'pt-BR': [
    {
      id: '1',
      title: 'RAG Chat',
      description:
        'Através do RAG Chat você pode realizar o upload de documentos e fazer perguntas para o agente de IA com base no conteúdo. O acesso às informações se torna muito mais prático — deixa a inteligência artificial fazer o trabalho duro por você.',
      technologies: ['Python', 'LangChain', 'OpenAI', 'RAG', 'ChromaDB', 'Streamlit'],
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
      technologies: ['Python', 'LangChain', 'Streamlit', 'OpenAI'],
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
      repoUrl: 'https://github.com/vitorgsantoss/e-commerce',
      featured: true,
    },
    {
      id: '4',
      title: 'AI Teacher Bot',
      description:
        'Bot de WhatsApp integrado com a API da OpenAI para ajudar usuários a aprender e praticar inglês de forma interativa. Oferece tradução, explicação de frases, exemplos de uso real e testes de fixação baseados no histórico da conversa.',
      technologies: ['Python', 'FastAPI', 'OpenAI', 'PostgreSQL', 'Redis', 'Docker'],
      gradientFrom: '#10b981',
      gradientTo: '#059669',
      imageUrl: '/img/english_teacher.png',
      repoUrl: 'https://github.com/vitorgsantoss/whatsapp_ai_teacher',
      featured: false,
    },
    {
      id: '5',
      title: 'iSystems - PDV',
      description:
        'SaaS multi-tenant de PDV completo para bares e lanchonetes. Controla o comércio de ponta a ponta: gestão de estoque, registro de vendas, cardápio online e acompanhamento de pedidos em tempo real — tanto para funcionários quanto para clientes.',
      technologies: ['React', 'TypeScript', 'Django REST Framework', 'Celery', 'RabbitMQ', 'PostgreSQL', 'Docker'],
      gradientFrom: '#8b5cf6',
      gradientTo: '#7c3aed',
      imageUrl: '/img/isystems_pdv_cover.png',
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
  ],
  'en-US': [
    {
      id: '1',
      title: 'RAG Chat',
      description:
        'With RAG Chat you can upload documents and ask questions to the AI agent based on the content. Access to information becomes much more practical — let artificial intelligence do the hard work for you.',
      technologies: ['Python', 'LangChain', 'OpenAI', 'RAG', 'ChromaDB', 'Streamlit'],
      gradientFrom: '#6366f1',
      gradientTo: '#4f46e5',
      imageUrl: '/img/rag_chat.png',
      repoUrl: 'https://github.com/vitorgsantoss/rag_chat',
      featured: true,
    },
    {
      id: '2',
      title: 'Stock Agent',
      description:
        'AI agent that allows accessing database records through natural language. Built with LangChain and SQL tools, Streamlit for the interface and the OpenAI API to process requests.',
      technologies: ['Python', 'LangChain', 'Streamlit', 'OpenAI'],
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
        'Prototype that implements the main features of an e-commerce: inventory control, product registration, order management and much more, centralizing all online store information.',
      technologies: ['Django', 'Python', 'PostgreSQL', 'Docker'],
      gradientFrom: '#06b6d4',
      gradientTo: '#0891b2',
      imageUrl: '/img/e-commerce.png',
      repoUrl: 'https://github.com/vitorgsantoss/e-commerce',
      featured: true,
    },
    {
      id: '4',
      title: 'AI Teacher Bot',
      description:
        'WhatsApp bot integrated with the OpenAI API to help users learn and practice English interactively. Offers translation, phrase explanation, real usage examples and retention tests based on conversation history.',
      technologies: ['Python', 'FastAPI', 'OpenAI', 'PostgreSQL', 'Redis', 'Docker'],
      gradientFrom: '#10b981',
      gradientTo: '#059669',
      imageUrl: '/img/english_teacher.png',
      repoUrl: 'https://github.com/vitorgsantoss/whatsapp_ai_teacher',
      featured: false,
    },
    {
      id: '5',
      title: 'iSystems - POS',
      description:
        'Multi-tenant POS SaaS for bars and snack bars. Controls the business end-to-end: inventory management, sales recording, online menu and real-time order tracking — for both employees and customers.',
      technologies: ['React', 'TypeScript', 'Django REST Framework', 'Celery', 'RabbitMQ', 'PostgreSQL', 'Docker'],
      gradientFrom: '#8b5cf6',
      gradientTo: '#7c3aed',
      imageUrl: '/img/isystems_pdv_cover.png',
      featured: false,
    },
    {
      id: '6',
      title: 'Work Insertion',
      description:
        'MVP of a free course platform aimed at including visually impaired people in the job market. The goal is to offer accessible and inclusive professional qualification.',
      technologies: ['Python', 'Django', 'HTML5', 'CSS3'],
      gradientFrom: '#ef4444',
      gradientTo: '#dc2626',
      imageUrl: '/img/work_insertion.png',
      repoUrl: 'https://github.com/vitorgsantoss/work_insertion',
      featured: false,
    },
  ],
};

export const getProjects = (language: Language): Project[] => projectsData[language];

// Default export for backwards compatibility
export const projects = projectsData['pt-BR'];
