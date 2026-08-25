export interface EducationEntry {
  institution: string;
  qualification: string;
  dates: string;
  detail: string;
}

export interface CertificationEntry {
  title: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Profile {
  name: string;
  imageUrl: string;
  role: string;
  summary: string;
  skills: string[];
  education: EducationEntry[];
  certifications: CertificationEntry[];
}
