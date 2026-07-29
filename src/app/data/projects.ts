import { Lang } from './translations';   // on réutilise le type 'fr' | 'en'

type LocalizedText = Record<Lang, string>;  

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
      fr: 'RecruitIA – Application de recrutement avec IA',
      en: 'RecruitIA – AI-Powered Recruitment Application',
    },
    summary: {
      fr: 'Plateforme web de gestion du recrutement avec authentification et tableau de bord, dotée d\'un module IA (LLM) pour le filtrage des candidats, la génération de quiz et la supervision intelligente des candidats lors des évaluations.',
      en: 'Web-based recruitment management platform with authentication and a dashboard, featuring an AI module (LLM) for candidate filtering, quiz generation, and intelligent candidate proctoring during assessments.',
    },
    description: {
      fr: 'Application full-stack de gestion du recrutement conçue pour automatiser et fiabiliser le processus de sélection. Le back-end .NET expose une API sécurisée avec authentification et gestion des rôles, tandis que le front-end Angular offre un tableau de bord de suivi des candidatures. Un module d\'IA basé sur un LLM analyse et filtre les CV, génère automatiquement des quiz adaptés au poste, et supervise les candidats en temps réel pendant les évaluations afin de détecter les comportements suspects. Les données sont persistées dans SQL Server.',
      en: 'Full-stack recruitment management application designed to automate and strengthen the hiring process. The .NET back-end exposes a secure API with authentication and role management, while the Angular front-end provides a dashboard for tracking applications. An LLM-based AI module analyzes and filters résumés, automatically generates job-specific quizzes, and monitors candidates in real time during assessments to detect suspicious behavior. Data is persisted in SQL Server.',
    },
    technologies: ['Angular', 'TypeScript', '.NET', 'SQL Server'],
    image: 'projects/placeholder.svg',
    featured: true,
    demoUrl: 'https://github.com/ibtihel-ayari/RecruitmentAppBackend',
    githubUrl: 'https://github.com/ibtihel-ayari/RecruitmentAppFrontEnd',
  },
  {
    ref: '02',
    title: {
      fr: 'Audit comptable assisté par IA',
      en: 'AI-assisted accounting audit',
    },
    summary: {
      fr: "Détecte automatiquement les anomalies d'un journal comptable (doublons, erreurs de TVA, écritures déséquilibrées, opérations suspectes) et les explique en langage clair.",
      en: 'Automatically detects anomalies in an accounting journal (duplicates, VAT errors, unbalanced entries, suspicious transactions) and explains them in plain language.',
    },
    description: {
      fr: "Application web d'aide au contrôle comptable : l'utilisateur importe un journal d'écritures (CSV ou format FEC) et obtient en quelques secondes une liste d'anomalies classées par gravité, chacune accompagnée d'une explication et d'une action suggérée. L'architecture repose sur une séparation stricte en deux couches : une couche déterministe de règles métier (fonctions pures testées avec pytest) qui assure une détection exacte et reproductible, et une couche LLM qui reformule chaque anomalie en langage clair sans jamais inventer de chiffre. Un mode de repli local permet à l'application de fonctionner sans clé API. Backend FastAPI, frontend autonome, jeu de données d'exemple et suite de tests inclus.",
      en: 'Web application supporting accounting review: the user imports an entries journal (CSV or French FEC format) and gets, within seconds, a list of anomalies ranked by severity, each with an explanation and a suggested action. The architecture relies on a strict two-layer separation: a deterministic business-rules layer (pure functions tested with pytest) ensuring exact, reproducible detection, and an LLM layer that rephrases each anomaly in plain language without ever inventing figures. A local fallback mode lets the app run without an API key. FastAPI backend, standalone frontend, sample dataset and test suite included.',
    },
    technologies: ['Python', 'FastAPI', 'pandas', 'Pydantic', 'Anthropic API', 'pytest', 'Angular'],
    image: 'projects/audit-comptable-ia.svg',
    githubUrl: 'https://github.com/ton-compte/audit-comptable-ia',
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