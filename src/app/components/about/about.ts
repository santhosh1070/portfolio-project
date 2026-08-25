import { Component, inject } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { ExperienceTimelineComponent } from '../experience-timeline/experience-timeline';
import { SkillsGridComponent } from '../skills-grid/skills-grid';

@Component({
  selector: 'app-about',
  imports: [ExperienceTimelineComponent, SkillsGridComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  readonly profile = inject(ProfileService).getProfile();
}
