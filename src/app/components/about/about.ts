import { Component, inject } from '@angular/core';
import { Reveal } from '../../services/reveal';
import { I18nService } from '../../services/i18n';

@Component({
  selector: 'app-about',
  imports: [Reveal],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected i18n = inject(I18nService);          // <-- la ligne qui manquait

  protected stats = [
    { value: '1+',   key: 'about.stat1' },
    { value: '2+',  key: 'about.stat2' },
    { value: '100%', key: 'about.stat3' },
  ];
}