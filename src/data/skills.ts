import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
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
    skills: ['React', 'TypeScript', 'JavaScript', 'Vite', 'HTML5', 'CSS3', 'Streamlit', 'Django Templates'],
  },
  {
    id: 'databases',
    name: 'Banco de Dados',
    icon: '🗄️',
    skills: ['PostgreSQL', 'SQLite', 'ORM', 'Sqlalchemy', 'SQL'],
  },
  {
    id: 'devops',
    name: 'DevOps & Ferramentas',
    icon: '🛠️',
    skills: ['Docker', 'Git', 'GitHub', 'Linux', 'GCP'],
  },
];
