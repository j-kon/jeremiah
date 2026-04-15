export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'community', label: 'Community' },
  { id: 'vision', label: 'Vision' },
  { id: 'contact', label: 'Contact' },
];

export const sectionIds = navItems.map(({ id }) => id);

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/jaykon',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jaykon',
    icon: 'linkedin',
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@jaykon',
    icon: 'medium',
  },
  {
    label: 'Email',
    href: 'mailto:hello@jaykon.dev',
    icon: 'mail',
  },
];

export const pageLinks = [
  { href: '/', label: 'Home' },
  { href: '/root-wallet', label: 'Root Wallet' },
  { href: '/resume', label: 'Resume' },
  { href: '/#contact', label: 'Contact' },
];

export const heroBadges = ['Root Wallet', '5+ Years Shipping', '20+ Events Led', 'Bitcoin x Flutter'];

export const featuredStack = [
  'Flutter',
  'Dart',
  'Firebase',
  'Riverpod',
  'GetX',
  'GraphQL',
  'SQLite',
  'Git',
  'Bitcoin',
  'Lightning',
  'BDK',
  'CI/CD',
];

export const heroMetrics = [
  {
    value: '5+',
    label: 'Years in mobile engineering',
  },
  {
    value: '20+',
    label: 'Developer events organized',
  },
  {
    value: '300+',
    label: 'Students reached through community work',
  },
];

export const heroTerminal = [
  {
    label: 'mobile.products',
    value: 'Architecture, auth, API integrations, release-ready mobile delivery',
  },
  {
    label: 'bitcoin.systems',
    value: 'Root Wallet, BDK testnet flows, wallet UX, and self-custody product thinking',
  },
  {
    label: 'developer.culture',
    value: '20+ events, 300+ students, technical writing, and practical education',
  },
];

export const heroTracks = [
  {
    label: 'Shipping Now',
    description:
      'Product-grade Flutter systems with strong architecture, API integration, auth flows, Firebase-backed delivery, and mobile UX discipline.',
  },
  {
    label: 'Going Deeper',
    description:
      'Root Wallet, wallet rails, Lightning-flavored product ideas, and developer tooling for builders working on real constraints.',
  },
];

export const signalCards = [
  {
    eyebrow: 'Flagship Build',
    value: 'Root Wallet',
    description:
      'A public open-source self-custody Bitcoin wallet that makes the shift from interest in wallet systems to actual product and architecture execution visible.',
  },
  {
    eyebrow: 'Execution',
    value: '5+ Years',
    description:
      'Hands-on mobile engineering experience across product delivery, architecture decisions, API integration, and quality-focused implementation.',
  },
  {
    eyebrow: 'Community',
    value: '20+ Events',
    description:
      'Organized programs and technical events that helped shape developer culture and support 300+ students with practical learning momentum.',
  },
  {
    eyebrow: 'Direction',
    value: 'Bitcoin + Dev Tools',
    description:
      'Building toward wallet infrastructure, Lightning product flows, and tools that help engineers think and ship more clearly.',
  },
];

export const projectSignals = [
  {
    label: 'Selection Lens',
    value: 'Depth over volume',
    description:
      'The goal is not to collect generic side projects. It is to build a body of work that compounds toward mobile wallet infrastructure, Lightning UX, and better developer systems.',
  },
  {
    label: 'What To Notice',
    value: 'Systems thinking',
    description:
      'Each project is framed around product leverage, technical constraints, and why the work matters beyond a surface-level feature list.',
  },
  {
    label: 'Trajectory',
    value: 'Apps to rails',
    description:
      'The through-line is clear: strong app execution today, deeper Bitcoin-native infrastructure and tooling tomorrow.',
  },
];

export const flagshipCaseStudy = {
  eyebrow: 'Flagship Case Study',
  name: 'Root Wallet',
  summary:
    'A self-custody Bitcoin wallet built in Flutter for public testnet, designed to prove product quality, architecture discipline, and wallet UX thinking in one coherent app.',
  thesis:
    'Root Wallet is the clearest expression of where the work is going: not just mobile UI, but wallet behavior, security-sensitive product flows, state orchestration, and a codebase that stays understandable as complexity grows.',
  stack: ['Flutter', 'Riverpod', 'BDK', 'Bitcoin Testnet', 'Flutter Secure Storage', 'Local Auth'],
  metrics: [
    { value: 'Public Testnet', label: 'Bitcoin environment' },
    { value: 'Riverpod + BDK', label: 'App orchestration + wallet engine' },
    { value: 'Golden Tests', label: 'High-value UI regression coverage' },
    { value: 'PIN / Biometrics', label: 'Security-sensitive user flows' },
  ],
  screenshots: [
    {
      title: 'Wallet Home',
      caption: 'Portfolio overview and recent activity in a polished app shell.',
      theme: 'Light',
      src: '/root-wallet/wallet-home-light.png',
    },
    {
      title: 'Receive Flow',
      caption: 'Receive address generation and QR handoff on public testnet.',
      theme: 'Dark',
      src: '/root-wallet/receive-dark.png',
    },
    {
      title: 'Send Review',
      caption: 'Amount, fee, and broadcast flow shaped for clarity and trust.',
      theme: 'Dark',
      src: '/root-wallet/send-dark.png',
    },
    {
      title: 'Security',
      caption: 'PIN, biometrics, and recovery re-auth treated as core product work.',
      theme: 'Light',
      src: '/root-wallet/security-light.png',
    },
  ],
  decisions: [
    {
      title: 'Feature-first clean architecture',
      description:
        'Presentation stays focused on rendering and input, Riverpod providers orchestrate flows, domain remains pure Dart, and data owns BDK, storage, and sync integrations.',
    },
    {
      title: 'Security as product, not a settings afterthought',
      description:
        'Recovery phrase access, app lock, PIN verification, and biometrics are designed as trust-sensitive flows instead of disconnected controls bolted on at the end.',
    },
    {
      title: 'Polish backed by repeatable QA',
      description:
        'Golden coverage for the main shell plus onboarding and security flows helps protect visual quality while the app and design system continue to evolve.',
    },
  ],
  nextSteps: [
    'Push deeper into wallet sync, transaction details, and recovery ergonomics.',
    'Strengthen the move from solid testnet product work to more production-grade wallet systems thinking.',
    'Keep compounding architecture, security UX, and Bitcoin-native app design in public.',
  ],
  links: [
    {
      label: 'Open Full Case Study',
      href: '/root-wallet',
      internal: true,
    },
    {
      label: 'View GitHub Repo',
      href: 'https://github.com/j-kon/root_wallet',
    },
    {
      label: 'Read Architecture Notes',
      href: 'https://github.com/j-kon/root_wallet/blob/main/docs/architecture.md',
    },
    {
      label: 'Browse Screenshot Guide',
      href: 'https://github.com/j-kon/root_wallet/blob/main/docs/screenshots/README.md',
    },
  ],
};

export const rootWalletPage = {
  title: 'Root Wallet',
  subtitle: 'Case study',
  eyebrow: 'Root Wallet / Case Study',
  intro:
    'Root Wallet is where the portfolio stops being directional and becomes concrete: wallet behavior, security-sensitive product flows, clean architecture, and Flutter delivery all meeting in one build.',
  summary:
    'The app is a self-custody Bitcoin wallet for public testnet with create and restore flows, send and receive, QR handoff, transaction history, app lock, biometrics, and golden-test-backed product surfaces.',
  architecture: [
    {
      title: 'Feature-first clean architecture',
      description:
        'The codebase is organized around `app`, `core`, `features`, and `shared`, with each feature keeping presentation, domain, and data boundaries clear.',
    },
    {
      title: 'Riverpod state orchestration',
      description:
        'Providers own async flows, state transitions, and multi-step interactions so widgets stay focused on rendering and user input.',
    },
    {
      title: 'Data integrations kept out of widgets',
      description:
        'BDK, storage, share wrappers, URL launchers, and sync concerns live in the data layer instead of leaking into UI code.',
    },
  ],
  productFlows: [
    'Create or restore a Bitcoin testnet wallet.',
    'Back up and confirm the recovery phrase.',
    'Generate a receive address with QR handoff.',
    'Review, fee-check, and broadcast send flows.',
    'Lock the app behind PIN, biometrics, and recovery re-auth.',
  ],
  engineeringNotes: [
    'Presentation renders state and captures user input.',
    'Domain remains pure Dart and expresses business intent.',
    'Data owns BDK wallet engine, persistence, and integrations.',
    'Golden suites cover the app shell plus onboarding and security flows.',
  ],
  docs: [
    {
      label: 'GitHub Repository',
      href: 'https://github.com/j-kon/root_wallet',
    },
    {
      label: 'Architecture Document',
      href: 'https://github.com/j-kon/root_wallet/blob/main/docs/architecture.md',
    },
    {
      label: 'README Screenshot Guide',
      href: 'https://github.com/j-kon/root_wallet/blob/main/docs/screenshots/README.md',
    },
  ],
};

export const aboutParagraphs = [
  'I started by shipping mobile products with Flutter, building the kind of features that need to be dependable in the real world: authentication, API integrations, Firebase-backed systems, local persistence, and app architecture that can grow with product demands.',
  'Over time, my curiosity moved deeper into Bitcoin, wallet infrastructure, Lightning-enabled experiences, and the systems thinking behind product engineering. I care about technology that increases user freedom, improves access, and holds up under practical constraints.',
  'Today, I am positioning myself at the intersection of mobile development, Bitcoin, and developer tooling. I still enjoy building polished products, but I am increasingly focused on infrastructure, thoughtful product flows, and tools that make builders more effective.',
];

export const trajectory = [
  'Started from hands-on mobile product engineering and cross-platform delivery.',
  'Expanded into Bitcoin primitives, self-custody wallet thinking, and Lightning UX exploration.',
  'Building toward open source contribution, wallet infrastructure, and developer-focused systems.',
];

export const principles = [
  'Reliable execution over flashy demos',
  'Product thinking grounded in real user constraints',
  'Freedom technology with practical use cases',
  'Community as a force multiplier for adoption',
];

export const workingWithMe = [
  {
    title: 'I like high-agency work',
    description:
      'I do well in environments where engineers are trusted to reason about product, not only tickets.',
  },
  {
    title: 'I think in systems, not just screens',
    description:
      'I care about the rails underneath the interface: state, trust, reliability, tradeoffs, and long-term maintainability.',
  },
  {
    title: 'I communicate as I build',
    description:
      'Writing, community work, and collaboration are part of how I operate, not separate from engineering.',
  },
];

export const skillGroups = [
  {
    title: 'Mobile Engineering',
    icon: 'mobile',
    summary: 'Cross-platform product delivery with an emphasis on architecture, usability, and maintainability.',
    items: ['Flutter', 'Dart', 'Riverpod', 'GetX', 'SQLite', 'Performance Optimization'],
  },
  {
    title: 'Bitcoin & Lightning',
    icon: 'bitcoin',
    summary: 'Exploring self-custody systems, wallet design, and Lightning-powered product experiences.',
    items: ['Bitcoin', 'Bitcoin Dev Kit', 'Wallet Architecture', 'Testnet Flows', 'Lightning Concepts', 'Self-Custody UX'],
  },
  {
    title: 'Backend / APIs',
    icon: 'backend',
    summary: 'Integrating products with services, auth systems, and data layers that support real shipping velocity.',
    items: ['REST APIs', 'GraphQL', 'Firebase', 'Authentication', 'Cloud Data Flows', 'Service Integration'],
  },
  {
    title: 'Developer Tools / Workflow',
    icon: 'tools',
    summary: 'Improving how products are planned, reviewed, and delivered through better systems and tooling.',
    items: ['Git', 'CI/CD', 'Product Thinking', 'Architecture Reviews', 'Planning Workflows', 'Technical Communication'],
  },
  {
    title: 'Community & Leadership',
    icon: 'community',
    summary: 'Building developer ecosystems, leading programs, and creating environments where people keep learning.',
    items: ['Community Building', 'Event Leadership', 'Mentorship', 'Developer Relations', 'Public Speaking', 'Writing'],
  },
];

export const projects = [
  {
    name: 'Lightning-Powered Meal Ordering System',
    status: 'In Progress',
    tag: 'Merchant Experience',
    description:
      'A prototype exploring how Lightning payments can support real-world ordering flows and create faster, clearer payment experiences for merchants and customers.',
    stack: ['Lightning Concepts', 'Payment UX', 'Product Prototyping', 'Mobile Flows'],
    highlights: [
      'Focused on payment clarity, reduced friction, and merchant-friendly transaction experience.',
      'Approached Lightning as a product design problem, not just a protocol curiosity.',
      'Explored how modern payment UX can make Bitcoin feel practical in everyday commerce.',
    ],
    whyItMatters:
      'Lightning only becomes useful when payment UX feels fast, understandable, and grounded in real merchant behavior.',
    challenge:
      'Translating protocol capability into a flow that still feels intuitive for people ordering food in the real world.',
    direction:
      'A product path toward merchant tools, payment surfaces, and consumer experiences built around Bitcoin-native speed.',
    proofLabel: 'Merchant Flow',
    proofTitle: 'Prototype focused on payment clarity, order confirmation, and reduced checkout hesitation.',
    proofMetrics: [
      { value: '<2 steps', label: 'Checkout intent' },
      { value: 'UX', label: 'Primary lever' },
      { value: 'LN', label: 'Payment rail' },
    ],
    proofLines: ['select.meal()', 'request.invoice()', 'confirm.payment()', 'merchant_status -> settled'],
    focus:
      'Shows a strong interest in turning Bitcoin rails into usable consumer and merchant products.',
    href: '#projects',
    linkLabel: 'View Concept',
  },
  {
    name: 'checkPRD / Developer Tooling Direction',
    status: 'Case Study',
    tag: 'Workflow Systems',
    description:
      'An evolving tooling direction centered on improving product requirement clarity, architecture thinking, and developer workflow quality before code is shipped.',
    stack: ['Developer Workflow', 'Architecture Thinking', 'Product Requirements', 'Systems Design'],
    highlights: [
      'Framed software planning as an engineering leverage problem worth solving well.',
      'Explored better ways to connect product intent, implementation detail, and technical review.',
      'Reflects a broader builder mindset around tools that help teams think more clearly.',
    ],
    whyItMatters:
      'Teams lose enormous time when requirements are vague, architecture is under-examined, and review happens too late.',
    challenge:
      'Building a workflow that improves clarity without creating more process overhead or slowing down shipping.',
    direction:
      'An evolving concept for tooling that helps teams reason about PRDs, architecture, and implementation before drift sets in.',
    proofLabel: 'Workflow Surface',
    proofTitle: 'A concept for connecting product intent, architecture direction, and developer review loops.',
    proofMetrics: [
      { value: 'PRD', label: 'Input' },
      { value: 'Arch', label: 'Review lens' },
      { value: 'DevEx', label: 'Outcome' },
    ],
    proofLines: ['capture.intent()', 'review.constraints()', 'map.systems()', 'ship.with.clarity()'],
    focus:
      'Signals product taste and an interest in building tools for other engineers, not only end-user apps.',
    href: '#contact',
    linkLabel: 'Explore Tooling Ideas',
  },
  {
    name: 'Flutter Product Work',
    status: 'Open Source Direction',
    tag: 'Professional Delivery',
    description:
      'A broad body of Flutter product work spanning cross-platform app development, API integration, authentication flows, scalable app structure, and performance-minded delivery.',
    stack: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Authentication', 'Scalable Architecture'],
    highlights: [
      'Built user-facing mobile experiences with production concerns in mind.',
      'Worked across app flows, backend integration, and maintainable client architecture.',
      'Balanced feature delivery with product quality, responsiveness, and long-term clarity.',
    ],
    whyItMatters:
      'Strong mobile foundations make the more ambitious Bitcoin and systems work credible, because they show real shipping discipline.',
    challenge:
      'Delivering product velocity without turning the codebase into a fragile set of short-term decisions.',
    direction:
      'A durable base of execution across Flutter, APIs, authentication, performance, and maintainable architecture.',
    proofLabel: 'Delivery Surface',
    proofTitle: 'Cross-platform app work spanning backend-connected flows, auth, state, and performance-minded execution.',
    proofMetrics: [
      { value: 'API', label: 'Integrations' },
      { value: 'Auth', label: 'User systems' },
      { value: 'Scale', label: 'Architecture' },
    ],
    proofLines: ['design.app_flows()', 'integrate.services()', 'stabilize.state()', 'ship.and.iterate()'],
    focus:
      'Establishes strong execution in mobile engineering while supporting a move into deeper systems work.',
    href: '#experience',
    linkLabel: 'See Experience',
  },
];

export const experience = [
  {
    company: 'Defixerhub',
    role: 'Flutter Developer',
    impact: 'Shipped maintainable mobile product features while helping the app surface stay clean under changing requirements.',
    summary:
      'Contributed to Flutter product delivery with a focus on clean implementation, maintainable app structure, and turning evolving product requirements into reliable user-facing features.',
    themes: ['Architecture', 'Product Delivery', 'Cross-Functional Collaboration'],
  },
  {
    company: 'Jetz Technologies',
    role: 'Flutter Developer',
    impact: 'Worked close to API-backed product flows where reliable state and integration quality directly affected delivery confidence.',
    summary:
      'Worked on mobile application flows that required strong API integration, thoughtful state management, and steady execution across feature delivery and refinement cycles.',
    themes: ['API Integration', 'State Management', 'Feature Ownership'],
  },
  {
    company: 'Zooch Solution',
    role: 'Flutter Developer',
    impact: 'Built cross-platform experiences with an emphasis on usability, implementation discipline, and shipping quality.',
    summary:
      'Helped build cross-platform experiences with attention to usability, implementation quality, and the practical engineering discipline needed to ship and maintain products.',
    themes: ['Cross-Platform Apps', 'Quality Delivery', 'User Experience'],
  },
  {
    company: 'Quicktel Solution',
    role: 'Flutter Developer',
    impact: 'Supported forward-moving releases across backend-connected mobile workflows and practical product iteration.',
    summary:
      'Supported product engineering efforts across mobile features, backend-connected workflows, and the iterative work required to keep releases useful, stable, and forward-moving.',
    themes: ['Mobile Workflows', 'Release Support', 'Execution Discipline'],
  },
];

export const communityStats = [
  { value: '20+', label: 'Events organized' },
  { value: '300+', label: 'Students impacted' },
  { value: '1', label: 'GDSC lead chapter' },
];

export const communityCards = [
  {
    title: 'Developer Ecosystem Building',
    description:
      'As a Google Developer Student Club Lead, I helped grow a developer culture around curiosity, practical learning, and momentum. The goal was not only hosting events, but creating a place where people felt capable of building.',
    details: ['Led 20+ events across technical learning and community engagement', 'Helped shape a culture that reached 300+ students', 'Focused on consistency, encouragement, and real technical progress'],
  },
  {
    title: 'Writing, Education, and Thought Leadership',
    description:
      'I write and share ideas around Bitcoin, technology, and community because building is only part of the work. Explaining ideas clearly helps adoption, sharpens thinking, and creates trust.',
    details: ['Publish technical and idea-driven writing on Medium', 'Use writing to explore Bitcoin, product direction, and builder mindset', 'Treat education as part of how freedom technology spreads'],
  },
];

export const writingPreviews = [
  {
    title: 'Bitcoin adoption needs practical product thinking, not only ideology.',
    category: 'Bitcoin / Product',
    summary:
      'Exploring how real adoption depends on tools, UX, education, and grounded product decisions that respect user constraints.',
    href: 'https://medium.com/@jaykon',
  },
  {
    title: 'What building with freedom technology looks like in emerging markets.',
    category: 'Freedom Tech / Systems',
    summary:
      'A lens on resilience, self-custody, and why infrastructure choices matter more when users face harder tradeoffs every day.',
    href: 'https://medium.com/@jaykon',
  },
  {
    title: 'Developer culture compounds when people feel capable, not intimidated.',
    category: 'Community / Leadership',
    summary:
      'Lessons from organizing events and building communities where technical growth becomes social, practical, and repeatable.',
    href: 'https://medium.com/@jaykon',
  },
];

export const writingArchive = [
  {
    title: 'Why wallet UX has to earn trust before it asks for conviction.',
    format: 'Bitcoin Product Note',
    summary:
      'A writing direction around why self-custody products succeed or fail at the level of clarity, recovery, and everyday user confidence.',
    topics: ['Wallet UX', 'Trust', 'Product Design'],
    href: 'https://medium.com/@jaykon',
  },
  {
    title: 'What Root Wallet taught me about state ownership and Bitcoin product boundaries.',
    format: 'Build Log',
    summary:
      'A deeper explanation of why Riverpod orchestration, clean boundaries, and QA discipline matter more once wallet behavior enters the picture.',
    topics: ['Root Wallet', 'Riverpod', 'Architecture'],
    href: 'https://medium.com/@jaykon',
  },
  {
    title: 'Freedom technology in emerging markets needs practical product decisions.',
    format: 'Systems Essay',
    summary:
      'A note on resilience, self-custody, and why distribution, UX, and constraints matter just as much as protocol ideals.',
    topics: ['Freedom Tech', 'Emerging Markets', 'Bitcoin'],
    href: 'https://medium.com/@jaykon',
  },
  {
    title: 'Developer culture compounds when people feel capable enough to keep shipping.',
    format: 'Community Memo',
    summary:
      'Lessons from GDSC leadership, technical education, and creating environments where momentum feels achievable instead of intimidating.',
    topics: ['Community', 'Leadership', 'Developer Culture'],
    href: 'https://medium.com/@jaykon',
  },
];

export const experiments = [
  {
    title: 'Root Wallet docs and QA surface',
    status: 'Open Source',
    description:
      'Architecture notes, screenshot guidance, and golden-test-backed product surfaces make the work inspectable instead of vague.',
    href: 'https://github.com/j-kon/root_wallet',
  },
  {
    title: 'Lightning merchant flow exploration',
    status: 'In Progress',
    description:
      'Payment clarity, invoice handoff, and merchant UX experiments around what practical Lightning checkout could feel like.',
    href: '#projects',
  },
  {
    title: 'checkPRD workflow direction',
    status: 'Concept',
    description:
      'A systems idea for improving requirement clarity, architecture review, and engineering alignment before code drifts.',
    href: '#projects',
  },
  {
    title: 'Bitcoin + builder writing in public',
    status: 'Ongoing',
    description:
      'Notes and essays used to sharpen product thinking around self-custody, freedom tech, and developer culture.',
    href: '#library',
  },
];

export const visionPoints = [
  {
    title: 'Bitcoin Open Source',
    description:
      'Contribute to open source work that improves Bitcoin tooling, wallet reliability, and practical access for builders and end users.',
  },
  {
    title: 'Mobile Wallet Infrastructure',
    description:
      'Build deeper expertise in the systems behind mobile wallets, from architecture choices to the user experience of self-custody.',
  },
  {
    title: 'Lightning-Enabled Products',
    description:
      'Design products that turn Lightning from an interesting capability into something genuinely useful in daily economic activity.',
  },
  {
    title: 'Freedom Tech for Emerging Markets',
    description:
      'Focus on products and infrastructure that make sense in markets where access, resilience, and self-sovereignty matter most.',
  },
];

export const nowNext = {
  now: [
    'Shipping cross-platform mobile product work with an emphasis on architecture, integration quality, and long-term clarity.',
    'Studying wallet mechanics, self-custody flows, and Bitcoin-native product decisions with more technical depth.',
    'Writing and speaking about Bitcoin, technology, and the kind of developer culture that helps people keep building.',
  ],
  next: [
    'Deeper contribution to Bitcoin open source and wallet infrastructure.',
    'More hands-on work with Lightning-enabled consumer and merchant products.',
    'Developer tools that improve planning, architecture review, and implementation clarity.',
  ],
};

export const contactMethods = [
  {
    label: 'Email',
    value: 'hello@jaykon.dev',
    href: 'mailto:hello@jaykon.dev',
    icon: 'mail',
  },
  {
    label: 'Location',
    value: 'Nigeria',
    href: null,
    icon: 'location',
  },
  {
    label: 'GitHub',
    value: 'github.com/jaykon',
    href: 'https://github.com/jaykon',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jaykon',
    href: 'https://www.linkedin.com/in/jaykon',
    icon: 'linkedin',
  },
  {
    label: 'Medium',
    value: 'medium.com/@jaykon',
    href: 'https://medium.com/@jaykon',
    icon: 'medium',
  },
];

export const contactLanes = [
  'Bitcoin-native product engineering',
  'Mobile wallet and Flutter systems work',
  'Developer relations and technical community building',
  'Early-stage product consulting and prototyping',
];

export const resumeHighlights = [
  '5+ years shipping mobile products with Flutter across real product constraints.',
  'Built Root Wallet, an open-source self-custody Bitcoin wallet for public testnet.',
  'Exploring wallet rails, Lightning product flows, and developer tooling direction.',
  'Led 20+ community events and supported 300+ students through developer ecosystem work.',
];

export const resumeSections = {
  strengths: [
    'Flutter architecture, state, auth, APIs, and shipping discipline.',
    'Bitcoin wallet UX, testnet product flows, and self-custody systems thinking.',
    'Technical writing, community leadership, and builder-facing communication.',
  ],
  opportunities: [
    'Bitcoin-native product engineering',
    'Mobile wallet systems and Flutter infrastructure work',
    'Developer relations and technical community leadership',
    'Early-stage product consulting and prototyping',
  ],
};

export const contactIntro =
  'I am open to startup roles, Bitcoin-native product teams, developer relations opportunities, thoughtful consulting, and technical partnerships where product quality and technical leverage both matter.';
