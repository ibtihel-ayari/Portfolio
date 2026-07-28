import { Directive, ElementRef, OnInit, OnDestroy, inject } from '@angular/core';

@Directive({
  selector: '[appReveal]',   // s'active sur tout élément avec l'attribut appReveal
})
export class Reveal implements OnInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);   // référence à l'élément hôte
  private observer?: IntersectionObserver;

  ngOnInit(): void {                       // s'exécute quand la directive est prête
    this.el.nativeElement.classList.add('reveal');   // état de départ (invisible)
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {                  // l'élément est visible
          entry.target.classList.add('is-visible');  // -> déclenche l'animation
          this.observer?.unobserve(entry.target);    // on n'observe plus (1 fois suffit)
        }
      });
    }, { threshold: 0.12 });
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }  // nettoyage
}