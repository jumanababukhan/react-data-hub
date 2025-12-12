// Mock profile data
const mockProfileData = {
  id: 4,
  name: 'Sarah Johnson',
  initials: 'SJ',
  title: 'Senior Frontend Developer',
  avatarColor: '#f59e0b',
  profileScore: 89,
  email: 'sarah.johnson@email.com',
  phone: '+1 (555) 987-6543',
  location: 'Austin, TX',
  linkedin: 'linkedin.com/in/sarahjohnson',
  resumeFile: {
    name: 'Sarah_Johnson_Resume.pdf',
    uploadedAt: '5 days ago'
  },
  professionalSummary: 'Creative and detail-oriented frontend developer with 5+ years of experience building responsive web applications. Expertise in modern JavaScript frameworks, UI/UX design principles, and performance optimization. Passionate about creating intuitive user experiences and collaborating with cross-functional teams.',
  skills: ['React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS', 'Git', 'Webpack'],
  experience: [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'DesignTech Solutions',
      location: 'Austin, TX',
      duration: '2021 - Present',
      detailedDuration: 'March 2021 - Present',
      description: 'Lead frontend development for e-commerce platform serving 500K+ users. Improved page load times by 45%.',
      responsibilities: [
        'Led development of responsive e-commerce platform serving 500,000+ active users',
        'Implemented modern React architecture with TypeScript, reducing bugs by 60%',
        'Optimized application performance, achieving 45% improvement in page load times',
        'Mentored 3 junior developers and established frontend coding standards',
        'Collaborated with UX/UI designers to implement pixel-perfect designs',
        'Integrated payment gateways and third-party APIs for enhanced functionality'
      ]
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'WebCraft Agency',
      location: 'Austin, TX',
      duration: '2019 - 2021',
      detailedDuration: 'June 2019 - March 2021',
      description: 'Developed responsive websites and web applications for various clients using React and Vue.js.',
      responsibilities: [
        'Developed 15+ responsive websites and web applications for diverse clients',
        'Built interactive dashboards using Vue.js and Chart.js for data visualization',
        'Implemented SEO best practices, improving client search rankings by 40%',
        'Created reusable component library reducing development time by 30%',
        'Worked closely with backend developers to integrate RESTful APIs'
      ]
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'Digital Solutions Inc.',
      location: 'Austin, TX',
      duration: '2018 - 2019',
      detailedDuration: 'August 2018 - June 2019',
      description: 'Assisted in development of corporate websites using HTML, CSS, and JavaScript.',
      responsibilities: [
        'Assisted in development of corporate websites using HTML, CSS, and JavaScript',
        'Maintained and updated existing web applications',
        'Participated in code reviews and learned industry best practices',
        'Fixed cross-browser compatibility issues and improved accessibility'
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Texas at Austin',
      duration: '2015 - 2019',
      coursework: 'Web Development, Software Engineering, Database Systems, Human-Computer Interaction',
      gpa: '3.7/4.0'
    }
  ],
  technicalSkills: {
    'Frontend Technologies': ['React.js, Vue.js, Angular', 'TypeScript, JavaScript (ES6+)', 'HTML5, CSS3, Sass/SCSS', 'Tailwind CSS, Bootstrap', 'Webpack, Vite, Parcel'],
    'Tools & Others': ['Git, GitHub, GitLab', 'Jest, Cypress, Testing Library', 'Figma, Adobe XD', 'npm, yarn, pnpm', 'RESTful APIs, GraphQL']
  },
  projects: [
    {
      id: 1,
      title: 'E-Commerce Platform Dashboard',
      description: 'Built comprehensive admin dashboard for managing products, orders, and analytics using React and TypeScript.',
      technologies: 'React, TypeScript, Chart.js, Tailwind CSS'
    },
    {
      id: 2,
      title: 'Real-time Chat Application',
      description: 'Developed real-time messaging app with user authentication and file sharing capabilities.',
      technologies: 'Vue.js, Socket.io, Node.js, MongoDB'
    }
  ],
  certifications: [
    'AWS Certified Cloud Practitioner (2023)',
    'Google Analytics Certified (2022)',
    'React Developer Certification - Meta (2021)'
  ]
};

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const profileApi = {
  getProfileInfo: async (candidateId) => {
    await delay(500);
    // In real app, fetch by candidateId
    return mockProfileData;
  },
};
