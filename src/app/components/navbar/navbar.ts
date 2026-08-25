import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavBarComponent {
  readonly menuOpen = signal(false);
  readonly activeTheme = signal<'warm' | 'midnight' | 'ocean'>('warm');

  toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  setTheme(theme: 'warm' | 'midnight' | 'ocean'): void {
    this.activeTheme.set(theme);
    const root = document.documentElement;
    if (theme === 'warm') root.removeAttribute('data-theme');
    else root.dataset['theme'] = theme;
  }
}
