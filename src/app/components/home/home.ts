import { Component, inject } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { AboutComponent } from '../about/about';
import { ContactComponent } from '../contact/contact';
import { ProjectsComponent } from '../projects/projects';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { MagneticDirective } from '../../directives/magnetic.directive';

@Component({
  selector: 'app-home',
  imports: [AboutComponent, ContactComponent, ProjectsComponent, ScrollRevealDirective, MagneticDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  readonly profile = inject(ProfileService).getProfile();
}
