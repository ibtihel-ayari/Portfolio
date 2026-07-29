import { Injectable, signal } from '@angular/core';
import { TRANSLATIONS, Lang } from '../data/translations';

@Injectable({ providedIn: 'root' })
export class I18nService {
  // La langue active, dans un signal réactif (anglais par défaut)
  readonly lang = signal<Lang>('en');

  constructor() {
    // On restaure la langue choisie lors d'une visite précédente
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'fr' || saved === 'en') this.lang.set(saved);
    } catch { /* localStorage indisponible : on garde le défaut */ }
  }

  // La fonction de traduction : t('cle') renvoie le texte dans la langue active
  t(key: string): string {
    const entry = TRANSLATIONS[key];
    if (!entry) return key;            // clé inconnue : on renvoie la clé (utile pour repérer un oubli)
    return entry[this.lang()];         // sinon le texte dans la langue courante
  }

  // Bascule FR <-> EN
  toggle(): void {
    const next: Lang = this.lang() === 'fr' ? 'en' : 'fr';
    this.lang.set(next);
    try { localStorage.setItem('lang', next); } catch { /* ignore */ }
    // Bonus accessibilité : on met à jour l'attribut lang du document
    document.documentElement.lang = next;
  }
}