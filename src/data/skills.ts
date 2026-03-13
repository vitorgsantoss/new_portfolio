import type { SkillCategory } from '../types';
import type { Language } from '../hooks/useLanguage';

const skillCategoriesData: Record<Language, SkillCategory[]> = {
  'pt-BR': [
    {
      id: 'ai',
      name: 'IA Generativa',
      icon: '🤖',
      skills: ['LangChain', 'RAG', 'Embeddings', 'Agentes de IA', 'Prompt Engineering', 'NLP', 'IA Generativa', 'ChromaDB', 'Vector Databases'],
    },
    {
      id: 'data',
      name: 'Dados',
      icon: '📊',
      skills: ['Pipelines de Dados (ETL)', 'Engenharia de Features', 'Análise Preditiva', 'Data Lake'],
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: '⚙️',
      skills: ['Python', 'Django', 'Django REST Framework', 'FastAPI', 'Celery', 'RabbitMQ', 'Mensageria', 'Node.js', 'Express', 'Poetry'],
    },
    {
      id: 'frontend',
      name: 'Frontend',
      icon: '🎨',
      skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite', 'Streamlit', 'Django Templates', 'HTML5', 'CSS3'],
    },
    {
      id: 'databases',
      name: 'Banco de Dados',
      icon: '🗄️',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'ChromaDB', 'SQLAlchemy', 'ORM'],
    },
    {
      id: 'devops',
      name: 'DevOps & Cloud',
      icon: '🛠️',
      skills: ['Docker', 'Google Cloud Platform (GCP)', 'Git', 'GitHub', 'Linux'],
    }
  ],
  'en-US': [
    {
      id: 'ai',
      name: 'Generative AI',
      icon: '🤖',
      skills: ['LangChain', 'RAG', 'Embeddings', 'AI Agents', 'Prompt Engineering', 'NLP', 'Generative AI', 'ChromaDB', 'Vector Databases'],
    },
    {
      id: 'data',
      name: 'Data',
      icon: '📊',
      skills: ['Data Pipelines (ETL)', 'Feature Engineering', 'Predictive Analysis', 'Data Lake'],
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: '⚙️',
      skills: ['Python', 'Django', 'Django REST Framework', 'FastAPI', 'Celery', 'RabbitMQ', 'Messaging', 'Node.js', 'Express', 'Poetry'],
    },
    {
      id: 'frontend',
      name: 'Frontend',
      icon: '🎨',
      skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite', 'Streamlit', 'Django Templates', 'HTML5', 'CSS3'],
    },
    {
      id: 'databases',
      name: 'Databases',
      icon: '🗄️',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'ChromaDB', 'SQLAlchemy', 'ORM'],
    },
    {
      id: 'devops',
      name: 'DevOps & Cloud',
      icon: '🛠️',
      skills: ['Docker', 'Google Cloud Platform (GCP)', 'Git', 'GitHub', 'Linux'],
    }
  ],
};

export const getSkillCategories = (language: Language): SkillCategory[] => skillCategoriesData[language];

// Default export for backwards compatibility
export const skillCategories = skillCategoriesData['pt-BR'];
