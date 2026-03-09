import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai',
    name: 'IA & Machine Learning',
    icon: '🤖',
    skills: ['Python', 'LangChain', 'OpenAI API', 'RAG', 'Embeddings', 'ChromaDB', 'FAISS', 'Agentes de IA'],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: '⚙️',
    skills: ['Django', 'FastAPI', 'Python', 'REST APIs', 'SQL', 'Autenticação JWT'],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    icon: '🎨',
    skills: ['JavaScript', 'HTML5', 'CSS3', 'Streamlit', 'Templates Django'],
  },
  {
    id: 'databases',
    name: 'Banco de Dados',
    icon: '🗄️',
    skills: ['PostgreSQL', 'SQLite', 'ORM Django', 'SQL'],
  },
  {
    id: 'devops',
    name: 'DevOps & Ferramentas',
    icon: '🛠️',
    skills: ['Docker', 'Git', 'GitHub', 'Linux', 'Fly.io', 'Netlify'],
  },
];
