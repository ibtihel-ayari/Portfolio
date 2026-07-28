import { Component } from '@angular/core';
import { Reveal } from '../../services/reveal';   // pour utiliser appReveal

@Component({
  selector: 'app-about',
  imports: [Reveal],                    // <-- on importe la directive
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected stats = [
    { value: '3+',   label: "années d'expérience en développement" },
    { value: '10+',  label: 'projets livrés' },
    { value: '100%', label: 'orientée détail & qualité de code' },
  ];
}