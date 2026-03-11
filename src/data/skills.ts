import type { SkillCategory } from '../types';
import type { Language } from '../hooks/useLanguage';

const skillCategoriesData: Record<Language, SkillCategory[]> = {
  'pt-BR': [
    {
      id: 'ai',
      name: 'IA & Machine Learning',
      icon: '🤖',
      skills: ['Python', 'Langchain', 'OpenAI API', 'RAG', 'IA Generativa', 'Embeddings', 'ChromaDB', 'FAISS', 'Agentes de IA'],
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: '⚙️',
      skills: ['Django', 'DRF', 'FastAPI', 'Python', 'Celery', 'RabbitMQ', 'Node.js', 'Express', 'REST APIs', 'Poetry'],
    },
    {
      id: 'frontend',
      name: 'Frontend',
      icon: '🎨',
      skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3', 'Streamlit', 'Django Templates'],
    },
    {
      id: 'databases',
      name: 'Banco de Dados',
      icon: '🗄️',
      skills: ['PostgreSQL', 'Redis', 'MongoDB', 'SQLite', 'ORM', 'Sqlalchemy', 'SQL'],
    },
    {
      id: 'devops',
      name: 'DevOps & Ferramentas',
      icon: '🛠️',
      skills: ['Docker', 'Git', 'GitHub', 'Linux', 'GCP'],
    },
  ],
  'en-US': [
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      icon: '🤖',
      skills: ['Python', 'Langchain', 'OpenAI API', 'RAG', 'Generative AI', 'Embeddings', 'ChromaDB', 'FAISS', 'AI Agents'],
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: '⚙️',
      skills: ['Django', 'DRF', 'FastAPI', 'Python', 'Celery', 'RabbitMQ', 'Node.js', 'Express', 'REST APIs', 'Poetry'],
    },
    {
      id: 'frontend',
      name: 'Frontend',
      icon: '🎨',
      skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3', 'Streamlit', 'Django Templates'],
    },
    {
      id: 'databases',
      name: 'Databases',
      icon: '🗄️',
      skills: ['PostgreSQL', 'Redis', 'MongoDB', 'SQLite', 'ORM', 'Sqlalchemy', 'SQL'],
    },
    {
      id: 'devops',
      name: 'DevOps & Tools',
      icon: '🛠️',
      skills: ['Docker', 'Git', 'GitHub', 'Linux', 'GCP'],
    },
  ],
};

export const getSkillCategories = (language: Language): SkillCategory[] => skillCategoriesData[language];

// Default export for backwards compatibility
export const skillCategories = skillCategoriesData['pt-BR'];
