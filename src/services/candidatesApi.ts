export interface Candidate {
  id: number;
  name: string;
  email: string;
  skills: string[];
  experience: number;
  status: 'Interviewed' | 'Screened' | 'Shortlisted';
  date: string;
  avatarColor: string;
  initials: string;
}

interface GetCandidatesParams {
  page: number;
  pageSize: number;
  name?: string;
  skills?: string;
  experience?: string;
  status?: string;
}

interface GetCandidatesResponse {
  candidates: Candidate[];
  totalCount: number;
}

// Mock data for demonstration
const mockCandidates: Candidate[] = [
  {
    id: 1,
    name: 'James Wilson',
    email: 'james.wilson@email.com',
    skills: ['React', 'TypeScript', 'Node.js'],
    experience: 7,
    status: 'Interviewed',
    date: 'Dec 15, 2024',
    avatarColor: '#2563EB',
    initials: 'JW',
  },
  {
    id: 2,
    name: 'Elena Rodriguez',
    email: 'elena.r@email.com',
    skills: ['Figma', 'UI/UX', 'Design Systems'],
    experience: 8,
    status: 'Shortlisted',
    date: 'Dec 18, 2024',
    avatarColor: '#2563EB',
    initials: 'ER',
  },
  {
    id: 3,
    name: 'Michael Chang',
    email: 'm.chang@email.com',
    skills: ['Python', 'TensorFlow', 'ML'],
    experience: 5,
    status: 'Screened',
    date: 'Dec 20, 2024',
    avatarColor: '#2563EB',
    initials: 'MC',
  },
  {
    id: 4,
    name: 'Sarah Jenkins',
    email: 'sarah.j@email.com',
    skills: ['Agile', 'Jira', 'Strategy'],
    experience: 6,
    status: 'Interviewed',
    date: 'Dec 22, 2024',
    avatarColor: '#2563EB',
    initials: 'SJ',
  },
  {
    id: 5,
    name: 'David Kim',
    email: 'david.kim@email.com',
    skills: ['Java', 'Spring Boot', 'AWS'],
    experience: 9,
    status: 'Shortlisted',
    date: 'Dec 23, 2024',
    avatarColor: '#2563EB',
    initials: 'DK',
  },
  {
    id: 6,
    name: 'Amanda Foster',
    email: 'amanda.f@email.com',
    skills: ['Vue.js', 'CSS', 'JavaScript'],
    experience: 4,
    status: 'Screened',
    date: 'Dec 24, 2024',
    avatarColor: '#2563EB',
    initials: 'AF',
  },
  {
    id: 7,
    name: 'Robert Martinez',
    email: 'r.martinez@email.com',
    skills: ['DevOps', 'Docker', 'Kubernetes'],
    experience: 6,
    status: 'Interviewed',
    date: 'Dec 25, 2024',
    avatarColor: '#2563EB',
    initials: 'RM',
  },
  {
    id: 8,
    name: 'Lisa Thompson',
    email: 'lisa.t@email.com',
    skills: ['Data Analysis', 'SQL', 'Tableau'],
    experience: 5,
    status: 'Shortlisted',
    date: 'Dec 26, 2024',
    avatarColor: '#2563EB',
    initials: 'LT',
  },
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const candidatesApi = {
  getCandidates: async (params: GetCandidatesParams): Promise<GetCandidatesResponse> => {
    await delay(500); // Simulate network delay

    let filtered = [...mockCandidates];

    // Apply filters
    if (params.name) {
      filtered = filtered.filter(c => 
        c.name.toLowerCase().includes(params.name!.toLowerCase())
      );
    }
    if (params.skills) {
      filtered = filtered.filter(c => 
        c.skills.some(s => s.toLowerCase().includes(params.skills!.toLowerCase()))
      );
    }
    if (params.experience) {
      const exp = parseInt(params.experience);
      if (!isNaN(exp)) {
        filtered = filtered.filter(c => c.experience >= exp);
      }
    }
    if (params.status) {
      filtered = filtered.filter(c => c.status === params.status);
    }

    const totalCount = 1248; // Mock total count
    const start = (params.page - 1) * params.pageSize;
    const end = start + params.pageSize;
    const candidates = filtered.slice(start, end);

    return { candidates, totalCount };
  },
};
