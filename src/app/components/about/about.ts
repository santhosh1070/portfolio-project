import { Component, inject } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { ExperienceTimelineComponent } from '../experience-timeline/experience-timeline';
import { SkillsGridComponent } from '../skills-grid/skills-grid';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  imports: [ExperienceTimelineComponent, SkillsGridComponent, ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  readonly profile = inject(ProfileService).getProfile();
}
