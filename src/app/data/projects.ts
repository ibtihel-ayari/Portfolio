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
      fr: 'RecruitIA – Plateforme de recrutement assistée par IA',
      en: 'RecruitIA – AI-Assisted Recruitment Platform',
    },
    summary: {
      fr: "Plateforme full-stack de recrutement intégrant une API sécurisée, un tableau de bord d'administration et des fonctionnalités d'IA pour automatiser la sélection des candidats.",
      en: "Full-stack recruitment platform featuring a secure API, an administration dashboard and AI-powered tools to streamline candidate selection.",
    },
    description: {
      fr: "Conception et développement d'une plateforme de recrutement basée sur une architecture .NET/Angular. L'application expose une API REST sécurisée avec authentification, autorisation par rôles et gestion des candidatures. Un module d'intelligence artificielle analyse les CV, génère automatiquement des questionnaires adaptés aux offres d'emploi et assiste la supervision des candidats pendant les évaluations. L'ensemble est conçu autour d'une architecture modulaire facilitant l'évolution et la maintenance de l'application.",
      en: "Designed and developed a recruitment platform built on a .NET/Angular architecture. The application exposes a secure REST API with authentication, role-based authorization and candidate management. An AI module analyzes résumés, generates job-specific assessments and assists candidate monitoring during evaluations. The project follows a modular architecture designed for maintainability and scalability.",
    },
    technologies: [
      'Angular',
      'TypeScript',
      '.NET',
      'SQL Server'
    ],
    image: 'projects/recruitia.webp',
    featured: true,
    demoUrl: 'https://github.com/ibtihel-ayari/RecruitmentAppBackend',
    githubUrl: 'https://github.com/ibtihel-ayari/RecruitmentAppFrontEnd',
  },

  {
    ref: '02',
    title: {
      fr: 'Audit comptable assisté par IA',
      en: 'AI-Assisted Accounting Audit',
    },
    summary: {
      fr: "Application d'analyse comptable détectant automatiquement les anomalies d'un journal d'écritures grâce à un moteur de règles métier complété par un LLM.",
      en: "Accounting analysis application that automatically detects anomalies using deterministic business rules combined with an LLM.",
    },
    description: {
      fr: "Développement d'un outil d'aide au contrôle comptable capable d'analyser des fichiers CSV ou FEC et d'identifier les incohérences, écritures déséquilibrées, erreurs de TVA et opérations suspectes. L'architecture repose sur une séparation stricte entre un moteur déterministe implémentant les règles métier avec Python et Pandas, et un LLM chargé uniquement d'expliquer les résultats en langage naturel. Cette approche garantit des analyses fiables, reproductibles et indépendantes du modèle d'IA. Le projet comprend une API FastAPI, des tests automatisés avec Pytest ainsi qu'un mode de fonctionnement local sans dépendance à une API externe.",
      en: "Developed an accounting audit tool capable of analyzing CSV and FEC files to detect inconsistencies, VAT errors, unbalanced entries and suspicious transactions. The architecture separates deterministic business-rule processing implemented with Python and Pandas from an LLM responsible only for generating human-readable explanations. This design ensures reliable, reproducible analyses independent of the AI model. The project includes a FastAPI backend, automated Pytest test suite and an offline fallback mode.",
    },
    technologies: [
      'Python',
      'FastAPI',
      'Pandas',
      'Pydantic',
      'Anthropic API',
      'Pytest',
      'Angular'
    ],
    image: 'projects/audit-comptable-ia.webp',
    githubUrl: 'https://github.com/ton-compte/audit-comptable-ia',
  },

  {
    ref: '03',
    title: {
      fr: 'DataChat – Plateforme d’analyse de données assistée par IA',
      en: 'DataChat – AI-Powered Data Analytics Platform',
    },
    summary: {
      fr: "Application permettant d'interroger des fichiers CSV ou Excel en langage naturel et de générer automatiquement des visualisations interactives.",
      en: "Application that transforms natural language questions into interactive data visualizations from CSV and Excel files.",
    },
    description: {
      fr: "Développement d'une plateforme d'analyse de données reposant sur une architecture sécurisée à deux niveaux. Un LLM traduit les requêtes utilisateur en un plan d'analyse structuré au format JSON, tandis qu'un moteur déterministe basé sur Pandas exécute les traitements sans jamais exécuter de code généré par l'IA. Seul le schéma des données est transmis au modèle afin de préserver la confidentialité des fichiers et de limiter les hallucinations. Un planificateur local basé sur des règles permet également d'utiliser l'application sans clé API. Les graphiques sont générés dynamiquement via Chart.js.",
      en: "Developed a data analytics platform based on a secure two-layer architecture. An LLM converts natural language requests into structured JSON analysis plans while a deterministic Pandas engine executes every computation without running AI-generated code. Only the dataset schema is exposed to the model, improving privacy and reducing hallucinations. A local rule-based planner allows the application to operate even without an external AI service. Interactive visualizations are rendered dynamically with Chart.js.",
    },
    technologies: [
      'Python',
      'FastAPI',
      'Angular',
      'Pandas',
      'Chart.js',
      'Anthropic API',
      'Pytest'
    ],
    image: 'projects/datachat.webp',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/ton-compte/datachat',
  },
];