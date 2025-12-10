// Mock candidate data
const mockCandidates = [
  { id: 1, name: 'James Wilson', email: 'james.w@email.com', initials: 'JW', avatarColor: '#4f46e5', skills: ['React', 'TypeScript', 'Node.js'], experience: 5, status: 'Interviewed', date: 'Dec 10, 2024' },
  { id: 2, name: 'Elena Rodriguez', email: 'elena.r@email.com', initials: 'ER', avatarColor: '#ec4899', skills: ['Figma', 'UI/UX', 'CSS'], experience: 3, status: 'Screened', date: 'Dec 09, 2024' },
  { id: 3, name: 'Michael Chang', email: 'michael.c@email.com', initials: 'MC', avatarColor: '#22c55e', skills: ['Python', 'Machine Learning', 'TensorFlow'], experience: 7, status: 'Shortlisted', date: 'Dec 08, 2024' },
  { id: 4, name: 'Sarah Johnson', email: 'sarah.j@email.com', initials: 'SJ', avatarColor: '#f59e0b', skills: ['React', 'Redux', 'GraphQL'], experience: 4, status: 'Interviewed', date: 'Dec 07, 2024' },
  { id: 5, name: 'David Kim', email: 'david.k@email.com', initials: 'DK', avatarColor: '#3b82f6', skills: ['Node.js', 'MongoDB', 'AWS'], experience: 6, status: 'Screened', date: 'Dec 06, 2024' },
  { id: 6, name: 'Amanda White', email: 'amanda.w@email.com', initials: 'AW', avatarColor: '#8b5cf6', skills: ['React', 'TypeScript', 'Jest'], experience: 4, status: 'Shortlisted', date: 'Dec 05, 2024' },
  { id: 7, name: 'Robert Brown', email: 'robert.b@email.com', initials: 'RB', avatarColor: '#ef4444', skills: ['Java', 'Spring Boot', 'Microservices'], experience: 8, status: 'Interviewed', date: 'Dec 04, 2024' },
  { id: 8, name: 'Lisa Chen', email: 'lisa.c@email.com', initials: 'LC', avatarColor: '#06b6d4', skills: ['Python', 'Django', 'PostgreSQL'], experience: 5, status: 'Screened', date: 'Dec 03, 2024' },
  { id: 9, name: 'Kevin Martinez', email: 'kevin.m@email.com', initials: 'KM', avatarColor: '#84cc16', skills: ['React Native', 'iOS', 'Android'], experience: 4, status: 'Shortlisted', date: 'Dec 02, 2024' },
  { id: 10, name: 'Jennifer Lee', email: 'jennifer.l@email.com', initials: 'JL', avatarColor: '#f97316', skills: ['Vue.js', 'Nuxt', 'Tailwind'], experience: 3, status: 'Interviewed', date: 'Dec 01, 2024' },
  { id: 11, name: 'Thomas Anderson', email: 'thomas.a@email.com', initials: 'TA', avatarColor: '#6366f1', skills: ['Go', 'Kubernetes', 'Docker'], experience: 6, status: 'Screened', date: 'Nov 30, 2024' },
  { id: 12, name: 'Maria Garcia', email: 'maria.g@email.com', initials: 'MG', avatarColor: '#ec4899', skills: ['React', 'Next.js', 'Prisma'], experience: 4, status: 'Shortlisted', date: 'Nov 29, 2024' },
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const candidatesApi = {
  getCandidates: async (params) => {
    await delay(500);

    let filtered = [...mockCandidates];

    // Apply filters
    if (params.name) {
      filtered = filtered.filter(c => 
        c.name.toLowerCase().includes(params.name.toLowerCase())
      );
    }
    if (params.skills && params.skills !== 'all') {
      filtered = filtered.filter(c => 
        c.skills.some(s => s.toLowerCase().includes(params.skills.toLowerCase()))
      );
    }
    if (params.experience && params.experience !== 'all') {
      const minExp = parseInt(params.experience);
      filtered = filtered.filter(c => c.experience >= minExp);
    }
    if (params.status && params.status !== 'all') {
      filtered = filtered.filter(c => c.status === params.status);
    }

    const totalCount = filtered.length;
    const start = (params.page - 1) * params.pageSize;
    const end = start + params.pageSize;
    const candidates = filtered.slice(start, end);

    return { candidates, totalCount };
  },
};
