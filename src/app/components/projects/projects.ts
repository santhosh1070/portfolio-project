import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projects } from '../../data/projects.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { MagneticDirective } from '../../directives/magnetic.directive';
import { TiltDirective } from '../../directives/tilt.directive';
import { CounterDirective } from '../../directives/counter.directive';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, ScrollRevealDirective, MagneticDirective, TiltDirective, CounterDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  readonly projects = projects;
}
