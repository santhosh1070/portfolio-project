import { Project } from '../models/project.model';

export const projects: Project[] = [
  {
    id: 'valve-configurator',
    title: 'Valve Configurator',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    techStack: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'D3.js'],
    description: 'A product-validation and sales tool for managing enquiries, quotations, and indent bookings.',
    problem: 'Sales workflows needed a clear, reliable interface for preparing product configurations and moving enquiries through to booking.',
    role: 'I developed complex Angular UI features, partnered with design and backend teams, and used RxJS for asynchronous workflows. I also implemented features with D3.js, ngx-print, and IndexedDB, and supported API and SQL integration.',
    screenshots: [
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=85'
    ],
    outcome: 'Delivered a responsive, maintainable sales workflow with optimized loading and reusable UI capabilities.'
  },
  {
    id: 'contract-management',
    title: 'Contract Management Tool',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85',
    techStack: ['Angular', 'TypeScript', 'REST APIs', 'HTML', 'SCSS', 'TFS'],
    description: 'A responsive operations tool for projects, tasks, resource activity, costs, and inventory requests.',
    problem: 'Project and contract operations needed one place to manage task activity, resources, costs, and inventory-related requests.',
    role: 'I worked with product and R&D teams to build responsive Angular interfaces, integrated REST APIs with complex input structures, and supported testing and production releases through TFS.',
    screenshots: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=85'
    ],
    outcome: 'Created a mobile-responsive management experience backed by integrated APIs and clear operational workflows.'
  }
];
