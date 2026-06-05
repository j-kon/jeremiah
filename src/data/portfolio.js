export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'open-source', label: 'Open Source' },
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

export const heroBadges = ['Root Wallet', '6+ Years Shipping', '20+ Events Led', 'Bitcoin x Flutter'];

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
    value: '6+',
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
    value: '6+ Years',
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
    slug: 'lightning-meal-ordering',
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
    caseStudy: {
      eyebrow: 'Project Case Study',
      summary:
        'A Lightning-native ordering prototype exploring how Bitcoin payments can feel fast, legible, and merchant-friendly in a real checkout flow instead of a protocol demo.',
      role: 'Product engineer shaping the payment journey, interaction model, and merchant-facing checkout logic.',
      impact:
        'Turned a broad Lightning exploration into a concrete commerce flow with clearer product assumptions, trust-sensitive handoff points, and a reusable framing for merchant payment UX.',
      problem:
        'Most Lightning demos prove that invoices can be paid, but not that checkout feels calm, obvious, and practical for merchants managing real orders.',
      constraints: [
        'Customers need to understand payment state immediately without learning Bitcoin jargon.',
        'Merchants need confidence that settlement happened before the kitchen or fulfillment flow advances.',
        'The experience has to preserve Lightning speed without making the checkout feel technical.',
      ],
      decisions: [
        {
          title: 'Design around payment confidence',
          description:
            'The flow emphasizes invoice request, confirmation, and merchant settlement state so both sides understand exactly what happened before the order moves forward.',
        },
        {
          title: 'Treat Lightning as UX infrastructure',
          description:
            'Instead of centering protocol novelty, the prototype uses Lightning to improve wait time, payment clarity, and reduced checkout hesitation.',
        },
        {
          title: 'Model for everyday commerce',
          description:
            'The ordering context keeps the concept anchored in real merchant behavior where speed, trust, and handoff reliability matter more than technical spectacle.',
        },
      ],
      outcomes: [
        'Defined a clear merchant-to-customer payment flow from meal selection through settlement confirmation.',
        'Framed Lightning as a practical retail surface instead of a purely experimental payment rail.',
        'Created a stronger portfolio signal around Bitcoin product thinking in commerce contexts.',
      ],
      links: [
        { label: 'Jump to Contact', href: '#contact', internal: true },
      ],
    },
  },
  {
    slug: 'checkprd-tooling-direction',
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
    caseStudy: {
      eyebrow: 'Project Case Study',
      summary:
        'A tooling direction for helping teams review product requirements, architecture assumptions, and implementation intent before ambiguity turns into delivery drift.',
      role: 'Builder and systems thinker shaping the concept, workflow framing, and value proposition for engineering teams.',
      impact:
        'Converted a vague interest in better planning into a sharper tool concept centered on requirement quality, architectural review, and earlier engineering leverage.',
      problem:
        'Teams often start coding from incomplete PRDs, weak system reasoning, or late review loops, which creates rework that is expensive but preventable.',
      constraints: [
        'The tool has to improve clarity without introducing heavyweight process.',
        'Outputs need to be useful to product, engineering, and reviewers at the same time.',
        'The workflow should fit into how teams already plan and ship, not replace everything.',
      ],
      decisions: [
        {
          title: 'Start before code exists',
          description:
            'The concept focuses on the phase where teams can still correct direction cheaply: unclear requirements, weak constraints, and missing architecture thinking.',
        },
        {
          title: 'Bridge intent and implementation',
          description:
            'The workflow is designed to connect what the product is trying to achieve with how the system may need to be shaped to support it.',
        },
        {
          title: 'Optimize for leverage, not bureaucracy',
          description:
            'The goal is concise review surfaces that raise the quality of discussion without slowing down teams that need to move.',
        },
      ],
      outcomes: [
        'Clarified a developer-tooling direction that fits naturally beside product and architecture work.',
        'Strengthened the portfolio narrative beyond app delivery into systems and workflow thinking.',
        'Established a reusable concept for future prototypes, docs, or internal tooling experiments.',
      ],
      links: [
        { label: 'Start a Conversation', href: '#contact', internal: true },
      ],
    },
  },
  {
    slug: 'flutter-product-work',
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
    caseStudy: {
      eyebrow: 'Project Case Study',
      summary:
        'A body of production-oriented Flutter work covering auth, APIs, state, architecture, and feature delivery discipline across cross-platform mobile products.',
      role: 'Flutter engineer shipping user-facing features, integrating backend systems, and keeping app architecture maintainable as complexity grows.',
      impact:
        'Built the execution base that makes the portfolio credible: dependable delivery, clean app structure, and product-quality implementation across real mobile surfaces.',
      problem:
        'Shipping mobile features quickly is not enough on its own; the codebase also has to stay stable, understandable, and capable of supporting future product changes.',
      constraints: [
        'Features had to integrate with backend services and auth-sensitive user flows.',
        'State and architecture choices needed to support continued delivery without creating fragile screens.',
        'Quality mattered across both product polish and maintainability under evolving requirements.',
      ],
      decisions: [
        {
          title: 'Favor maintainable app structure',
          description:
            'Architecture choices were made to keep features understandable, integration boundaries clean, and future delivery safer.',
        },
        {
          title: 'Treat product quality as engineering work',
          description:
            'Responsiveness, usability, and stable behavior were approached as core delivery concerns instead of final-stage polish.',
        },
        {
          title: 'Use shipping discipline as foundation',
          description:
            'This work intentionally builds the credibility needed for deeper wallet, Bitcoin, and developer-systems projects later in the portfolio.',
        },
      ],
      outcomes: [
        'Delivered a strong cross-platform execution foundation across features, integrations, and mobile UX.',
        'Demonstrated reliable engineering judgment in real product contexts instead of tutorial-style apps.',
        'Created the baseline from which more ambitious Bitcoin-native and tooling work can compound.',
      ],
      links: [
        { label: 'Review Experience', href: '#experience', internal: true },
      ],
    },
  },
];

export const experience = [
  {
    company: 'Amchat',
    role: 'Flutter Developer',
    period: 'April 2025 — Present',
    impact: 'Delivered real-time communication and payment features in a cross-platform app while keeping performance and release quality high.',
    summary:
      'Built and maintained Flutter applications for Android and iOS, implementing real-time messaging, voice and video calls, and secure payment flows. Focused on UI/UX responsiveness, performance optimization, and release management while collaborating closely with backend engineers, designers, and QA in an Agile workflow.',
    themes: ['Real-Time Features', 'Payment Integration', 'Performance', 'Release Management'],
    links: [
      { label: 'Android', href: 'https://play.google.com/store/apps/details?id=tech.apesin.amchat&pcampaignid=web_share' },
      { label: 'iOS', href: 'https://apps.apple.com/us/app/amchat/id1625943689' },
    ],
  },
  {
    company: 'Defixerhub',
    role: 'Full Stack Developer',
    period: 'March 2024 — February 2026',
    highlight: 'Team Lead',
    impact: 'Owned the full product surface — mobile, backend, and frontend — while leading a team and shipping a reliable, scalable platform.',
    summary:
      'Developed and maintained Laravel backend services, admin dashboards, and REST APIs alongside cross-platform Flutter mobile apps and responsive React frontends. Led and mentored a team of developers, implemented CI/CD pipelines, and collaborated across product, design, and engineering to improve performance, security, and overall platform reliability.',
    themes: ['Flutter', 'Laravel', 'React', 'Team Leadership', 'CI/CD'],
    links: [
      { label: 'Android', href: 'https://play.google.com/store/apps/details?id=com.defixerhub.customer&pcampaignid=web_share' },
      { label: 'iOS', href: 'https://apps.apple.com/app/defixerhub/id6627338202' },
    ],
  },
  {
    company: 'Timart',
    role: 'Flutter Developer',
    period: 'September 2020 — February 2024',
    impact: 'Grew from contributor to a trusted team member by owning quality, collaboration, and a steady stream of user-facing improvements.',
    summary:
      'Contributed to app development across UI/UX and core functionality, participated in code reviews, and worked with QA to resolve bugs and performance issues. Collaborated with design teams to maintain consistent, user-friendly interfaces and took part in Agile team meetings throughout.',
    themes: ['UI/UX', 'Code Reviews', 'QA Collaboration', 'Agile'],
    links: [
      { label: 'Android', href: 'https://play.google.com/store/apps/details?id=com.quicktelsolution.quick_manager&pcampaignid=web_share' },
      { label: 'iOS', href: 'https://apps.apple.com/us/app/timart-business-app/id1553915442' },
    ],
  },
];

export const communityStats = [
  { value: '15+', label: 'Workshops, events & hackathons' },
  { value: '300+', label: 'Students at Google I/O Extended 2019' },
  { value: '124', label: 'Attendees at inaugural Google I/O Extended 2018' },
];

export const communityCards = [
  {
    title: 'Developer Ecosystem Building',
    description:
      'As Google Developer Student Club Lead at IBB University Lapai, I built a tech culture from scratch — starting with a single workshop in June 2018 and growing it into an established campus movement with university leadership support.',
    details: [
      'Organised Google I/O Extended 2018 (124 attendees) and Google I/O Extended 2019 (300+ attendees)',
      'Ran 10 workshops, 3 events, and 2 hackathons as DSC Lead — earning Vice-Chancellor recognition',
      'Built COVID-19 WhatsApp chatbot with a lecturer and API collaborator to make health info accessible to Nigerians on limited data',
    ],
  },
  {
    title: 'Writing, Education, and Thought Leadership',
    description:
      'I write to make Bitcoin, open source, and developer culture more legible — not as commentary, but as documentation of the work. The articles below range from community field notes to engineering reflections on real contributions.',
    details: [
      'Published Bitcoin education pieces for developers: transaction structure, mining, UTXO model, and why Bitcoin is not just a currency',
      'Wrote about getting my first PR merged in bdk-dart — the engineering discipline that matters beyond being technically correct',
      'Documented the DSC journey across four articles so future community builders have a real reference, not a polished highlight reel',
    ],
  },
];

export const writingPreviews = [
  {
    title: 'My first merged Bitcoin open source PR, and what it taught me about engineering.',
    category: 'Open Source / Engineering',
    summary:
      'PR #59 in bdk-dart taught me that useful work is not always the loud kind — and that contributing responsibly means reading norms, studying merged PRs, and exercising restraint over proving you can code.',
    href: 'https://medium.com/@jaykon/my-first-merged-bitcoin-open-source-pr-and-what-it-taught-me-about-engineering-a743f13528a4',
  },
  {
    title: 'Bitcoin is not a currency.',
    category: 'Bitcoin / Philosophy',
    summary:
      'Bitcoin was designed as a trust-based network, not a fast payment method. It represents freedom to own and transfer value without centralised control — and that distinction matters for how developers should think about building on it.',
    href: 'https://medium.com/@jaykon/bitcoin-is-not-a-currency-6414e7b04478',
  },
  {
    title: 'DSC is now a tech culture in my university.',
    category: 'Community / Leadership',
    summary:
      'From securing a venue to running Google I/O Extended with 300+ students — how a DSC chapter at IBB University Lapai became a real campus institution through partnerships, faculty support, and consistency.',
    href: 'https://medium.com/@jaykon/dsc-is-now-a-tech-culture-in-my-university-7c3b9ea4366',
  },
];

export const writingArchive = [
  {
    title: 'Understanding Bitcoin as a developer.',
    format: 'Technical Education',
    summary:
      'A developer-focused breakdown of Bitcoin fundamentals — wallets, keys, transaction structure (inputs, outputs, fees), mining, and the blockchain explorers worth bookmarking.',
    topics: ['Bitcoin', 'Transactions', 'UTXO Model'],
    href: 'https://medium.com/@jaykon/understanding-bitcoin-as-a-developer-8346c2a9661e',
  },
  {
    title: 'COVID-19 Naija WhatsApp chatbot.',
    format: 'Build Note',
    summary:
      'A practical response to Nigeria\'s first COVID-19 outbreak — a WhatsApp bot that reached users where they already were, because over 98% of Nigerian mobile users have WhatsApp and affordable data plans to match.',
    topics: ['Civic Tech', 'Nigeria', 'WhatsApp API'],
    href: 'https://medium.com/@jaykon/covid-19-naija-whatsapp-chatbot-f09a6994cc81',
  },
  {
    title: '2018 — a year of community building.',
    format: 'Year in Review',
    summary:
      'From hosting the first Google I/O Extended at IBB University (124 attendees) to attending the DSC Lagos summit — what 2018 taught me about working with people who are ready to be their best, not just already the best.',
    topics: ['Community', 'Google I/O', 'DSC'],
    href: 'https://medium.com/@jaykon/2018-70c25af4c61f',
  },
  {
    title: 'About DSC Ibrahim Badamasi Babangida University Lapai.',
    format: 'Community Field Note',
    summary:
      'The founding story and mission of the DSC chapter at IBBUL — practical skill-building, community-focused solutions, and why portfolio-building through live projects matters more than academic assignments alone.',
    topics: ['DSC', 'Developer Community', 'Nigeria'],
    href: 'https://medium.com/@jaykon/about-dsc-ibrahim-badamasi-babangida-university-lapai-d32a9371a60',
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

export const openSourceSignals = [
  {
    label: 'Merged PRs',
    value: '5 upstream merges',
    description:
      'Verified merged contributions across bitcoindevkit/bdk-dart and bitcoindevkit/bdk-ffi, spanning wallet tests, demo flows, and release-readiness work.',
  },
  {
    label: 'Review Surface',
    value: 'PR reviews + ACKs',
    description:
      'Contribution here is not only code authoring. It also includes review feedback, request-changes notes, approvals, and follow-up comments on other maintainers’ work.',
  },
  {
    label: 'Issue Threads',
    value: 'Roadmap participation',
    description:
      'There is visible participation in roadmap and troubleshooting threads around dev experience, release upgrades, and test cleanup direction.',
  },
];

export const openSourceProjects = [
  {
    title: 'BDK Dart Contributions',
    status: 'Merged + Reviewed',
    description:
      'Active upstream work in the Dart bindings and reference app surface, including authored merges, review comments, approvals, and roadmap discussion from a Flutter/mobile perspective.',
    proof: [
      'Merged PRs: #62 transaction detail scaffold, #59 pub.dev metadata and publish readiness',
      'Reviewed PR #65 with comments on BIP-39 validation, mnemonic UX hardening, and then approved after follow-up',
      'Reviewed open PR #22 with concrete CI, secret-scoping, and maintainability feedback that was later addressed by the author',
      'Commented on issues #16 and #55 around release readiness, dev experience, and dependency-upgrade direction',
    ],
    stack: ['Flutter', 'Dart', 'BDK', 'Developer Experience'],
    href: 'https://github.com/bitcoindevkit/bdk-dart',
    linkLabel: 'Open bdk-dart',
  },
  {
    title: 'BDK FFI Contributions',
    status: 'Merged + Reviewed',
    description:
      'Visible participation in the Rust/FFI layer through merged test improvements, wallet smoke tests, PR review threads, and issue discussion around test hygiene.',
    proof: [
      'Merged PRs: #974 offline wallet smoke tests and #982 noisy test print cleanup',
      'Reviewed PR #981, requested a README command fix, then approved once the user-facing issue was resolved',
      'Commented on release PR #971 with test-quality feedback around the new sighash API behavior',
      'Commented on issue #852 before taking on the cleanup that later became merged PR #982',
    ],
    stack: ['Rust', 'FFI', 'Wallet Testing', 'Review Work'],
    href: 'https://github.com/bitcoindevkit/bdk-ffi',
    linkLabel: 'Open bdk-ffi',
  },
  {
    title: 'How The Contribution Shows Up',
    status: 'Public Evidence',
    description:
      'The strongest signal is breadth: code merged upstream, issue participation, detailed review comments, approvals, and involvement even in PRs that were ultimately closed.',
    proof: [
      'Merged work across both the Dart bindings layer and the underlying FFI project',
      'Review participation includes request-changes, follow-up ACKs, and security/maintainability feedback',
      'Closed PR context is also part of the record: #981 was ultimately closed for project-scope reasons after your review helped catch and resolve a concrete README issue',
      'This makes the open source section about real upstream collaboration, not only personal repos',
    ],
    stack: ['Upstream Collaboration', 'Code Review', 'Issue Discussion'],
    href: '#vision',
    linkLabel: 'See Direction',
  },
  {
    title: 'WalletLens',
    status: 'Personal Project',
    description:
      'A Bitcoin testnet explorer built around how wallet developers actually reason about the UTXO model — balance composition, spendable outputs, transaction direction, fee posture, and live network context in one focused interface.',
    proof: [
      'Address inspection with wallet summary, UTXO breakdown, and spendable output insights',
      'Transaction analysis with vin/vout detail, fee posture, raw hex toggle, and routable tx pages',
      'Mempool insights covering queue depth, vsize, total fees, and histogram preview alongside fee band estimates',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Esplora API', 'Bitcoin'],
    href: 'https://github.com/j-kon/walletlens',
    linkLabel: 'Open WalletLens',
  },
  {
    title: 'Build Satoshi',
    status: 'Personal Project',
    description:
      'A guided Bitcoin developer onboarding product built for the Bitcoin Dev Project — turning the "what should I build first?" problem into a structured, track-based experience with milestone pacing and portfolio-ready artifacts.',
    proof: [
      'Three tracks: Lightning Tip Jar (beginner), Bitcoin Savings App in Flutter + BDK (intermediate), and PSBT Signer CLI in Rust (advanced)',
      'Each track ships milestone sequencing, starter code, and BDP learning links so learners finish with something real',
      'Client-side progress persistence via Zustand and localStorage — no backend, no auth, fully static',
    ],
    stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Framer Motion', 'Zustand'],
    href: 'https://github.com/j-kon/build-satoshi',
    linkLabel: 'Open Build Satoshi',
  },
];

export const openSourceTimelineFilters = ['All', 'Code', 'Review', 'Discussion'];

export const openSourceStats = [
  {
    value: '5',
    label: 'Merged PRs',
    detail: 'Across bdk-dart and bdk-ffi',
  },
  {
    value: '4+',
    label: 'Reviewed PRs',
    detail: 'With comments, request-changes, or ACKs',
  },
  {
    value: '4',
    label: 'Issue Threads',
    detail: 'Roadmap and troubleshooting discussions joined',
  },
  {
    value: '2',
    label: 'Repos',
    detail: 'Active contribution surfaces in the BDK ecosystem',
  },
  {
    value: '2026-05-12',
    label: 'Latest Activity',
    detail: 'Most recent visible BDK review activity',
  },
];

export const openSourceTimeline = [
  {
    type: 'Review',
    repo: 'bdk-dart',
    date: '2026-05-12',
    title: 'Reviewed precompiled-binaries PR with CI and secret-scoping feedback',
    summary:
      'Left concrete review comments on PR #22 covering archived GitHub Actions usage, broad secret inheritance, and duplicated CLI logic, with follow-up fixes later acknowledged in-thread.',
    href: 'https://github.com/bitcoindevkit/bdk-dart/pull/22',
    cta: 'Open PR #22',
  },
  {
    type: 'Review',
    repo: 'bdk-ffi',
    date: '2026-04-29',
    title: 'Reviewed release PR test coverage around the new sighash path',
    summary:
      'Flagged that a new sighash test in PR #971 could pass without exercising the intended behavior when no UTXOs were available, pushing for a stronger assertion path.',
    href: 'https://github.com/bitcoindevkit/bdk-ffi/pull/971',
    cta: 'Open PR #971',
  },
  {
    type: 'Review',
    repo: 'bdk-ffi',
    date: '2026-04-29',
    title: 'Requested a README fix on Swift example PR, then approved after follow-up',
    summary:
      'Reviewed PR #981, caught a user-facing mismatch between the documented `swift run` command and the actual executable target, then approved once it was corrected.',
    href: 'https://github.com/bitcoindevkit/bdk-ffi/pull/981',
    cta: 'Open PR #981',
  },
  {
    type: 'Code',
    repo: 'bdk-ffi',
    date: '2026-04-24',
    title: 'Merged test cleanup PR in bdk-ffi',
    summary:
      'PR #982 removed noisy print and debug output from targeted Rust test files while preserving behavior and tightening signal quality in successful test runs.',
    href: 'https://github.com/bitcoindevkit/bdk-ffi/pull/982',
    cta: 'Open PR #982',
  },
  {
    type: 'Code',
    repo: 'bdk-ffi',
    date: '2026-04-22',
    title: 'Merged offline wallet smoke tests in bdk-ffi',
    summary:
      'PR #974 added Rust-side wallet smoke tests covering realistic create-wallet, address reveal, derivation progression, and simple wallet usage flows.',
    href: 'https://github.com/bitcoindevkit/bdk-ffi/pull/974',
    cta: 'Open PR #974',
  },
  {
    type: 'Review',
    repo: 'bdk-dart',
    date: '2026-04-30',
    title: 'Reviewed wallet recovery flow and approved after follow-up',
    summary:
      'On PR #65, left comments around BIP-39 validation scope, relying on BDK as source of truth, and sensitive-input hardening before later approving once the tradeoffs were addressed.',
    href: 'https://github.com/bitcoindevkit/bdk-dart/pull/65',
    cta: 'Open PR #65',
  },
  {
    type: 'Code',
    repo: 'bdk-dart',
    date: '2026-04-30',
    title: 'Merged transaction detail scaffold into the bdk_demo flow',
    summary:
      'PR #62 added transaction detail navigation and rendering to the reference demo, building the app surface toward more realistic wallet behavior.',
    href: 'https://github.com/bitcoindevkit/bdk-dart/pull/62',
    cta: 'Open PR #62',
  },
  {
    type: 'Discussion',
    repo: 'bdk-ffi',
    date: '2026-04-18',
    title: 'Joined test-cleanup issue before taking on the implementation',
    summary:
      'In issue #852, scoped a conservative cleanup pass around noisy test output and clarified the plan to avoid behavior changes before turning that into the later merged PR.',
    href: 'https://github.com/bitcoindevkit/bdk-ffi/issues/852',
    cta: 'Open Issue #852',
  },
  {
    type: 'Discussion',
    repo: 'bdk-dart',
    date: '2026-03-18',
    title: 'Commented on bdk-dart release readiness from a Flutter/mobile lens',
    summary:
      'In issue #16, highlighted developer experience and the reference app as the two most critical ingredients for a production-ready bdk-dart release.',
    href: 'https://github.com/bitcoindevkit/bdk-dart/issues/16',
    cta: 'Open Issue #16',
  },
  {
    type: 'Code',
    repo: 'bdk-dart',
    date: '2026-03-18',
    title: 'Merged publish-readiness metadata work for bdk-dart',
    summary:
      'PR #59 added required pub.dev metadata and validated the package with a publish dry-run, moving the bindings closer to release readiness.',
    href: 'https://github.com/bitcoindevkit/bdk-dart/pull/59',
    cta: 'Open PR #59',
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
  '6+ years shipping mobile products with Flutter across real product constraints.',
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
