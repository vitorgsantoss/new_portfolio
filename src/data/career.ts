import type { Experience, Education } from '../types';
import type { Language } from '../hooks/useLanguage';

const experiencesData: Record<Language, Experience[]> = {
  'pt-BR': [
    {
      id: '1',
      company: 'Ford Motor Company',
      role: 'Desenvolvedor Full-Stack & AI Engineer',
      period: { start: 'Nov / 2025', end: 'Presente' },
      description:
        'Desenvolvimento de soluções de IA aplicada a processos de engenharia automotiva e análise de durabilidade veicular.',
      responsibilities: [
        'Liderei o desenvolvimento de um Data Lake corporativo para centralização de dados operacionais de múltiplos departamentos, otimizando milhares de registros técnicos e reduzindo em 60% o tempo de busca por informações',
        'Desenvolvi Agentes de IA com LangChain para análise de durabilidade de veículos, substituindo fluxos baseados em formulários e economizando aproximadamente 400 horas de trabalho analítico por ano',
        'Criei um sistema inteligente de agendamento de testes de durabilidade com modelos preditivos para estimativa de demanda de motoristas e previsão de conclusão de testes, aumentando em 35% a eficiência do planejamento operacional',
        'Estruturei pipelines de ingestão e padronização de dados veiculares (ETL) permitindo análises automatizadas e melhor rastreabilidade de dados experimentais',
        'Desenvolvi AI Agents integrados a SQL para consulta via linguagem natural (NLP) sobre grandes bases de dados de engenharia, reduzindo em 50% o tempo necessário para análise e obtenção de insights',
      ],
      technologies: ['Python', 'PostgreSQL', 'GCP', 'LangChain', 'AI Agents', 'RAG', 'NLP', 'Django', 'DRF', 'FastAPI', 'React', 'TypeScript', 'RabbitMQ', 'Celery', 'Redis', 'Docker'],
      location: 'Brasil',
    },
    {
      id: '2',
      company: 'Ford Motor Company – IEL',
      role: 'Desenvolvedor Full-Stack & Researcher',
      period: { start: 'Mai / 2025', end: 'Nov / 2025' },
      description:
        'Modernização de sistemas legados e automação de processos de homologação e validação veicular com IA.',
      responsibilities: [
        'Substituí sistemas legados por soluções modernas e escaláveis, aumentando a confiabilidade dos processos e reduzindo falhas operacionais em fluxos críticos de engenharia',
        'Automatizei a geração de relatórios de homologação veicular com cálculos complexos de emissões, economizando aproximadamente 1.200 horas de trabalho por ano',
        'Desenvolvi Agentes de IA para validação automática de cálculos de emissões veiculares, aumentando a confiabilidade dos resultados laboratoriais e reduzindo erros manuais',
        'Implementei sistema RAG (Retrieval-Augmented Generation) para consulta inteligente a dezenas de normas regulatórias de emissões e calibração de equipamentos, reduzindo em 70% o tempo de busca por documentação técnica',
        'Fui efetivado em apenas 6 meses por excelentes entregas',
      ],
      technologies: ['Python', 'LangChain', 'RAG', 'AI Agents', 'Embeddings', 'ChromaDB', 'Vector Databases', 'Streamlit', 'PostgreSQL', 'Prompt Engineering'],
      location: 'Brasil',
    },
    {
      id: '3',
      company: 'Isystems – PJ',
      role: 'Desenvolvedor Full-Stack',
      period: { start: 'Jan / 2023', end: 'Presente' },
      description:
        'Desenvolvimento de plataforma SaaS multi-tenant para gestão completa de restaurantes e lanchonetes.',
      responsibilities: [
        'Desenvolvi um SaaS multi-tenant para controle completo de restaurantes e lanchonetes, incluindo gestão de pedidos, cardápios, funcionários, cozinha e entregas',
        'Criei cardápios digitais e sistema de pedidos online que geraram aumento médio de 10% nas vendas dos estabelecimentos e melhoraram a experiência do cliente',
        'Desenvolvi sistema de acompanhamento de pedido em tempo real permitindo que clientes acompanhassem o status (recebido, em preparo, em entrega), reduzindo em até 30% as consultas ao atendimento',
        'Estruturei arquitetura escalável multi-tenant permitindo que múltiplos estabelecimentos utilizassem a plataforma simultaneamente com isolamento total de dados',
      ],
      technologies: ['Django', 'DRF', 'Python', 'React', 'TypeScript', 'JavaScript', 'RabbitMQ', 'Celery', 'Redis', 'Docker'],
      location: 'Brasil (Remoto)',
    },
  ],
  'en-US': [
    {
      id: '1',
      company: 'Ford Motor Company',
      role: 'Full-Stack Developer & AI Engineer',
      period: { start: 'Nov / 2025', end: 'Present' },
      description:
        'Development of AI solutions applied to automotive engineering processes and vehicle durability analysis.',
      responsibilities: [
        'Led the development of a corporate Data Lake to centralize operational data from multiple departments, optimizing thousands of technical records and reducing information search time by 60%',
        'Developed AI Agents with LangChain for vehicle durability analysis, replacing form-based workflows and saving approximately 400 hours of analytical work per year',
        'Created an intelligent durability test scheduling system with predictive models for driver demand estimation and test completion forecasting, increasing operational planning efficiency by 35%',
        'Built data ingestion and standardization pipelines for vehicle data (ETL), enabling automated analyses and improved traceability of experimental data',
        'Developed SQL-integrated AI Agents for natural language queries (NLP) over large engineering databases, reducing analysis and insight generation time by 50%',
      ],
      technologies: ['Python', 'PostgreSQL', 'GCP', 'LangChain', 'AI Agents', 'RAG', 'NLP', 'Django', 'DRF', 'FastAPI', 'React', 'TypeScript', 'RabbitMQ', 'Celery', 'Redis', 'Docker'],
      location: 'Brazil',
    },
    {
      id: '2',
      company: 'Ford Motor Company – IEL',
      role: 'Full-Stack Developer & Researcher',
      period: { start: 'May / 2025', end: 'Nov / 2025' },
      description:
        'Modernization of legacy systems and automation of vehicle certification and validation processes with AI.',
      responsibilities: [
        'Replaced legacy systems with modern and scalable solutions, increasing process reliability and reducing operational failures in critical engineering workflows',
        'Automated the generation of vehicle certification reports with complex emissions calculations, saving approximately 1,200 hours of work per year',
        'Developed AI Agents for automatic validation of vehicle emissions calculations, increasing the reliability of laboratory results and reducing manual errors',
        'Implemented a RAG (Retrieval-Augmented Generation) system for intelligent querying of dozens of regulatory emissions and equipment calibration standards, reducing technical documentation search time by 70%',
        'Was promoted to full-time in just 6 months due to excellent deliveries',
      ],
      technologies: ['Python', 'LangChain', 'RAG', 'AI Agents', 'Embeddings', 'ChromaDB', 'Vector Databases', 'Streamlit', 'PostgreSQL', 'Prompt Engineering'],
      location: 'Brazil',
    },
    {
      id: '3',
      company: 'Isystems – Contractor',
      role: 'Full-Stack Developer',
      period: { start: 'Jan / 2023', end: 'Present' },
      description:
        'Development of a multi-tenant SaaS platform for complete management of restaurants and fast-food establishments.',
      responsibilities: [
        'Developed a multi-tenant SaaS for complete control of restaurants and fast-food establishments, including order, menu, employee, kitchen, and delivery management',
        'Created digital menus and online ordering system that generated an average 10% increase in sales for establishments and improved customer experience',
        'Built a real-time order tracking system allowing customers to follow order status (received, preparing, delivering), reducing support inquiries by up to 30%',
        'Designed a scalable multi-tenant architecture allowing multiple establishments to use the platform simultaneously with complete data isolation',
      ],
      technologies: ['Django', 'DRF', 'Python', 'React', 'TypeScript', 'JavaScript', 'RabbitMQ', 'Celery', 'Redis', 'Docker'],
      location: 'Brazil (Remote)',
    },
  ],
};

export const getExperiences = (language: Language): Experience[] => experiencesData[language];

const educationData: Record<Language, Education[]> = {
  'pt-BR': [
    {
      id: '1',
      institution: 'Fatec Itapetininga',
      degree: 'Análise e Desenvolvimento de Sistemas',
      period: { start: 'Jan / 2022', end: 'Dez / 2024' },
    },
  ],
  'en-US': [
    {
      id: '1',
      institution: 'Fatec Itapetininga',
      degree: 'Systems Analysis and Development',
      period: { start: 'Jan / 2022', end: 'Dec / 2024' },
    },
  ],
};

export const getEducation = (language: Language): Education[] => educationData[language];

// Default export for backwards compatibility
export const experiences = experiencesData['pt-BR'];
