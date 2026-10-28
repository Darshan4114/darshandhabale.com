// Single source of truth for the portfolio.
// Every project gets a case study at /portfolio/<slug>.
//  - `talkingHead`: Vimeo/YouTube embed URL for the case study video (optional).
//  - `clientWebsite`: optional link for the client name on the case study.
//  - `imageDir`: folder in /public/img/portfolio holding `<imageDir>-N.png` screenshots.
//  - The written article lives in src/mdx/case-studies/<slug>.mdx (optional).
//  - Testimonials link here through their `projects` field in app/testimonials.js.
export const projects = [
  {
    id: 1,
    slug: 'vox-relay',
    title: 'VoxRelay: Chat and Video Conferencing Application',
    client: 'Independent project',
    period: 'Mar 2023 – Sep 2023',
    role: 'Full Stack Developer',
    summary:
      'A real-time WebRTC messaging platform modelled on WhatsApp’s architecture: peer-to-peer video, audio and text with message delivery.',
    points: [
      'Live chat',
      'Video/audio calling',
      'Multilingual',
      'Dark mode'
    ],
    video: '/img/portfolio/meetloom/meetloom.webm',
    website: 'https://vox-relay.vercel.app/'
  },
  {
    id: 2,
    slug: 'mazaclass',
    title: 'Mazaclass: Coaching Class Management System',
    client: 'My own SaaS',
    period: 'Jul 2025 – Present',
    role: 'Founder & Full Stack Developer',
    stack: ['Go', 'React'],
    summary:
      'Payment and admin software for coaching centres. Students pay through WhatsApp payment links in about 30 seconds, reminders go out automatically, and one dashboard replaces the spreadsheets. I built it after talking to 50+ educators.',
    points: [
      'WhatsApp payment links',
      'Automated payment reminders',
      'Attendance and student records',
      'One dashboard instead of spreadsheets',
    ],
    video: '/img/portfolio/mazaclass/mazaclass.webm',
    website: 'https://app.mazaclass.com/'
  },
  {
    id: 3,
    slug: 'kabbie',
    title: 'Kabbie: The Cab Management Application',
    client: 'Koncero Software Solutions',
    period: '2021 – 2022',
    role: 'Full Stack Developer',
    summary:
      'A cab CRM with a custom location-based pricing engine built on the Google Maps Drawing API.',
    points: [
      'Location based pricing engine',
      'Google maps Geolocation and Drawing APIs',
      'Trip management',
      'Admin approval flows'
    ],
    video: '/img/portfolio/kabbie/kabbie.webm',
    website: 'https://kabbie.darshandhabale.com/'
  },
  {
    id: 4,
    slug: 'crazico',
    title: 'Crazi Co: VentureMind.ai and an AI Site Generator',
    client: 'Crazi Co',
    clientWebsite: 'https://crazi.co/',
    period: 'Dec 2023 – Jul 2025',
    role: 'Cloud & Backend Developer',
    summary:
      'Crazi Co is a tech agency in Sharjah, UAE that designs and builds digital products for startups and scale-ups. There I built the core backend of VentureMind.ai, a platform bringing AI tools, blockchain integration and robotics to individuals and businesses: a multi-modal model orchestration layer with unified token billing and real-time voice agents. I also built an AI site generator that shipped 100+ production websites.',
    points: [
      'Multi-modal AI orchestration',
      'Unified token billing',
      'Real-time voice agents (ElevenLabs, OpenAI)',
      'AI site generator: 100+ sites, 80% less dev time'
    ],
    stack: ['Node.js', 'Express.js microservices', 'MongoDB', 'OpenAI API', 'ElevenLabs'],
    website: 'https://www.venturemind.ai/'
  },
  {
    id: 5,
    slug: 'tredzy',
    title: 'Tredzy: Multiparty Letter of Credit Management System',
    client: 'Hexanovate',
    period: 'Sep 2022 – Mar 2023',
    role: 'Frontend Developer',
    summary:
      'Tredzy gets Indian businesses same-day working capital by discounting domestic Letters of Credit through 40+ partner banks. I built the platform behind it: three role-based dashboards where businesses submit LCs, admins vet the documents and banks discount them.',
    points: [
      'Multitenancy',
      'KYC approval process',
      'PDF generation',
      'Authorization'
    ],
    image: '/img/portfolio/tredzy/hero.gif',
    imageDir: 'tredzy',
    website: 'https://lcdc-clientportal.vercel.app/'
  },
  {
    id: 6,
    slug: 'air3x3',
    title: 'Air3x3: The Basketball Tournament Application',
    client: 'Upwork client',
    points: [
      'Custom Booking Engine',
      'Stripe integration',
      'Social Auth.',
      'Email templates'
    ],
    image: '/img/portfolio/air3x3/display/hero.gif',
    website: 'https://air3x3.com/'
  },
  {
    id: 7,
    slug: 'rocketloans',
    title: 'RocketLoans: Salesforce Loan Origination Workflows',
    client: 'Koncero Software Solutions',
    period: 'Dec 2020 – Jun 2022',
    role: 'Salesforce Developer',
    summary:
      'Rocket Loans is the lending arm of Rocket Companies in the US. At Koncero I built a configurable Apex workflow rule engine for its loan origination on Salesforce, plus a reusable LWC component library for the UI. The engine was later reused across other client projects.',
    points: [
      'Configurable Apex workflow rule engine',
      'Reusable LWC component library',
      'US lending workflows',
      'Reused across client projects'
    ],
    stack: ['Salesforce', 'Apex', 'Lightning Web Components', 'SOQL'],
    website: 'https://www.rocketloans.com/'
  },
  {
    id: 8,
    slug: 'bagachat',
    title: 'BagAChat: Legacy React Work and Node.js Integrations',
    client: 'BagAChat',
    period: '2023',
    role: 'Full Stack Developer',
    summary:
      'Made careful, targeted changes to a large legacy React codebase for one of BagAChat’s premium clients, and built Node.js integrations for one of their products.',
    points: [
      'Large legacy React codebase',
      'Targeted changes without a risky rewrite',
      'Node.js integrations'
    ],
    stack: ['React', 'Node.js'],
    website: 'https://bagachat.com/'
  },
  {
    id: 9,
    slug: 'bendtester',
    title: 'BendTester: Software for a New Testing Machine',
    client: 'BendTester',
    role: 'Frontend & Backend Developer',
    summary:
      'Built both the frontend and the backend for BendTester, a new machine.',
    points: [
      'Frontend and backend',
      'Built alongside the mechanical design'
    ]
  },
  {
    id: 10,
    slug: 'smart-tutor',
    title: 'Smart Tutor: Product Review and the MirSolutions.in Website',
    client: 'MIR Solutions',
    clientWebsite: 'https://mirsolutions.in/',
    role: 'Developer',
    summary:
      'MIR Solutions makes SmartTutor, a Windows AI tutor that answers from the student’s own textbook, in 11 Indian languages, with their data kept on their own machine. I reviewed the product end to end, then expanded my scope to help build the MirSolutions.in website, catching pitfalls before it went live.',
    points: [
      'End-to-end review of SmartTutor, an on-device AI tutor',
      'MirSolutions.in website',
      'Pre-launch pitfalls caught'
    ],
    website: 'https://mirsolutions.in/'
  },
  {
    id: 11,
    slug: 'clear-claim',
    title: 'Clear Claim: Tax Manager Landing Page',
    client: 'Hexanovate',
    period: '2022 – 2023',
    role: 'Frontend Developer',
    summary:
      'A marketing landing page for Clear Claim, a tax manager, built at Hexanovate: a modern, sleek layout with pricing cards and an animated step flow that walks visitors through how it works.',
    points: [
      'Modern sleek landing page',
      'Pricing cards',
      'Animated step flow'
    ],
    image: '/img/portfolio/clear-claim/hero.gif',
    imageDir: 'clear-claim',
    website: 'https://clearclaimsite.vercel.app/'
  },
  {
    id: 12,
    slug: 'sfdi',
    title: 'SFDI: School of Fashion Design and Innovation Landing Page',
    client: 'Hexanovate',
    period: '2022 – 2023',
    role: 'Frontend Developer',
    summary:
      'A lead-generation landing page for the School of Fashion Design and Innovation, built at Hexanovate, with micro-animations and an enquiry form that sends leads straight into a Google Sheet.',
    points: [
      'Microanimations',
      'Lead form linked with google sheet',
      'Responsive Design'
    ],
    image: '/img/portfolio/sfdi/hero.gif',
    imageDir: 'sfdi',
    website: 'https://learn.sfdi.in/'
  },
  {
    id: 13,
    slug: 'tap-academy',
    title: 'Tap Academy: Code Education Platform Website',
    summary:
      'The website for Tap Academy, a coding education platform, with custom animations and its courses, blog and events served from Strapi CMS.',
    points: [
      'Beautiful custom animations',
      'Responsive design',
      'Integrated strapi CMS for courses, blog, events and more'
    ],
    image: '/img/portfolio/tap-academy/hero.gif',
    imageDir: 'tap-academy',
    website: 'https://thetapacademy.vercel.app/'
  },
  {
    id: 14,
    slug: 'uncodez',
    title: 'Uncodez.io: Web Development Agency Website',
    client: 'Uncodez',
    role: 'Web Developer',
    summary:
      'The website for Uncodez, the web development agency I worked with alongside Harshkumar Pasi.',
    points: [
      'Full page scroll design',
      'Beautiful Animations',
      'Responsive Design'
    ],
    image: '/img/portfolio/uncodez/uncodez.gif',
    website: 'https://uncodez.io/'
  },
  {
    id: 15,
    slug: 'dypatil',
    title: 'D.Y. Patil University: Exam Management System',
    summary:
      'An exam management system for D.Y. Patil University that handles students, courses and exams, and generates the university ledger and student marksheets as PDFs.',
    points: [
      'Students, Courses and Exams',
      'University Ledger Generation',
      'Marksheet Generation',
      'PDF Generation'
    ],
    image: '/img/portfolio/d-y-patil-crm/hero.gif',
    imageDir: 'd-y-patil-crm',
    website: 'https://dyp-exam-manager.vercel.app/'
  },
  {
    id: 16,
    slug: 'babydojo',
    title: 'Babydojo: The Baby Care Application',
    client: 'Upwork client',
    points: [
      'Beautiful animations',
      'Social Auth',
      'Responsive Design'
    ],
    image: '/img/portfolio/babydojo/display/hero.gif',
    website: 'https://babydojo-next-1.vercel.app/'
  }
].map((project) => ({ ...project, link: `/portfolio/${project.slug}` }));

// Projects with a hand-built page in /pages/portfolio — the [slug] template skips these.
export const customPageSlugs = ['vox-relay', 'mazaclass', 'kabbie', 'air3x3', 'babydojo'];

export const getProject = (slug) => projects.find((project) => project.slug === slug);
