import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { projects } from '../../data/projects.data';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss'
})
export class ProjectDetailComponent {
  private readonly route = inject(ActivatedRoute);
  readonly project = projects.find((item) => item.id === this.route.snapshot.paramMap.get('id'));
}
