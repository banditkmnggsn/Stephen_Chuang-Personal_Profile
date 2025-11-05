// Example database types
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

// Mock data (replace with real database calls)
export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-featured online shopping platform with payment integration',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    link: '#'
  },
  // Add more projects...
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'Tech Company Inc.',
    period: '2022 - Present',
    description: 'Leading frontend development team'
  },
  // Add more experiences...
];