import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { DestroyRef, Injectable, NgZone, PLATFORM_ID, inject } from '@angular/core';
import Lenis from 'lenis';

@Injectable({ providedIn: 'root' })
export class MotionService {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly zone = inject(NgZone);
  private frameId?: number;
  private lenis?: Lenis;

  constructor() {
    if (!isPlatformBrowser(this.platformId) || this.prefersReducedMotion()) return;

    this.zone.runOutsideAngular(() => {
      this.lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      this.lenis.on('scroll', ({ progress }: { progress: number }) => {
        this.document.documentElement.style.setProperty('--scroll-progress', `${progress * 100}%`);
      });

      const tick = (time: number) => {
        this.lenis?.raf(time);
        this.frameId = requestAnimationFrame(tick);
      };
      this.frameId = requestAnimationFrame(tick);
    });

    this.destroyRef.onDestroy(() => {
      if (this.frameId) cancelAnimationFrame(this.frameId);
      this.lenis?.destroy();
    });
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}