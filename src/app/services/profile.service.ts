import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  getProfile(): Profile {
    return {
      name: 'Santhosh Kumar',
      imageUrl: '/profile-portrait.jpeg',
      role: 'Full-Stack Developer with 5+ years of experience building enterprise applications with .NET, Angular, and AWS — now expanding into AI-powered systems.',
      summary: 'I\'ve spent the last 5+ years building enterprise-grade applications — from scalable .NET/Angular systems to ETL pipelines that move data reliably between SFTP servers, databases, and the cloud. Along the way, I\'ve picked up more than code: I guide and mentor teammates, delegate work across sprints, and take technical ownership when it counts. These days, I\'m pointing that same enterprise mindset at a newer problem — building AI-enabled features into production systems. I\'m integrating OpenAI APIs and vector databases into real applications, learning what it actually takes to make LLMs useful inside enterprise software rather than just impressive in a demo. Client collaboration, clean architecture, and performance optimization are still the backbone of how I work — AI is the newest tool in that toolbox, not a replacement for the fundamentals.',
      skills: ['.NET', 'C#', 'Angular', 'OpenAI API', 'Vector Databases', 'Entity Framework', 'PostgreSQL', 'AWS', 'ETL', 'SFTP', 'Python'],
      education: [
        {
          institution: 'Sri Krishna Arts and Science College',
          qualification: 'Higher education',
          dates: '2016 - 2021',
          detail: 'Academic background in the technology and computer science space.'
        }
      ],
      certifications: [
        {
          title: 'Python and Django Full Stack Web Development',
          issuer: 'Udemy',
          issued: 'Mar 2021'
        },
        {
          title: 'Introduction to Game Development',
          issuer: 'Coursera',
          issued: 'Jul 2020',
          credentialId: '75XYWKKWHDYF',
          credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/75XYWKKWHDYF'
        },
        {
          title: "The Data Scientist's Toolbox",
          issuer: 'Coursera',
          issued: 'Jun 2020',
          credentialId: 'TSWG8AKWMV77',
          credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/TSWG8AKWMV77'
        },
        {
          title: 'Python for Data Science, AI & Development',
          issuer: 'Coursera',
          issued: 'May 2020',
          credentialId: 'YNZRDMRRMTGG',
          credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/YNZRDMRRMTGG'
        }
      ]
    };
  }
}
