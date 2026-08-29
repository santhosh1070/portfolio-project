import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({ selector: '[appTilt]' })
export class TiltDirective {
  private readonly element = inject(ElementRef<HTMLElement>);

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const node = this.element.nativeElement;
    const bounds = node.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    node.style.setProperty('--tilt-x', `${y * -5}deg`);
    node.style.setProperty('--tilt-y', `${x * 5}deg`);
  }
}