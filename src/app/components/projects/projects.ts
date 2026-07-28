import { Component } from '@angular/core';
import { Reveal } from '../../services/reveal';
import { PROJECTS, Project } from '../../data/projects';

@Component({
  selector: 'app-projects',
  imports: [Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected projects: Project[] = PROJECTS;
}