import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({ selector: '[appMagnetic]' })
export class MagneticDirective {
  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly radius = 20;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const node = this.element.nativeElement;
    const bounds = node.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * this.radius;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * this.radius;
    node.style.setProperty('--magnetic-x', `${x}px`);
    node.style.setProperty('--magnetic-y', `${y}px`);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    const node = this.element.nativeElement;
    node.style.setProperty('--magnetic-x', '0px');
    node.style.setProperty('--magnetic-y', '0px');
    node.style.setProperty('--tilt-x', '0deg');
    node.style.setProperty('--tilt-y', '0deg');
  }
}