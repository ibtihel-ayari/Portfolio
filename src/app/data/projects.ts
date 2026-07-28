import { Lang } from './translations';   // on réutilise le type 'fr' | 'en'

// Un texte traduisible = une valeur par langue
type LocalizedText = Record<Lang, string>;   // équivaut à { fr: string; en: string }

export interface Project {
  ref: string;
  title: LocalizedText;         // <-- bilingue
  summary: LocalizedText;       // <-- bilingue
  description: LocalizedText;   // <-- bilingue
  technologies: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    ref: '01',
    title: {
      fr: 'Nom de ton application web',
      en: 'Your web app name',
    },
    summary: {
      fr: 'Une application web complète avec authentification et tableau de bord.',
      en: 'A full web application with authentication and a dashboard.',
    },
    description: {
      fr: "Décris ton projet phare : contexte, ce que tu as construit, ton rôle et le résultat.",
      en: 'Describe your featured project: context, what you built, your role and the outcome.',
    },
    technologies: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL'],
    image: 'projects/placeholder.svg',
    featured: true,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/ton-compte/ton-repo',
  },
  {
    ref: '02',
    title:   { fr: 'Titre du projet', en: 'Project title' },
    summary: { fr: 'Une phrase qui résume le problème résolu.', en: 'One sentence summarizing the problem solved.' },
    description: { fr: 'Contexte, ce que tu as fait, technologies, résultat.', en: 'Context, what you did, technologies, outcome.' },
    technologies: ['Angular', 'RxJS'],
    image: 'projects/placeholder.svg',
    githubUrl: 'https://github.com/ton-compte/ton-repo',
  },
  {
    ref: '03',
    title:   { fr: 'Titre du projet', en: 'Project title' },
    summary: { fr: 'Une phrase qui résume le problème résolu.', en: 'One sentence summarizing the problem solved.' },
    description: { fr: 'Contexte, ce que tu as fait, technologies, résultat.', en: 'Context, what you did, technologies, outcome.' },
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: 'projects/placeholder.svg',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/ton-compte/ton-repo',
  },
];