import type { PersonalInfo } from '../types';
import type { Language } from '../hooks/useLanguage';

const personalInfoData: Record<Language, PersonalInfo> = {
  'pt-BR': {
    name: 'Vítor Santos',
    title: 'Desenvolvedor de Software',
    bio: 'Olá, me chamo Vítor Santos! Sou Desenvolvedor de Software com experiência em desenvolvimento de sistemas web, automatização de processos, agentes de IA com RAG, ferramentas de busca SQL, aplicações desktop e APIs. Busco entregar sempre além do esperado nos projetos para os quais sou designado, melhorando ao máximo o desempenho utilizando tecnologias modernas.',
    email: 'vgsantos.dev@gmail.com',
    phone: '15 997592983',
    location: 'Brasil',
    linkedin: 'https://www.linkedin.com/in/vítor-santos-86142423b/',
    github: 'https://github.com/vitorgsantoss',
    resume: '/cv.pdf',
  },
  'en-US': {
    name: 'Vítor Santos',
    title: 'Software Developer',
    bio: "Hi, I'm Vítor Santos! I'm a Software Developer with experience in web systems development, process automation, AI agents with RAG, SQL search tools, desktop applications and APIs. I always strive to deliver beyond expectations on the projects I'm assigned to, maximizing performance using modern technologies.",
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
