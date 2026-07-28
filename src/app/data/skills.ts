export interface SkillGroup {
  label: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  { label: 'Langages',        items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'] },
  { label: 'Frontend',        items: ['Angular', 'RxJS', 'HTML5 / SCSS', 'Angular Material', 'Responsive'] },
  { label: 'Backend',         items: ['Node.js', 'Spring Boot', 'API REST', 'PostgreSQL', 'MongoDB'] },
  { label: 'Outils & DevOps', items: ['Git / GitHub', 'Docker', 'CI/CD', 'Figma', 'VS Code'] },
];