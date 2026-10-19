// Fonte unica de conteudo do portfolio.
// Dados extraidos de github.com/tavaresslc (perfil + READMEs dos repositorios).
import { env } from "../config/env";

export type Bilingual = { pt: string; en: string };

export type Project = {
  id: string;
  name: string;
  repo: string;
  live?: string;
  /** Se existir, usa a imagem/GIF real em /public/projects em vez da ilustracao. */
  image?: string;
  preview: "diaw" | "ml" | "recfacil" | "clima" | "curriq";
  description: Bilingual;
  tech: string[];
};

const gh = (repo: string) => `https://github.com/${env.GITHUB}/${repo}`;

// Ordem cronologica: do mais antigo ao mais recente.
export const projects: Project[] = [
  {
    id: "projetos-diaw",
    name: "projetos-diaw",
    repo: gh("projetos-diaw"),
    preview: "diaw",
    description: {
      pt: "Repositório com os projetos da disciplina de Desenvolvimento de Interfaces e Aplicações Web (DIAW).",
      en: "Repository with the projects from the Web Interfaces and Applications Development (DIAW) course.",
    },
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "machine-learning",
    name: "machine-learning",
    repo: gh("machine-learning"),
    preview: "ml",
    description: {
      pt: "Dois experimentos em notebook: classificação binária no MNIST (5 vs 7) comparando SGDClassifier e GaussianNB, e predição de prioridade de chamados de manutenção com NLP (TF-IDF + Naive Bayes, ~93% de acurácia).",
      en: "Two notebook experiments: binary MNIST classification (5 vs 7) comparing SGDClassifier and GaussianNB, and maintenance-ticket priority prediction with NLP (TF-IDF + Naive Bayes, ~93% accuracy).",
    },
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "NLTK", "Matplotlib", "Google Colab"],
  },
  {
    id: "recfacil-prototipo",
    name: "RecFácil",
    repo: gh("recfacil-prototipo"),
    live: `https://${env.GITHUB}.github.io/recfacil-prototipo/`,
    preview: "recfacil",
    description: {
      pt: "Protótipo navegável do RecFácil, publicado no GitHub Pages.",
      en: "Clickable prototype of RecFácil, published on GitHub Pages.",
    },
    tech: ["TypeScript", "GitHub Pages"],
  },
  {
    id: "clima-api",
    name: "clima-api",
    repo: gh("clima-api"),
    preview: "clima",
    description: {
      pt: "API REST em Spring Boot que consulta as APIs Open-Meteo (geocoding e previsão) e devolve temperatura, umidade, vento, mín/máx e descrição do tempo para qualquer cidade - Belo Horizonte por padrão.",
      en: "Spring Boot REST API that queries the Open-Meteo geocoding and forecast APIs and returns temperature, humidity, wind, min/max and weather description for any city - Belo Horizonte by default.",
    },
    tech: ["Java 25", "Spring Boot", "Maven", "Open-Meteo API"],
  },
  {
    id: "curriq",
    name: "curriq",
    repo: gh("curriq"),
    preview: "curriq",
    description: {
      pt: "Aplicação full stack com autenticação, gerenciamento de perguntas e busca por similaridade vetorial (embeddings Gemini + pgvector): responde perguntas com base em chunks de texto de uma base de dados.",
      en: "Full stack app with authentication, question management and vector similarity search (Gemini embeddings + pgvector): answers questions based on text chunks from a database.",
    },
    tech: ["TypeScript", "Fastify", "Drizzle ORM", "PostgreSQL", "pgvector", "React", "Vite", "Tailwind", "Gemini", "Docker"],
  },
];

export type Experience = {
  id: string;
  org: string;
  role: Bilingual;
  period: Bilingual;
  description: Bilingual;
  kind: "edu" | "oss" | "work";
  link?: string;
};

// Itens verificados no GitHub. Para incluir estagios/freelas do LinkedIn,
// basta adicionar novos objetos nesta lista (veja o README).
export const experiences: Experience[] = [
  {
    id: "puc",
    org: "PUC",
    kind: "edu",
    role: {
      pt: "Graduação em Engenharia de Software",
      en: "B.Sc. in Software Engineering",
    },
    period: { pt: "Em andamento", en: "In progress" },
    description: {
      pt: "Formação em desenvolvimento de software, com projetos práticos de web, APIs, bancos de dados e aprendizado de máquina ao longo do curso.",
      en: "Studies in software development, with hands-on web, API, database and machine learning projects throughout the course.",
    },
  },
  {
    id: "prodemge",
    org: "Prodemge",
    kind: "work",
    link: `https://github.com/${env.GITHUB}`,
    role: {
      pt: "Desenvolvedor de Software Full Stack",
      en: "Full Stack Software Developer",
    },
    period: { pt: "2024 - Atual", en: "2024 - Present" },
    description: {
      pt: "Desenvolvimento de aplicações web e APIs REST, com foco em Angular, Laravel, Spring Boot e MySQL. Participação em projetos de modernização e integração de sistemas legados da área da saúde.",
      en: "Development of web applications and REST APIs, with a focus on Angular, Laravel, Spring Boot and MySQL. Participation in projects of modernization and integration of legacy systems in the health sector.",
    },
  },
];

export const stack = [
  "JavaScript", "TypeScript", "React", "Angular", "HTML", "CSS", "Tailwind",
  "Java", "Spring", "PHP", "Laravel", "Python", "Swift", "C", "C++",
];
