import { Project } from '../models/project.model';

export const projects: Project[] = [
  {
    id: 'portfolio-platform',
    title: 'Portfolio platform',
    thumbnail: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85',
    techStack: ['Angular', 'TypeScript', 'SCSS'],
    description: 'A focused personal portfolio that turns experience and selected work into a clear story.',
    problem: 'A traditional resume made it difficult to show the thinking and craft behind each project.',
    role: 'I shaped the content structure, designed the interface, and built the responsive Angular experience.',
    screenshots: [
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=85'
    ],
    outcome: 'Created a fast, maintainable portfolio foundation that makes the work easier to browse and understand.'
  },
  {
    id: 'product-dashboard',
    title: 'Product dashboard',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    techStack: ['Angular', 'JavaScript', 'CSS'],
    description: 'A practical dashboard concept for making important product signals easy to scan.',
    problem: 'Important metrics were spread across disconnected views, slowing down everyday decisions.',
    role: 'I built the component system and translated complex information into a responsive visual hierarchy.',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=85'
    ],
    outcome: 'Established a clearer information architecture and a reusable UI direction for future dashboard features.'
  }
];
