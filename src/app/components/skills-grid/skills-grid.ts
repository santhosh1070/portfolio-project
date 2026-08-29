import { Component, inject } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills-grid',
  imports: [ScrollRevealDirective],
  templateUrl: './skills-grid.html',
  styleUrl: './skills-grid.scss'
})
export class SkillsGridComponent {
  readonly skills = inject(ProfileService).getProfile().skills;
}
