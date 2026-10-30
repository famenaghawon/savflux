import { getCollection } from 'astro:content';

export interface RelatedItem {
  type: 'project' | 'article' | 'experiment';
  title: string;
  summary: string;
  href: string;
  status?: string;
  category?: string;
}

/**
 * Compute related content across collections based on shared tags and categories.
 */
export async function getRelatedContent(
  current: {
    type: 'project' | 'article' | 'experiment';
    id: string;
    tags: string[];
    category?: string;
    relatedProjects?: string[];
    relatedArticles?: string[];
  },
  limit = 3,
): Promise<RelatedItem[]> {
  const [projects, articles, experiments] = await Promise.all([
    getCollection('projects'),
    getCollection('articles', ({ data }) => !data.draft),
    getCollection('experiments'),
  ]);

  const candidates: Array<RelatedItem & { score: number }> = [];

  const scores = (tags: string[], category?: string): number => {
    let score = 0;
    for (const tag of tags) {
      if (current.tags.includes(tag)) score += 2;
    }
    if (category && current.category && category === current.category) score += 1;
    return score;
  };

  if (current.type !== 'project') {
    for (const p of projects) {
      if (p.id === current.id) continue;
      const score = scores(p.data.stack, p.data.category);
      if (score === 0 && !current.relatedProjects?.includes(p.id)) continue;
      const bonus = current.relatedProjects?.includes(p.id) ? 100 : 0;
      candidates.push({
        type: 'project',
        title: p.data.title,
        summary: p.data.summary,
        href: `/work/${p.id}`,
        status: p.data.status,
        category: p.data.category,
        score: score + bonus,
      });
    }
  }

  if (current.type !== 'article') {
    for (const a of articles) {
      if (a.id === current.id) continue;
      const score = scores(a.data.tags, a.data.category);
      if (score === 0 && !current.relatedArticles?.includes(a.id)) continue;
      const bonus = current.relatedArticles?.includes(a.id) ? 100 : 0;
      candidates.push({
        type: 'article',
        title: a.data.title,
        summary: a.data.description,
        href: `/writing/${a.id}`,
        category: a.data.category,
        score: score + bonus,
      });
    }
  }

  if (current.type !== 'experiment') {
    for (const e of experiments) {
      if (e.id === current.id) continue;
      const score = scores(e.data.tags, e.data.category);
      if (score === 0) continue;
      candidates.push({
        type: 'experiment',
        title: e.data.title,
        summary: e.data.summary,
        href: `/lab/${e.id}`,
        status: e.data.status,
        category: e.data.category,
        score,
      });
    }
  }

  return candidates
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ score: _score, ...item }) => item);
}

/**
 * Get previous/next items from a sorted collection.
 */
export function getPrevNext<T extends { id: string }>(
  items: T[],
  currentId: string,
): { prev: T | null; next: T | null } {
  const index = items.findIndex((item) => item.id === currentId);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? (items[index - 1] ?? null) : null,
    next: index < items.length - 1 ? (items[index + 1] ?? null) : null,
  };
}
