import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  readonly version = this.getVersion();

  private getVersion(): string {
    const version = localStorage.getItem('portfolio-app-version') ?? 'development';
    return version.startsWith('build-') ? version : version.slice(0, 7);
  }
}
