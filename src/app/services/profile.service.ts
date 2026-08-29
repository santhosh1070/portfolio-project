import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  getProfile(): Profile {
    return {
      name: 'Santhosh Kumar',
      imageUrl: '/profile-portrait.jpeg',
      role: 'Full-Stack Developer with 4+ years of experience.',
      summary: 'I build scalable enterprise applications using .NET, C#, Angular, Entity Framework, and PostgreSQL. I also develop ETL processes, SFTP-based data extraction, and AWS S3 integrations with CloudWatch monitoring. I bring strong client collaboration, requirement analysis, Agile delivery, clean architecture, and performance optimization to every project.',
      skills: ['.NET', 'C#', 'Angular', 'Entity Framework', 'PostgreSQL', 'ETL', 'SFTP', 'AWS', 'Python', 'Generative AI'],
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
