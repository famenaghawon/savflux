/**
 * Reading time utilities.
 * 200 wpm is the standard for technical content.
 */
export function estimateReadingTime(text: string, wpm = 200): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wpm));
}

export function formatDate(date: Date, style: 'short' | 'long' = 'long'): string {
  return date.toLocaleDateString(
    'en-US',
    style === 'long'
      ? { year: 'numeric', month: 'long', day: 'numeric' }
      : { year: 'numeric', month: 'short' },
  );
}

export function formatRelativeDate(date: Date): string {
  const now = Date.now();
  const then = date.valueOf();
  const diff = now - then;
  const days = Math.floor(diff / 86_400_000);

  if (days < 1) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  if (days < 365) return `${Math.floor(days / 30)} months ago`;
  return `${Math.floor(days / 365)} years ago`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Extract headings from an Astro-rendered `<Content />` for TOC building.
 * Called from the client side — parses the DOM after render.
 */
export interface TocEntry {
  id: string;
  text: string;
  level: 2 | 3;
}

export function buildTocFromDOM(container: HTMLElement): TocEntry[] {
  const headings = container.querySelectorAll<HTMLHeadingElement>('h2, h3');
  const toc: TocEntry[] = [];

  headings.forEach((heading, index) => {
    const id = heading.id || `heading-${index}`;
    if (!heading.id) heading.id = id;

    toc.push({
      id,
      text: heading.textContent?.trim() ?? '',
      level: heading.tagName === 'H2' ? 2 : 3,
    });
  });

  return toc;
}
