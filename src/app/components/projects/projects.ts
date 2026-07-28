import { Component, inject } from '@angular/core';
import { Reveal } from '../../services/reveal';
import { I18nService } from '../../services/i18n';
import { PROJECTS, Project } from '../../data/projects';

@Component({
  selector: 'app-projects',
  imports: [Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected i18n = inject(I18nService);        
  protected projects: Project[] = PROJECTS;
}