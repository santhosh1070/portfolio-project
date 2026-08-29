import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, inject } from '@angular/core';

@Directive({ selector: '[appCounter]' })
export class CounterDirective implements AfterViewInit, OnDestroy {
  @Input({ required: true }) appCounter = 0;
  @Input() counterDuration = 900;
  @Input() counterPrefix = '';
  private readonly element = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  private frameId?: number;

  ngAfterViewInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.element.nativeElement.textContent = `${this.counterPrefix}${this.appCounter}`;
      return;
    }
    this.observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      this.animate();
      this.observer?.unobserve(this.element.nativeElement);
    }, { threshold: 0.6 });
    this.observer.observe(this.element.nativeElement);
  }

  private animate(): void {
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / this.counterDuration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.element.nativeElement.textContent = `${this.counterPrefix}${String(Math.round(this.appCounter * eased)).padStart(String(this.appCounter).length, '0')}`;
      if (progress < 1) this.frameId = requestAnimationFrame(tick);
    };
    this.frameId = requestAnimationFrame(tick);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.frameId) cancelAnimationFrame(this.frameId);
  }
}