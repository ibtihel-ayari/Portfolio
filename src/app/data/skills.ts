import { Lang } from './translations';

export interface SkillGroup {
  label: Record<Lang, string>;   // <-- bilingue : { fr, en }
  items: string[];               
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: { fr: 'Langages', en: 'Languages' },
    items: ['Python', 'Java', 'TypeScript', 'C#'],
  },
  {
    label: { fr: 'Frontend', en: 'Frontend' },
    items: ['Angular', 'RxJS', 'HTML5 / CSS3', 'SCSS'],
  },
  {
    label: { fr: 'Backend', en: 'Backend' },
    items: ['Spring Boot', '.NET', 'Node.js', 'API REST'],
  },
  {
    label: { fr: 'IA', en: 'AI' },
    items: ['scikit-learn', 'OpenAI API', 'Intégration LLM'],
  },
  {
    label: { fr: 'Bases de données', en: 'Databases' },
    items: ['SQL Server', 'PostgreSQL', 'MongoDB'],
  },
  {
    label: { fr: 'Outils & Tests', en: 'Tools & Testing' },
    items: ['Git / GitHub', 'Docker', 'CI/CD', 'JUnit'],
  },
];