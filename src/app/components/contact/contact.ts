import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reveal } from '../../services/reveal';
import { I18nService } from '../../services/i18n';       // ajout

@Component({
  selector: 'app-contact',
  imports: [FormsModule, Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected i18n = inject(I18nService);                  // ajout

  // ↓ mets tes vraies coordonnées
  protected readonly email = 'ton.email@exemple.com';
  protected readonly linkedin = 'https://linkedin.com/in/ton-profil';
  protected readonly github = 'https://github.com/ton-compte';

  protected name = signal('');
  protected senderEmail = signal('');
  protected message = signal('');
  protected sent = signal(false);

  send(): void {
    const subject = encodeURIComponent(`Contact portfolio — ${this.name()}`);
    const body = encodeURIComponent(`${this.message()}\n\n— ${this.name()} (${this.senderEmail()})`);
    window.location.href = `mailto:${this.email}?subject=${subject}&body=${body}`;
    this.sent.set(true);
  }
}