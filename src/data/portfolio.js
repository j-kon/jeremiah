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

export const heroBadges = ['Bitcoin', 'Flutter', 'Open Source', 'Community'];

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
    value: 'Flutter apps, scalable architecture, API-driven delivery',
  },
  {
    label: 'bitcoin.systems',
    value: 'Wallet rails, BDK testnet experiments, Lightning product ideas',
  },
  {
    label: 'developer.culture',
    value: 'Technical writing, community building, practical education',
  },
];

export const heroTracks = [
  {
    label: 'Current Lane',
    description:
      'Shipping polished Flutter products with strong architecture, API integration, auth flows, Firebase-backed systems, and mobile UX discipline.',
  },
  {
    label: 'Build Direction',
    description:
      'Moving deeper into Bitcoin wallet infrastructure, Lightning-powered product flows, developer tooling, and freedom tech for emerging markets.',
  },
];

export const signalCards = [
  {
    eyebrow: 'Current Positioning',
    value: 'Mobile x Bitcoin',
    description:
      'Positioning at the intersection of Flutter product engineering, wallet rails, Lightning experiments, and builder-focused systems.',
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
    eyebrow: 'Narrative',
    value: 'Build + Explain',
    description:
      'Combining product work with writing, education, and Bitcoin thought-sharing so the technical direction is visible, not hidden.',
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
    name: 'Bitcoin Wallet Infrastructure',
    status: 'Prototype',
    tag: 'Self-Custody Direction',
    description:
      'Built and tested wallet functionality using Bitcoin Dev Kit on testnet, exploring transaction flow, wallet state management, and the foundations of self-custody architecture.',
    stack: ['BDK', 'Bitcoin Testnet', 'Wallet Architecture', 'Flutter'],
    highlights: [
      'Experimented with send and receive flows to better understand wallet behavior in practice.',
      'Explored self-custody patterns with an eye toward reliability, trust, and developer ergonomics.',
      'Used hands-on testnet work to ground future wallet infrastructure ideas in technical reality.',
    ],
    whyItMatters:
      'It shows a move beyond app-layer work into the mechanics of how Bitcoin products actually hold and move value.',
    challenge:
      'Understanding wallet state, transaction flow, and self-custody tradeoffs well enough to design something users can trust.',
    direction:
      'A foundation for deeper work in mobile wallet rails, signing flows, recovery thinking, and Bitcoin-native app architecture.',
    proofLabel: 'Testnet System View',
    proofTitle: 'Wallet flow mapped from receive address generation to transaction experimentation.',
    proofMetrics: [
      { value: 'BDK', label: 'Core toolkit' },
      { value: 'UTXO', label: 'Model explored' },
      { value: 'Testnet', label: 'Environment' },
    ],
    proofLines: ['generate.address()', 'sync.wallet_state()', 'compose.transaction()', 'broadcast -> validate flow'],
    focus:
      'A strategic foundation for deeper work in mobile wallet infrastructure and Bitcoin-native product development.',
    href: '#contact',
    linkLabel: 'Discuss Wallet Infrastructure',
    featured: true,
  },
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
    summary:
      'Contributed to Flutter product delivery with a focus on clean implementation, maintainable app structure, and turning evolving product requirements into reliable user-facing features.',
    themes: ['Architecture', 'Product Delivery', 'Cross-Functional Collaboration'],
  },
  {
    company: 'Jetz Technologies',
    role: 'Flutter Developer',
    summary:
      'Worked on mobile application flows that required strong API integration, thoughtful state management, and steady execution across feature delivery and refinement cycles.',
    themes: ['API Integration', 'State Management', 'Feature Ownership'],
  },
  {
    company: 'Zooch Solution',
    role: 'Flutter Developer',
    summary:
      'Helped build cross-platform experiences with attention to usability, implementation quality, and the practical engineering discipline needed to ship and maintain products.',
    themes: ['Cross-Platform Apps', 'Quality Delivery', 'User Experience'],
  },
  {
    company: 'Quicktel Solution',
    role: 'Flutter Developer',
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

export const contactIntro =
  'I am open to startup roles, Bitcoin-native product teams, developer relations opportunities, thoughtful consulting, and technical partnerships with builders who care about real-world impact.';
