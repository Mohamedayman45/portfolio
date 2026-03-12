import { PersonalInfo, Education, TechStack, Experience, Project, EngineeringPrinciple } from '@/types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Mohamed Ayman',
  email: 'mohamed.aymanfa@gmail.com',
  phone: '01029390241',
  linkedin: 'https://www.linkedin.com/in/mohamedayman45/',
  github: 'https://github.com/Mohamedayman45',
  cv: 'https://drive.google.com/file/d/1FRgiBTEN_EIuwqAF0PYBEeKKAed_kNKb/view?usp=sharing',
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
    projects: [
      { label: 'chat.qrena.com', href: 'https://chat.qrena.com' },
      { label: 'halfm.sa', href: 'https://halfm.sa' },
      { label: 'darb-mea.com', href: 'https://darb-mea.com' },
      { label: 'prop-cut.com', href: 'https://prop-cut.com' },
      { label: 'opal-travel.lightbyte.me', href: 'https://opal-travel.lightbyte.me' },
    ],
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
    projects: [{ label: 'So Eat App' }],
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
    id: 'qrena-chat',
    title: 'QRENA Chat Platform',
    category: 'Real-Time Messaging',
    description: 'Real-time messaging platform across web and mobile.',
    link: 'https://chat.qrena.com/',
    solution: 'Built a real-time messaging platform using React.js, React Native, NestJS backend, and PostgreSQL. Implemented WebSocket-based messaging, message reactions, forwarding, and broadcast functionality. Developed authentication, RBAC, and notifications, optimized for scalability and low latency across web and mobile.',
    technicalHighlights: [
      'WebSocket-based real-time messaging',
      'Message reactions, forwarding, and broadcast functionality',
      'Authentication, RBAC, and notifications',
      'Optimized for scalability and low latency across web and mobile',
    ],
    technologies: ['React.js', 'React Native', 'NestJS', 'PostgreSQL', 'WebSocket'],
  },
  {
    id: 'half-million',
    title: 'Half Million (halfm.sa)',
    category: 'Full-Stack CMS',
    description: 'CMS Website for Coffee Store (Saudi Arabia).',
    link: 'https://halfm.sa/',
    solution: 'Developed a Next.js frontend and NestJS backend with PostgreSQL for a major coffee chain\'s content management system. Implemented secure admin workflows, RESTful APIs, and database design for managing products, promotions, and store content efficiently.',
    technicalHighlights: [
      'Next.js frontend with NestJS backend and PostgreSQL',
      'Secure admin workflows and role-based content management',
      'RESTful APIs for products, promotions, and store content',
      'Database design for efficient content and product management',
    ],
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'REST APIs'],
  },
  {
    id: 'darb',
    title: 'DARB – Hiking & Adventure App',
    category: 'Mobile & Backend',
    description: 'Hiking and outdoor adventure tracking app (UAE).',
    link: 'https://darb-mea.com/',
    solution: 'Created a React Native mobile app and Node.js backend with PostgreSQL database for hiking and outdoor adventure tracking. Implemented user tracking, route management, and activity logging, optimizing backend services for performance, reliability, and secure data handling.',
    technicalHighlights: [
      'React Native mobile app with Node.js backend and PostgreSQL',
      'User tracking, route management, and activity logging',
      'Backend services optimized for performance and reliability',
      'Secure data handling and storage',
    ],
    technologies: ['React Native', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'propcut',
    title: 'PropCut – Real Estate Investment Platform',
    category: 'Full-Stack Web',
    description: 'Real estate investment and property platform (Proptech).',
    link: 'https://prop-cut.com/',
    solution: 'Developed a React.js frontend and NestJS backend with PostgreSQL database for a real estate investment platform. Implemented RESTful APIs, secure authentication, property search/filter functionality, and optimized for responsive design, performance, and user experience in the proptech domain.',
    technicalHighlights: [
      'React.js frontend with NestJS backend and PostgreSQL',
      'RESTful APIs and secure authentication',
      'Property search and filter functionality',
      'Responsive design, performance, and UX optimization for proptech',
    ],
    technologies: ['React.js', 'NestJS', 'PostgreSQL', 'REST APIs'],
  },
  {
    id: 'soeat-app',
    title: 'SOEAT App – Food Ordering & POS Platform',
    category: 'Full-Stack Platform',
    description: 'Food ordering and point-of-sale platform for mobile, web, and in-store.',
    solution: 'Built a full-stack platform with Golang backend (DDD, PostgreSQL), Next.js web frontend, React Native mobile app, and POS integration. Developed scalable APIs, order management workflows, and secure payment handling, ensuring smooth operations across mobile, web, and in-store POS systems.',
    technicalHighlights: [
      'Golang backend with Domain Driven Design and PostgreSQL',
      'Next.js web frontend and React Native mobile app',
      'POS integration for in-store operations',
      'Scalable APIs, order management workflows, and secure payment handling',
    ],
    technologies: ['Go', 'Next.js', 'React Native', 'PostgreSQL', 'DDD'],
  },
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
