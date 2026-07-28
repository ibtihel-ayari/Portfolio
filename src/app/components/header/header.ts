import { Component, HostListener, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme';
import { I18nService } from '../../services/i18n';       

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected theme = inject(ThemeService);
  protected i18n = inject(I18nService);                  

  protected scrolled = signal(false);
  protected menuOpen = signal(false);

  // On remplace les libellés en dur par des CLÉS de traduction
  protected links = [
    { key: 'nav.about',    href: '#about' },
    { key: 'nav.skills',   href: '#skills' },
    { key: 'nav.projects', href: '#projects' },
    { key: 'nav.contact',  href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void { this.scrolled.set(window.scrollY > 24); }

  toggleMenu(): void { this.menuOpen.update((v) => !v); }
  closeMenu(): void { this.menuOpen.set(false); }
}