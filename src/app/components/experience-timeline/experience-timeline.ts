import { Component } from '@angular/core';
import { experienceTimeline } from '../../data/experience.data';

@Component({
  selector: 'app-experience-timeline',
  templateUrl: './experience-timeline.html',
  styleUrl: './experience-timeline.scss'
})
export class ExperienceTimelineComponent {
  readonly experiences = experienceTimeline;
}
