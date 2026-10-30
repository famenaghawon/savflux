export interface Technology {
  name: string;
  group: 'language' | 'framework' | 'data' | 'infrastructure' | 'ai' | 'research';
  description: string;
  usedIn: string[];
}

export const technologies: Technology[] = [
  // Languages
  {
    name: 'TypeScript',
    group: 'language',
    description: 'Primary language for application logic and type-safe APIs.',
    usedIn: ['primeshieldhub', 'savflux'],
  },
  {
    name: 'JavaScript',
    group: 'language',
    description: 'Runtime language for browser and Cloudflare Workers.',
    usedIn: ['primeshieldhub', 'primeshieldhub-buildmart'],
  },
  {
    name: 'Python',
    group: 'language',
    description: 'Data pipelines, machine learning, and computational biology.',
    usedIn: ['cancer-biomarker-discovery'],
  },
  {
    name: 'Java',
    group: 'language',
    description: 'Object-oriented backend development.',
    usedIn: [],
  },
  {
    name: 'SQL',
    group: 'language',
    description: 'Relational queries against D1 and analytical databases.',
    usedIn: ['primeshieldhub', 'primeshieldhub-buildmart'],
  },
  {
    name: 'HTML',
    group: 'language',
    description: 'Semantic markup, accessibility, and structure.',
    usedIn: ['primeshieldhub', 'savflux'],
  },
  {
    name: 'CSS',
    group: 'language',
    description: 'Layout, responsive design, and animation.',
    usedIn: ['savflux'],
  },

  // Frameworks
  {
    name: 'Astro',
    group: 'framework',
    description: 'Static-first site framework with selective islands of interactivity.',
    usedIn: ['savflux'],
  },
  {
    name: 'Node.js',
    group: 'framework',
    description: 'Server-side JavaScript runtime.',
    usedIn: ['primeshieldhub'],
  },
  {
    name: 'Cloudflare Workers',
    group: 'framework',
    description: 'Serverless runtime at the edge. Zero cold-start, global distribution.',
    usedIn: ['primeshieldhub', 'primeshieldhub-buildmart'],
  },

  // Data
  {
    name: 'pandas',
    group: 'data',
    description: 'Data manipulation and analysis.',
    usedIn: ['cancer-biomarker-discovery'],
  },
  {
    name: 'scikit-learn',
    group: 'data',
    description: 'Machine learning pipelines and model evaluation.',
    usedIn: ['cancer-biomarker-discovery'],
  },
  {
    name: 'Power BI',
    group: 'data',
    description: 'Business intelligence and dashboarding.',
    usedIn: ['primeshieldhub'],
  },
  { name: 'Tableau', group: 'data', description: 'Interactive visualization.', usedIn: [] },
  {
    name: 'Excel',
    group: 'data',
    description: 'Analysis, modeling, and business reporting.',
    usedIn: ['primeshieldhub'],
  },

  // Infrastructure
  {
    name: 'Cloudflare',
    group: 'infrastructure',
    description: 'Global edge network, DNS, CDN, and security.',
    usedIn: ['primeshieldhub', 'primeshieldhub-buildmart', 'savflux'],
  },
  {
    name: 'D1',
    group: 'infrastructure',
    description: 'Serverless SQLite at the edge.',
    usedIn: ['primeshieldhub'],
  },
  {
    name: 'R2',
    group: 'infrastructure',
    description: 'S3-compatible object storage with zero egress.',
    usedIn: ['primeshieldhub'],
  },
  {
    name: 'KV',
    group: 'infrastructure',
    description: 'Edge key-value storage for session and cache data.',
    usedIn: ['primeshieldhub'],
  },
  {
    name: 'Paystack',
    group: 'infrastructure',
    description: 'Payments infrastructure for African businesses.',
    usedIn: ['primeshieldhub'],
  },
  {
    name: 'Resend',
    group: 'infrastructure',
    description: 'Transactional email delivery.',
    usedIn: ['primeshieldhub'],
  },

  // AI
  {
    name: 'Gemini API',
    group: 'ai',
    description: 'Generative AI for assistants, content, and automation.',
    usedIn: ['primeshieldhub'],
  },
  {
    name: 'AI-assisted development',
    group: 'ai',
    description: 'Accelerated engineering workflow with AI tooling.',
    usedIn: ['primeshieldhub', 'savflux'],
  },

  // Research
  {
    name: 'Bioinformatics',
    group: 'research',
    description: 'Computational analysis of biological data.',
    usedIn: ['cancer-biomarker-discovery'],
  },
  {
    name: 'Multi-omics',
    group: 'research',
    description: 'Integrated analysis of genomics, transcriptomics, and proteomics.',
    usedIn: ['cancer-biomarker-discovery'],
  },
];
