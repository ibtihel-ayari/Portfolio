import { Injectable, signal } from '@angular/core';

type Theme = 'dark' | 'light';

// @Injectable + providedIn:'root' = service unique, disponible partout
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>('dark');   // signal exposé aux composants

  constructor() {
    // le constructeur s'exécute à la création du service
    const saved = this.readSaved();
    const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
    this.apply(saved ?? (prefersLight ? 'light' : 'dark'));
  }

  toggle(): void {
    this.apply(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private apply(theme: Theme): void {
    this.theme.set(theme);
    // on ajoute/retire la classe .light sur <html> -> les variables CSS basculent
    document.documentElement.classList.toggle('light', theme === 'light');
    try { localStorage.setItem('theme', theme); } catch { /* ignore */ }
  }

  private readSaved(): Theme | null {
    try {
      const v = localStorage.getItem('theme');
      return v === 'light' || v === 'dark' ? v : null;
    } catch { return null; }
  }
}