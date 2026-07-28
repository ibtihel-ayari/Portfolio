import { Component, HostListener, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme';   // créé à l'étape 6

interface NavLink { label: string; href: string; }

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  // inject() : la façon moderne de récupérer un service (voir étape 6)
  protected theme = inject(ThemeService);

  // Deux signals : "a-t-on scrollé ?" et "le menu mobile est-il ouvert ?"
  protected scrolled = signal(false);
  protected menuOpen = signal(false);

  // Un simple tableau de données pour générer les liens
  protected links: NavLink[] = [
    { label: 'Profil', href: '#about' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Projets', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  // @HostListener écoute un événement global. Ici : le scroll de la fenêtre.
  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);   // on met à jour le signal
  }

  toggleMenu(): void { this.menuOpen.update((v) => !v); }  // inverse la valeur
  closeMenu(): void { this.menuOpen.set(false); }
}