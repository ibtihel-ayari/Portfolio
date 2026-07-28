import { Lang } from './translations';

export interface SkillGroup {
  label: Record<Lang, string>;   // <-- bilingue : { fr, en }
  items: string[];               // les technos ne changent pas
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: { fr: 'Langages', en: 'Languages' },
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'],
  },
  {
    label: { fr: 'Frontend', en: 'Frontend' },
    items: ['Angular', 'RxJS', 'HTML5 / SCSS', 'Angular Material', 'Responsive'],
  },
  {
    label: { fr: 'Backend', en: 'Backend' },
    items: ['Node.js', 'Spring Boot', 'API REST', 'PostgreSQL', 'MongoDB'],
  },
  {
    label: { fr: 'Outils & DevOps', en: 'Tools & DevOps' },
    items: ['Git / GitHub', 'Docker', 'CI/CD', 'Figma', 'VS Code'],
  },
];