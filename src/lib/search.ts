import { getCollection } from 'astro:content';

export interface SearchRecord {
  type: 'project' | 'article' | 'experiment' | 'page';
  title: string;
  description: string;
  href: string;
  body: string;
  tags: string[];
  category?: string;
  date?: string;
}

/**
 * Build a search index from all collections + key static pages.
 * Called at build time from /search-index.json.ts.
 */
export async function buildSearchIndex(): Promise<SearchRecord[]> {
  const [projects, articles, experiments] = await Promise.all([
    getCollection('projects'),
    getCollection('articles', ({ data }) => !data.draft),
    getCollection('experiments'),
  ]);

  const records: SearchRecord[] = [];

  for (const p of projects) {
    records.push({
      type: 'project',
      title: p.data.title,
      description: p.data.summary,
      href: `/work/${p.id}`,
      body: stripMarkdown(p.body ?? ''),
      tags: p.data.stack,
      category: p.data.category,
      date: p.data.publishedAt.toISOString(),
    });
  }

  for (const a of articles) {
    records.push({
      type: 'article',
      title: a.data.title,
      description: a.data.description,
      href: `/writing/${a.id}`,
      body: stripMarkdown(a.body ?? ''),
      tags: a.data.tags,
      category: a.data.category,
      date: a.data.publishedAt.toISOString(),
    });
  }

  for (const e of experiments) {
    records.push({
      type: 'experiment',
      title: e.data.title,
      description: e.data.summary,
      href: `/lab/${e.id}`,
      body: stripMarkdown(e.body ?? ''),
      tags: e.data.tags,
      category: e.data.category,
      date: e.data.updatedAt.toISOString(),
    });
  }

  // Static pages
  const pages: Array<Omit<SearchRecord, 'type'> & { type: 'page' }> = [
    {
      type: 'page',
      title: 'About',
      description: 'About Freedom Evbakoe Amenaghawon.',
      href: '/about',
      body: 'biography education timeline technology entrepreneur',
      tags: ['about'],
      date: '',
    },
    {
      type: 'page',
      title: 'Work',
      description: 'All projects and case studies.',
      href: '/work',
      body: 'projects portfolio case studies software ai data cloud',
      tags: ['work'],
      date: '',
    },
    {
      type: 'page',
      title: 'The Lab',
      description: 'Experiments, prototypes, ideas.',
      href: '/lab',
      body: 'experiments prototypes research ideas',
      tags: ['lab'],
      date: '',
    },
    {
      type: 'page',
      title: 'Technology',
      description: 'The technology stack.',
      href: '/technology',
      body: 'stack languages frameworks infrastructure ai',
      tags: ['technology'],
      date: '',
    },
    {
      type: 'page',
      title: 'Writing',
      description: 'Articles and essays.',
      href: '/writing',
      body: 'articles essays technical writing',
      tags: ['writing'],
      date: '',
    },
    {
      type: 'page',
      title: 'Now',
      description: 'Current focus.',
      href: '/now',
      body: 'currently building learning reading exploring',
      tags: ['now'],
      date: '',
    },
    {
      type: 'page',
      title: 'Open Source',
      description: 'Public repositories.',
      href: '/open-source',
      body: 'github open source repositories code',
      tags: ['open-source'],
      date: '',
    },
    {
      type: 'page',
      title: 'Contact',
      description: 'Get in touch.',
      href: '/contact',
      body: 'contact email collaboration speaking',
      tags: ['contact'],
      date: '',
    },
  ];

  records.push(...pages);

  return records;
}

function stripMarkdown(md: string): string {
  return md
    .replace(/^---[\s\S]*?---/, '') // frontmatter
    .replace(/```[\s\S]*?```/g, ' ') // code blocks
    .replace(/`[^`]+`/g, ' ') // inline code
    .replace(/!\[.*?\]\(.*?\)/g, ' ') // images
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // links → text
    .replace(/[#>*_~\-]+/g, ' ') // markdown symbols
    .replace(/\s+/g, ' ')
    .trim();
}
