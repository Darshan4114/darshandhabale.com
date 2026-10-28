// Single source of truth for the portfolio.
// Every project gets a case study at /portfolio/<slug>.
//  - `talkingHead`: Vimeo/YouTube embed URL for the case study video (optional).
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
    summary:
      'A CRM and revenue engine for coaching centres: lead pipelines, attendance, automated fee collection and WhatsApp payments, saving admins 10+ hours a week.',
    points: [
      'Student management',
      'Automated fee collection',
      'Class management',
      'Whatsapp integration',
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
    title: 'Crazico: VentureMind.ai and an AI Site Generator',
    client: 'Crazico',
    period: 'Dec 2023 – Jul 2025',
    role: 'Cloud & Backend Developer',
    summary:
      'Built the core backend of VentureMind.ai, a multi-modal AI platform with a model orchestration layer and unified token billing, plus an AI site generator that shipped 100+ production websites.',
    points: [
      'Multi-modal AI orchestration',
      'Unified token billing',
      'Real-time voice agents (ElevenLabs, OpenAI)',
      'AI site generator: 100+ sites, 80% less dev time'
    ],
    stack: ['Node.js', 'OpenAI API', 'ElevenLabs', 'AWS', 'Redis'],
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
      'A fintech LC discounting platform with three dashboards (business, bank and admin) and role-specific flows that give businesses same-day working capital.',
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
      'A configurable workflow rule engine in Apex for RocketLoans, a US loan origination platform on Salesforce, with a reusable LWC component library for its UI. The engine was reused across several client projects.',
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
    title: 'Smart Tutor and MirSolutions.in',
    client: 'MirSolutions',
    role: 'Developer',
    summary:
      'Reviewed the Smart Tutor product end to end, then expanded my scope to help build the MirSolutions.in website, spotting pitfalls before it went operational.',
    points: [
      'Product review of Smart Tutor',
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
    title: 'Uncodez.io website: Web Development Agency Website',
    client: 'Uncodez',
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
    title: 'D.Y. Patil University Exam Management System',
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
