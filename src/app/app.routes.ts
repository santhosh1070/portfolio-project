import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		title: 'Santhosh Kumar | Portfolio',
		loadComponent: () => import('./components/home/home').then((module) => module.HomeComponent)
	},
	{
		path: 'projects',
		title: 'Projects | Santhosh Kumar',
		loadComponent: () => import('./components/projects/projects').then((module) => module.ProjectsComponent)
	},
	{
		path: 'projects/:id',
		loadComponent: () => import('./components/project-detail/project-detail').then((module) => module.ProjectDetailComponent)
	},
	{ path: '**', redirectTo: '' }
];
