import { Component } from '@angular/core';
import { Reveal } from '../../services/reveal';
import { SKILL_GROUPS, SkillGroup } from '../../data/skills';

@Component({
  selector: 'app-skills',
  imports: [Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected groups: SkillGroup[] = SKILL_GROUPS;
}