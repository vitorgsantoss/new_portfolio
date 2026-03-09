import './Services.css';

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: '🤖',
    title: 'Sistemas de RAG',
    description:
      'Criação de agentes de IA com Retrieval-Augmented Generation: faça perguntas sobre seus documentos, bases de conhecimento ou dados internos com respostas precisas e contextualizadas.',
  },
  {
    icon: '🔗',
    title: 'Integração de IA em Sistemas',
    description:
      'Integro modelos de linguagem (GPT, LLaMA, etc.) em sistemas existentes: chatbots, automação de processos, análise de dados e qualquer fluxo que possa se beneficiar de inteligência artificial.',
  },
  {
    icon: '⚡',
    title: 'Criação de APIs',
    description:
      'Desenvolvimento de APIs RESTful robustas e escaláveis com FastAPI ou Django REST Framework, desde microsserviços até backends completos com autenticação, documentação e testes.',
  },
  {
    icon: '🌐',
    title: 'Criação de Sites',
    description:
      'Sites modernos, responsivos e otimizados para SEO, com foco em desempenho e experiência do usuário. Do portfólio ao site institucional, sempre com as melhores tecnologias.',
  },
  {
    icon: '🛒',
    title: 'E-commerces',
    description:
      'Plataformas de e-commerce completas com controle de estoque, catálogo de produtos, gestão de pedidos e integração com meios de pagamento — tudo centralizado e fácil de gerenciar.',
  },
  {
    icon: '🔄',
    title: 'Automação de Processos',
    description:
      'Identifico tarefas repetitivas na sua empresa e automatizo com scripts, bots ou agentes inteligentes, poupando horas de trabalho manual e reduzindo erros operacionais.',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="services section" aria-labelledby="services-title">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">Serviços</p>
          <h2 id="services-title" className="section__title">
            Como posso te ajudar
          </h2>
          <p className="section__subtitle">
            Soluções sob medida para transformar ideias em produtos reais, automatizar processos e
            integrar inteligência artificial ao seu negócio.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <span className="service-card__icon" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
