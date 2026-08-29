import { Component } from '@angular/core';
import { experienceTimeline } from '../../data/experience.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-experience-timeline',
  imports: [ScrollRevealDirective],
  templateUrl: './experience-timeline.html',
  styleUrl: './experience-timeline.scss'
})
export class ExperienceTimelineComponent {
  readonly experiences = experienceTimeline;
}
