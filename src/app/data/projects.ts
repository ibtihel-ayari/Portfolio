export interface Project {
  ref: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  image?: string;        // le "?" = champ optionnel
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    ref: '01',
    title: 'Nom de ton application web',
    summary: 'Une application web complète avec authentification et tableau de bord.',
    description: "Décris ton projet phare : contexte, ce que tu as construit, ton rôle et le résultat.",
    technologies: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL'],
    image: 'projects/placeholder.svg',
    featured: true,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/ton-compte/ton-repo',
  },
  {
    ref: '02', title: 'Titre du projet',
    summary: 'Une phrase qui résume le problème résolu.',
    description: 'Contexte, ce que tu as fait, technologies, résultat.',
    technologies: ['Angular', 'RxJS'], image: 'projects/placeholder.svg',
    githubUrl: 'https://github.com/ton-compte/ton-repo',
  },
  {
    ref: '03', title: 'Titre du projet',
    summary: 'Une phrase qui résume le problème résolu.',
    description: 'Contexte, ce que tu as fait, technologies, résultat.',
    technologies: ['React', 'Node.js', 'MongoDB'], image: 'projects/placeholder.svg',
    demoUrl: 'https://example.com', githubUrl: 'https://github.com/ton-compte/ton-repo',
  },
];