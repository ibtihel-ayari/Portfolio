import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n';  
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected year = new Date().getFullYear();  
  protected i18n = inject(I18nService); 
}