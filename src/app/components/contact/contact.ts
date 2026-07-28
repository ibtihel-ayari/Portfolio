import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';          // pour ngModel
import { Reveal } from '../../services/reveal';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  // ↓ mets tes vraies coordonnées
  protected readonly email = 'ton.email@exemple.com';
  protected readonly linkedin = 'https://linkedin.com/in/ton-profil';
  protected readonly github = 'https://github.com/ton-compte';

  // un signal par champ du formulaire
  protected name = signal('');
  protected senderEmail = signal('');
  protected message = signal('');
  protected sent = signal(false);

  // ouvre le client mail pré-rempli
  send(): void {
    const subject = encodeURIComponent(`Contact portfolio — ${this.name()}`);
    const body = encodeURIComponent(`${this.message()}\n\n— ${this.name()} (${this.senderEmail()})`);
    window.location.href = `mailto:${this.email}?subject=${subject}&body=${body}`;
    this.sent.set(true);
  }
}