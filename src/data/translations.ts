import type { Language } from '../hooks/useLanguage';

export type TranslationKey =
  // Navigation
  | 'nav.projects'
  | 'nav.career'
  | 'nav.skills'
  | 'nav.services'
  | 'nav.contact'
  | 'nav.downloadCV'
  | 'nav.goToStart'
  | 'nav.openMenu'
  | 'nav.closeMenu'
  // Theme toggle
  | 'theme.lightMode'
  | 'theme.darkMode'
  // Language toggle
  | 'language.switchToPtBr'
  | 'language.switchToEnUs'
  | 'language.currentLanguage'
  // Hero
  | 'hero.greeting'
  | 'hero.viewProjects'
  | 'hero.downloadCV'
  | 'hero.scrollToProjects'
  | 'hero.presentation'
  // Projects
  | 'projects.label'
  | 'projects.title'
  | 'projects.subtitle'
  | 'projects.all'
  | 'projects.filterByTech'
  | 'projects.featured'
  | 'projects.hideDescription'
  | 'projects.moreDetails'
  | 'projects.techsUsed'
  | 'projects.viewDemo'
  | 'projects.viewRepo'
  | 'projects.liveDemo'
  | 'projects.empty'
  // Career
  | 'career.label'
  | 'career.title'
  | 'career.subtitle'
  | 'career.timeline'
  | 'career.responsibilities'
  | 'career.technologies'
  // Skills
  | 'skills.label'
  | 'skills.title'
  | 'skills.subtitle'
  | 'skills.skillsOf'
  // Services
  | 'services.label'
  | 'services.title'
  | 'services.subtitle'
  | 'services.rag.title'
  | 'services.rag.description'
  | 'services.aiIntegration.title'
  | 'services.aiIntegration.description'
  | 'services.api.title'
  | 'services.api.description'
  | 'services.websites.title'
  | 'services.websites.description'
  | 'services.ecommerce.title'
  | 'services.ecommerce.description'
  | 'services.automation.title'
  | 'services.automation.description'
  // Contact
  | 'contact.label'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.letsTalk'
  | 'contact.infoText'
  | 'contact.contactInfo'
  | 'contact.profileGithub'
  | 'contact.profileLinkedin'
  | 'contact.name'
  | 'contact.namePlaceholder'
  | 'contact.nameRequired'
  | 'contact.email'
  | 'contact.emailPlaceholder'
  | 'contact.emailRequired'
  | 'contact.emailInvalid'
  | 'contact.subject'
  | 'contact.subjectPlaceholder'
  | 'contact.subjectRequired'
  | 'contact.message'
  | 'contact.messagePlaceholder'
  | 'contact.messageRequired'
  | 'contact.messageMinLength'
  | 'contact.sending'
  | 'contact.send'
  | 'contact.successTitle'
  | 'contact.successMessage'
  | 'contact.sendAnother'
  | 'contact.errorMessage'
  // Footer
  | 'footer.github'
  | 'footer.linkedin';

type TranslationMap = Record<TranslationKey, string>;

export const translations: Record<Language, TranslationMap> = {
  'pt-BR': {
    // Navigation
    'nav.projects': 'Projetos',
    'nav.career': 'Carreira',
    'nav.skills': 'Habilidades',
    'nav.services': 'Serviços',
    'nav.contact': 'Contato',
    'nav.downloadCV': 'Download CV',
    'nav.goToStart': 'Ir para o início',
    'nav.openMenu': 'Abrir menu',
    'nav.closeMenu': 'Fechar menu',
    // Theme toggle
    'theme.lightMode': 'Ativar modo claro',
    'theme.darkMode': 'Ativar modo escuro',
    // Language toggle
    'language.switchToPtBr': 'Mudar para Português',
    'language.switchToEnUs': 'Switch to English',
    'language.currentLanguage': 'PT',
    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.viewProjects': 'Ver Projetos',
    'hero.downloadCV': 'Download CV',
    'hero.scrollToProjects': 'Rolar para projetos',
    'hero.presentation': 'Apresentação',
    // Projects
    'projects.label': 'Portfólio',
    'projects.title': 'Meus Projetos',
    'projects.subtitle': 'Seleção de projetos que demonstram minhas habilidades técnicas e paixão por construir produtos úteis.',
    'projects.all': 'Todos',
    'projects.filterByTech': 'Filtrar projetos por tecnologia',
    'projects.featured': 'Destaque',
    'projects.hideDescription': 'Ocultar',
    'projects.moreDetails': 'Mais detalhes',
    'projects.techsUsed': 'Tecnologias usadas',
    'projects.viewDemo': 'Ver demo de',
    'projects.viewRepo': 'Ver repositório de',
    'projects.liveDemo': 'Demo ao vivo',
    'projects.empty': 'Nenhum projeto encontrado para essa tecnologia.',
    // Career
    'career.label': 'Experiência',
    'career.title': 'Carreira',
    'career.subtitle': 'Minha trajetória profissional desenvolvendo produtos digitais de impacto.',
    'career.timeline': 'Linha do tempo da carreira',
    'career.responsibilities': 'Responsabilidades',
    'career.technologies': 'Tecnologias',
    // Skills
    'skills.label': 'Tecnologias',
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Stack técnico que utilizo para construir produtos robustos do front ao back-end.',
    'skills.skillsOf': 'Habilidades de',
    // Services
    'services.label': 'Serviços',
    'services.title': 'Como posso te ajudar',
    'services.subtitle': 'Soluções sob medida para transformar ideias em produtos reais, automatizar processos e integrar inteligência artificial ao seu negócio.',
    'services.rag.title': 'Sistemas de RAG',
    'services.rag.description': 'Criação de agentes de IA com Retrieval-Augmented Generation: faça perguntas sobre seus documentos, bases de conhecimento ou dados internos com respostas precisas e contextualizadas.',
    'services.aiIntegration.title': 'Integração de IA em Sistemas',
    'services.aiIntegration.description': 'Integro modelos de linguagem (GPT, LLaMA, etc.) em sistemas existentes: chatbots, automação de processos, análise de dados e qualquer fluxo que possa se beneficiar de inteligência artificial.',
    'services.api.title': 'Criação de APIs',
    'services.api.description': 'Desenvolvimento de APIs RESTful robustas e escaláveis com FastAPI ou Django REST Framework, desde microsserviços até backends completos com autenticação, documentação e testes.',
    'services.websites.title': 'Criação de Sites',
    'services.websites.description': 'Sites modernos, responsivos e otimizados para SEO, com foco em desempenho e experiência do usuário. Do portfólio ao site institucional, sempre com as melhores tecnologias.',
    'services.ecommerce.title': 'E-commerces',
    'services.ecommerce.description': 'Plataformas de e-commerce completas com controle de estoque, catálogo de produtos, gestão de pedidos e integração com meios de pagamento — tudo centralizado e fácil de gerenciar.',
    'services.automation.title': 'Automação de Processos',
    'services.automation.description': 'Identifico tarefas repetitivas na sua empresa e automatizo com scripts, bots ou agentes inteligentes, poupando horas de trabalho manual e reduzindo erros operacionais.',
    // Contact
    'contact.label': 'Contato',
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Tem um projeto em mente ou quer bater um papo? Estou disponível para novas oportunidades.',
    'contact.letsTalk': 'Vamos conversar',
    'contact.infoText': 'Sinta-se à vontade para me contatar por email ou pelo formulário. Respondo em até 24 horas.',
    'contact.contactInfo': 'Informações de contato',
    'contact.profileGithub': 'Perfil GitHub',
    'contact.profileLinkedin': 'Perfil LinkedIn',
    'contact.name': 'Nome',
    'contact.namePlaceholder': 'Seu nome',
    'contact.nameRequired': 'Nome é obrigatório',
    'contact.email': 'E-mail',
    'contact.emailPlaceholder': 'seu@email.com',
    'contact.emailRequired': 'E-mail é obrigatório',
    'contact.emailInvalid': 'E-mail inválido',
    'contact.subject': 'Assunto',
    'contact.subjectPlaceholder': 'Do que se trata?',
    'contact.subjectRequired': 'Assunto é obrigatório',
    'contact.message': 'Mensagem',
    'contact.messagePlaceholder': 'Escreva sua mensagem...',
    'contact.messageRequired': 'Mensagem é obrigatória',
    'contact.messageMinLength': 'Mensagem deve ter ao menos 10 caracteres',
    'contact.sending': 'Enviando...',
    'contact.send': 'Enviar Mensagem',
    'contact.successTitle': 'Mensagem enviada!',
    'contact.successMessage': 'Obrigado pelo contato. Responderei em breve.',
    'contact.sendAnother': 'Enviar outra mensagem',
    'contact.errorMessage': 'Falha ao enviar. Tente novamente ou entre em contato diretamente por e-mail.',
    // Footer
    'footer.github': 'GitHub de Vítor Santos',
    'footer.linkedin': 'LinkedIn de Vítor Santos',
  },
  'en-US': {
    // Navigation
    'nav.projects': 'Projects',
    'nav.career': 'Career',
    'nav.skills': 'Skills',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.downloadCV': 'Download CV',
    'nav.goToStart': 'Go to start',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    // Theme toggle
    'theme.lightMode': 'Enable light mode',
    'theme.darkMode': 'Enable dark mode',
    // Language toggle
    'language.switchToPtBr': 'Mudar para Português',
    'language.switchToEnUs': 'Switch to English',
    'language.currentLanguage': 'EN',
    // Hero
    'hero.greeting': "Hi, I'm",
    'hero.viewProjects': 'View Projects',
    'hero.downloadCV': 'Download CV',
    'hero.scrollToProjects': 'Scroll to projects',
    'hero.presentation': 'Introduction',
    // Projects
    'projects.label': 'Portfolio',
    'projects.title': 'My Projects',
    'projects.subtitle': 'A selection of projects that showcase my technical skills and passion for building useful products.',
    'projects.all': 'All',
    'projects.filterByTech': 'Filter projects by technology',
    'projects.featured': 'Featured',
    'projects.hideDescription': 'Hide',
    'projects.moreDetails': 'More details',
    'projects.techsUsed': 'Technologies used',
    'projects.viewDemo': 'View demo of',
    'projects.viewRepo': 'View repository of',
    'projects.liveDemo': 'Live demo',
    'projects.empty': 'No projects found for this technology.',
    // Career
    'career.label': 'Experience',
    'career.title': 'Career',
    'career.subtitle': 'My professional journey building impactful digital products.',
    'career.timeline': 'Career timeline',
    'career.responsibilities': 'Responsibilities',
    'career.technologies': 'Technologies',
    // Skills
    'skills.label': 'Technologies',
    'skills.title': 'Skills',
    'skills.subtitle': 'The tech stack I use to build robust products from front to back-end.',
    'skills.skillsOf': 'Skills in',
    // Services
    'services.label': 'Services',
    'services.title': 'How I Can Help You',
    'services.subtitle': 'Tailored solutions to turn ideas into real products, automate processes, and integrate AI into your business.',
    'services.rag.title': 'RAG Systems',
    'services.rag.description': 'Building AI agents with Retrieval-Augmented Generation: ask questions about your documents, knowledge bases, or internal data with precise and contextualized answers.',
    'services.aiIntegration.title': 'AI Integration',
    'services.aiIntegration.description': 'I integrate language models (GPT, LLaMA, etc.) into existing systems: chatbots, process automation, data analysis, and any workflow that can benefit from AI.',
    'services.api.title': 'API Development',
    'services.api.description': 'Development of robust and scalable RESTful APIs with FastAPI or Django REST Framework, from microservices to complete backends with authentication, documentation, and testing.',
    'services.websites.title': 'Website Development',
    'services.websites.description': 'Modern, responsive websites optimized for SEO, focused on performance and user experience. From portfolios to corporate sites, always with the best technologies.',
    'services.ecommerce.title': 'E-commerce',
    'services.ecommerce.description': 'Complete e-commerce platforms with inventory control, product catalog, order management, and payment integration — all centralized and easy to manage.',
    'services.automation.title': 'Process Automation',
    'services.automation.description': 'I identify repetitive tasks in your company and automate them with scripts, bots, or intelligent agents, saving hours of manual work and reducing operational errors.',
    // Contact
    'contact.label': 'Contact',
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Have a project in mind or want to chat? I am available for new opportunities.',
    'contact.letsTalk': "Let's talk",
    'contact.infoText': 'Feel free to contact me by email or through the form. I respond within 24 hours.',
    'contact.contactInfo': 'Contact information',
    'contact.profileGithub': 'GitHub Profile',
    'contact.profileLinkedin': 'LinkedIn Profile',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.nameRequired': 'Name is required',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.emailRequired': 'Email is required',
    'contact.emailInvalid': 'Invalid email',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'What is it about?',
    'contact.subjectRequired': 'Subject is required',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Write your message...',
    'contact.messageRequired': 'Message is required',
    'contact.messageMinLength': 'Message must be at least 10 characters',
    'contact.sending': 'Sending...',
    'contact.send': 'Send Message',
    'contact.successTitle': 'Message sent!',
    'contact.successMessage': 'Thank you for reaching out. I will reply soon.',
    'contact.sendAnother': 'Send another message',
    'contact.errorMessage': 'Failed to send. Please try again or contact me directly by email.',
    // Footer
    'footer.github': "Vítor Santos' GitHub",
    'footer.linkedin': "Vítor Santos' LinkedIn",
  },
};
