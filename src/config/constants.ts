import { PersonalInfo, Education, TechStack, Experience, Project, EngineeringPrinciple } from '@/types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Mohamed Ayman',
  email: 'mohamed.aymanfa@gmail.com',
  phone: '01029390241',
  linkedin: 'https://www.linkedin.com/in/mohamedayman45/',
  github: 'https://github.com/Mohamedayman45',
  cv: 'https://drive.google.com/file/d/11rKvedOjDE5Pf3DBHA1r6G2wsJwVv8eo/view',
};

export const EDUCATION: Education = {
  faculty: 'Computers & Artificial Intelligence',
  major: 'Computer Science',
  graduationYear: 2027,
};

export const TECH_STACK: TechStack = {
  backend: ['Node.js', 'NestJS', 'Express', 'Go'],
  architecture: ['Domain Driven Design (DDD)', 'Event-Driven Architecture'],
  frontend: ['Next.js', 'React', 'React Native'],
  devops: ['Docker', 'CI/CD', 'AWS'],
  security: ['Web & Mobile Pentesting', 'PortSwigger Labs', 'Authentication Attack Analysis'],
  languages: ['TypeScript', 'JavaScript', 'Go'],
};

export const EXPERIENCES: Experience[] = [
  {
    company: 'LightByte',
    role: 'Backend Engineer',
    startDate: new Date('2024-10-15'),
    projects: ['chat.qrena.com', 'opal-travel.lightbyte.me', 'darb-mea'],
    responsibilities: [
      'Backend architecture design and implementation',
      'Performance optimization and bottleneck analysis',
      'Security considerations and threat modeling (CIA principles)',
      'DevOps workflows and deployment automation',
    ],
    technologies: ['Node.js', 'NestJS', 'Event-Driven Architecture', 'Docker', 'AWS'],
  },
  {
    company: 'Lviv Solutions',
    role: 'Backend Engineer (Go)',
    startDate: new Date('2025-10-01'),
    location: 'Remote, Saudi Arabia',
    projects: ['So Eat App'],
    responsibilities: [
      'Implemented Domain Driven Design patterns',
      'Clean domain modeling and bounded contexts',
      'Scalable backend architecture',
      'Business logic encapsulation',
    ],
    technologies: ['Go', 'Domain Driven Design', 'Microservices'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'salonq',
    title: 'SalonQ App',
    category: 'Full-Stack Platform',
    description: 'A production-grade platform aggregating barbers and salons into a unified booking ecosystem.',
    businessProblem: 'Fragmented discovery and booking experience across multiple independent salons, leading to poor customer retention and inefficient salon operations.',
    solution: 'Built a centralized platform connecting customers with service providers through a scalable, event-driven backend architecture.',
    technicalHighlights: [
      'Designed authentication flows with JWT and refresh token rotation',
      'Implemented role-based access control (RBAC) for customers, barbers, and admins',
      'Built real-time availability system using event-driven patterns',
      'Optimized database queries reducing booking flow latency by 60%',
      'Integrated payment gateway with idempotency guarantees',
      'Designed for horizontal scalability from day one',
    ],
    technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'Redis', 'Docker', 'Event-Driven Architecture'],
    metrics: [
      { label: 'Query Optimization', value: '60% faster' },
      { label: 'Architecture', value: 'Event-Driven' },
    ],
  },
  {
    id: 'messaging-architecture',
    title: 'Messaging System Performance Overhaul',
    category: 'Architecture & Performance',
    description: 'Identified and resolved critical performance bottlenecks in a production chat system through architectural redesign.',
    businessProblem: 'Synchronous message handling caused severe latency spikes under load, degrading user experience and limiting scalability.',
    solution: 'Proposed and implemented Event-Driven Architecture for the message send flow, validated through benchmarking and PoC.',
    technicalHighlights: [
      'Profiled existing system to identify synchronous bottlenecks',
      'Designed event-driven flow: API → Message Queue → Workers → WebSocket broadcast',
      'Built Proof of Concept with load testing framework',
      'Benchmarked solution under realistic load conditions',
      'Achieved ~10x throughput improvement',
      'Maintained message ordering guarantees through partition keys',
      'Implemented dead-letter queues for failure handling',
    ],
    impact: '~10x performance improvement in message throughput with maintained reliability',
    technologies: ['Node.js', 'RabbitMQ', 'WebSocket', 'Redis', 'Load Testing'],
    metrics: [
      { label: 'Performance Gain', value: '~10x' },
      { label: 'Approach', value: 'PoC + Benchmarks' },
    ],
  },
  {
    id: 'security-engineering',
    title: 'Authentication Security Hardening',
    category: 'Security Engineering',
    description: 'Identified and mitigated critical authentication vulnerabilities through systematic security analysis and PoC development.',
    businessProblem: 'OTP-based authentication flows vulnerable to brute-force attacks, exposing user accounts to unauthorized access.',
    solution: 'Conducted security assessment, built attack PoCs, and implemented multi-layered defense strategy.',
    technicalHighlights: [
      'Identified OTP brute-force vulnerability in authentication flow',
      'Built Proof of Concept demonstrating attack feasibility',
      'Proposed and implemented rate limiting at multiple layers (IP, user, endpoint)',
      'Implemented exponential backoff for failed attempts',
      'Applied CIA principles: ensured Confidentiality through encryption, Integrity via validation, and Availability through rate limiting',
      'Added monitoring and alerting for suspicious authentication patterns',
      'Presented findings and solutions to engineering team',
    ],
    impact: 'Eliminated critical authentication vulnerability before production exposure',
    technologies: ['Node.js', 'Redis', 'Rate Limiting', 'Security Analysis', 'Monitoring'],
    metrics: [
      { label: 'Vulnerability', value: 'Eliminated' },
      { label: 'Approach', value: 'PoC-driven' },
    ],
  },
];

export const ENGINEERING_PRINCIPLES: EngineeringPrinciple[] = [
  {
    title: 'Business-First Thinking',
    description: 'Every technical decision maps to business impact. I evaluate solutions through the lens of cost, scalability, and user experience, not just code elegance.',
    icon: 'target',
  },
  {
    title: 'Proof Over Opinion',
    description: 'Architectural proposals backed by benchmarks, PoCs, and load testing. I challenge assumptions with data, not gut feelings.',
    icon: 'bar-chart',
  },
  {
    title: 'Trade-off Analysis',
    description: 'No silver bullets. Every choice has costs. I explicitly document trade-offs: when to cache, when to go event-driven, when simplicity wins.',
    icon: 'scale',
  },
  {
    title: 'Security as Engineering',
    description: 'Security isn\'t an afterthought. It\'s baked into architecture decisions, authentication flows, and API design from day one. I focus on CIA principles: Confidentiality, Integrity, and Availability in every system I build.',
    icon: 'shield',
  },
];

export const ABOUT_CONTENT = {
  headline: 'Senior Software Engineer',
  subheadline: 'Backend-Heavy Full-Stack • DevOps • Security-Minded Architect',
  introduction: `I don't think in screens or endpoints. I think in systems. My work spans backend architecture, mobile platforms, and DevOps, with a strong focus on security principles (CIA: Confidentiality, Integrity, Availability). What defines my approach is how I connect technical decisions to business outcomes.`,
  paragraphs: [
    `I've worked on production systems serving real users: real-time messaging backends, travel platforms, and mobile applications. These aren't demos. They're live systems where performance, security, and scalability aren't optional.`,
    `My background in Computer Science and Cybersecurity shapes how I engineer. I don't just build features. I model threats, ensure CIA principles (Confidentiality, Integrity, Availability), benchmark alternatives, and challenge architecture when the data demands it. When I proposed moving our messaging system to event-driven architecture, it wasn't theory. It was a PoC with benchmarks showing 10x improvement.`,
    `I focus on the big picture: understanding the business problem, evaluating trade-offs, and choosing solutions that scale. Whether it's implementing Domain Driven Design for complex domains, optimizing query performance, or hardening authentication flows against attacks, I approach engineering as a discipline of informed decision-making.`,
    `I believe in proof over opinion, trade-off analysis over dogma, and systems thinking over task completion. If you're building something that matters, I'm interested.`,
  ],
};

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Contact', href: '#contact' },
];
