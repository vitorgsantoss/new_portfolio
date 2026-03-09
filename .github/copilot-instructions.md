# Copilot Instructions - Portfolio Full-Stack Developer

## Project Overview

Este é um portfólio pessoal para apresentar a carreira de desenvolvedor full-stack. O projeto deve ser moderno, responsivo e profissional, destacando projetos, experiência, habilidades e formas de contato.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: CSS Modules ou Styled Components (preferir solução sem dependências extras inicialmente)
- **Linting**: ESLint com TypeScript
- **Deployment**: Otimizado para static hosting (Vercel, Netlify, GitHub Pages)

## Project Structure

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/              # Componentes de UI genéricos (Button, Card, Modal)
│   ├── layout/          # Header, Footer, Navigation, Container
│   └── sections/        # Seções da página (Hero, Projects, Career, Skills, Contact)
├── data/                # Dados estáticos (projetos, experiências, skills)
├── hooks/               # Custom hooks
├── utils/               # Funções utilitárias (ex: geração de PDF)
├── types/               # TypeScript interfaces e types
├── assets/              # Imagens, ícones, fontes
│   ├── images/
│   └── icons/
└── styles/              # Estilos globais e variáveis CSS
```

## Commands

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start development server          |
| `npm run build`   | Build for production (tsc + vite) |
| `npm run lint`    | Run ESLint                        |
| `npm run preview` | Preview production build          |

## Core Features

### 1. Projects Section

- Grid responsivo de cards de projetos
- Cada projeto deve ter: título, descrição, tecnologias usadas, imagem/screenshot, links (demo, GitHub)
- Filtro por tecnologia
- Modal ou página de detalhes

### 2. Career Section

- Timeline vertical de experiências profissionais
- Cada entrada: empresa, cargo, período, descrição, tecnologias
- Ordem cronológica reversa (mais recente primeiro)

### 3. Skills Section

- Categorização: Frontend, Backend, DevOps, Databases, Tools
- Visualização com ícones/logos das tecnologias
- Opcional: nível de proficiência (barras ou porcentagem)

### 4. Export CV (PDF)

- Botão para exportar CV em PDF
- Usar biblioteca leve como `html2pdf.js` ou `react-pdf`
- CV deve incluir: dados pessoais, resumo, experiência, skills, educação
- Layout limpo e profissional para impressão

### 5. Contact Section

- Formulário de contato com envio via email
- Campos: nome, email, assunto, mensagem
- Validação de campos
- Integração com serviço de email (EmailJS, Formspree, ou backend próprio)
- Links para redes sociais (LinkedIn, GitHub)

## Coding Conventions

### TypeScript

- Sempre tipar props de componentes com interfaces
- Usar `type` para union types e `interface` para objetos
- Evitar `any` - usar `unknown` quando necessário
- Exportar types de `src/types/`

```typescript
// Exemplo de interface para projeto
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
}
```

### React Components

- Usar functional components com hooks
- Preferir composição sobre herança
- Manter componentes pequenos e focados
- Extrair lógica complexa para custom hooks

```typescript
// Padrão de componente
interface ComponentProps {
  title: string;
  children: React.ReactNode;
}

export const Component: React.FC<ComponentProps> = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
```

### CSS/Styling

- Mobile-first approach
- Usar CSS custom properties para temas
- Breakpoints padrão: 480px, 768px, 1024px, 1280px
- Preferir `rem` para tamanhos, `em` para componentes

```css
:root {
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --color-background: #ffffff;
  --color-text: #333333;
  --font-family: "Inter", system-ui, sans-serif;
  --spacing-unit: 8px;
}
```

### File Naming

- Componentes: PascalCase (`ProjectCard.tsx`)
- Hooks: camelCase com prefixo `use` (`useProjects.ts`)
- Utils: camelCase (`formatDate.ts`)
- Types: PascalCase (`Project.ts`)
- CSS: kebab-case ou PascalCase matching component (`ProjectCard.css`)

## Data Structure Examples

### Projects Data (`src/data/projects.ts`)

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com React e Node.js",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    imageUrl: "/images/projects/ecommerce.png",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/user/ecommerce",
    featured: true,
  },
];
```

### Career Data (`src/data/career.ts`)

```typescript
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: { start: string; end: string | "Present" };
  description: string;
  technologies: string[];
  location: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tech Company",
    role: "Senior Full-Stack Developer",
    period: { start: "2023-01", end: "Present" },
    description: "Desenvolvimento de aplicações web escaláveis...",
    technologies: ["React", "TypeScript", "Node.js", "AWS"],
    location: "Remote",
  },
];
```

## Accessibility (a11y)

- Usar semantic HTML (`header`, `main`, `section`, `article`, `nav`)
- Incluir `aria-labels` em elementos interativos
- Garantir contraste adequado de cores (WCAG AA)
- Suportar navegação por teclado
- Incluir `alt` text em todas as imagens

## Performance

- Lazy loading de imagens
- Code splitting por rotas (se usar React Router)
- Otimizar imagens (WebP, tamanhos adequados)
- Minimizar bundle size
- Usar `React.memo` para componentes pesados

## SEO

- Meta tags apropriadas (title, description, og:image)
- Structured data (JSON-LD) para pessoa/portfolio
- URLs amigáveis
- Sitemap.xml

## Testing (Future)

Quando adicionar testes:

- Vitest para unit tests
- Testing Library para component tests
- Cypress ou Playwright para E2E

## Common Patterns

### Responsive Container

```tsx
<Container maxWidth="1200px" padding="0 16px">
  {children}
</Container>
```

### Section Layout

```tsx
<Section id="projects" title="Meus Projetos" subtitle="Trabalhos recentes">
  <ProjectGrid projects={projects} />
</Section>
```

## Do's and Don'ts

### Do

- Escrever código limpo e autodocumentado
- Seguir princípios SOLID
- Usar early returns para reduzir aninhamento
- Tratar erros adequadamente
- Manter consistência no código

### Don't

- Usar `any` sem justificativa
- Deixar console.logs no código final
- Hardcodar strings que devem ser configuráveis
- Ignorar warnings do TypeScript ou ESLint
- Criar componentes com mais de 200 linhas
