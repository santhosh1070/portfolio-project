import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projects } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  readonly projects = projects;
}
