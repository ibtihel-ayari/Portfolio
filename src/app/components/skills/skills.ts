import { Component, inject } from '@angular/core';
import { Reveal } from '../../services/reveal';
import { I18nService } from '../../services/i18n';
import { SKILL_GROUPS, SkillGroup } from '../../data/skills';

@Component({
  selector: 'app-skills',
  imports: [Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected i18n = inject(I18nService);            
  protected groups: SkillGroup[] = SKILL_GROUPS;
}