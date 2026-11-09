export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  icon: string;
  link?: string;
}

export const PROJECTS: readonly Project[] = [
  {
    id: 'comdesk',
    name: 'Comdesk',
    description: "Comware's support portal.",
    technologies: ['Web Application'],
    icon: 'support_agent',
    link: 'https://soporte.comware.com.ec',
  },
  {
    id: 'cloud-sentinel',
    name: 'Cloud Sentinel',
    description: 'Machine learning-based anomaly detection for cloud infrastructure.',
    technologies: ['Machine Learning', 'Cloud'],
    icon: 'cloud',
    link: 'http://141.148.70.195:8501/',
  },
];
