import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';   // adapte le chemin/nom si besoin

@Component({
  selector: 'app-root',
  imports: [Hero],          // on déclare le composant utilisé
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}