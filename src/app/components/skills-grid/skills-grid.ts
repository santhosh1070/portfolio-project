import { Component, inject } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-skills-grid',
  templateUrl: './skills-grid.html',
  styleUrl: './skills-grid.scss'
})
export class SkillsGridComponent {
  readonly skills = inject(ProfileService).getProfile().skills;
}
