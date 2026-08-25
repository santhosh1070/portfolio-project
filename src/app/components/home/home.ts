import { Component, inject } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { AboutComponent } from '../about/about';
import { ContactComponent } from '../contact/contact';
import { ProjectsComponent } from '../projects/projects';

@Component({
  selector: 'app-home',
  imports: [AboutComponent, ContactComponent, ProjectsComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  readonly profile = inject(ProfileService).getProfile();
}
