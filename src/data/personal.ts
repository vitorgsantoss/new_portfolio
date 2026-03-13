import type { PersonalInfo } from '../types';
import type { Language } from '../hooks/useLanguage';

const personalInfoData: Record<Language, PersonalInfo> = {
  'pt-BR': {
    name: 'Vítor Santos',
    title: 'Full-Stack Developer & AI Engineer',
    bio: 'Olá, me chamo Vítor Santos! Sou Desenvolvedor Full-Stack & AI Engineer com experiência em desenvolvimento de sistemas web, agentes de IA com LangChain, aplicações RAG, pipelines de dados (ETL), LLMs e automação de processos. Atuo com Python, Django, FastAPI, React e TypeScript, sempre buscando entregar além do esperado com tecnologias modernas.',
    email: 'vgsantos.dev@gmail.com',
    phone: '15 997592983',
    location: 'Brasil',
    linkedin: 'https://www.linkedin.com/in/vítor-santos-86142423b/',
    github: 'https://github.com/vitorgsantoss',
    resume: '/Vítor Santos.pdf',
  },
  'en-US': {
    name: 'Vítor Santos',
    title: 'Full-Stack Developer & AI Engineer',
    bio: "Hi, I'm Vítor Santos! I'm a Full-Stack Developer & AI Engineer with experience in web systems development, AI agents with LangChain, RAG applications, data pipelines (ETL), LLMs and process automation. I work with Python, Django, FastAPI, React and TypeScript, always striving to deliver beyond expectations with modern technologies.",
    email: 'vgsantos.dev@gmail.com',
    phone: '+55 15 997592983',
    location: 'Brazil',
    linkedin: 'https://www.linkedin.com/in/vítor-santos-86142423b/',
    github: 'https://github.com/vitorgsantoss',
    resume: '/cv.pdf',
  },
};

export const getPersonalInfo = (language: Language): PersonalInfo => personalInfoData[language];

// Default export for backwards compatibility
export const personalInfo = personalInfoData['pt-BR'];
