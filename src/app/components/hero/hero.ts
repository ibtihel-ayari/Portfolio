import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n';
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

    protected i18n = inject(I18nService);

}
