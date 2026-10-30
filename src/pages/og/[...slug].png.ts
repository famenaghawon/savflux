export const prerender = true;

import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';

interface OgData {
  title: string;
  subtitle?: string;
  eyebrow: string;
  category?: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const [projects, articles, experiments] = await Promise.all([
    getCollection('projects'),
    getCollection('articles', ({ data }) => !data.draft),
    getCollection('experiments'),
  ]);

  const paths: Array<{ params: { slug: string }; props: { og: OgData } }> = [];

  // Static pages
  paths.push({
    params: { slug: 'index' },
    props: {
      og: {
        eyebrow: 'Savflux',
        title: 'I build technology that turns ideas into working systems.',
      },
    },
  });
  paths.push({
    params: { slug: 'about' },
    props: {
      og: {
        eyebrow: 'About',
        title: 'Freedom Evbakoe Amenaghawon',
        subtitle: 'Technology entrepreneur, full-stack developer, systems builder.',
      },
    },
  });
  paths.push({
    params: { slug: 'work' },
    props: { og: { eyebrow: 'Work', title: 'Systems I\u2019ve built.' } },
  });
  paths.push({
    params: { slug: 'lab' },
    props: { og: { eyebrow: 'Savflux Lab', title: 'Experiments in progress.' } },
  });
  paths.push({
    params: { slug: 'writing' },
    props: { og: { eyebrow: 'Writing', title: 'Essays and technical notes.' } },
  });
  paths.push({
    params: { slug: 'technology' },
    props: { og: { eyebrow: 'Technology', title: 'What I work with.' } },
  });
  paths.push({
    params: { slug: 'now' },
    props: { og: { eyebrow: 'Now', title: 'What I\u2019m working on.' } },
  });
  paths.push({
    params: { slug: 'open-source' },
    props: { og: { eyebrow: 'Open Source', title: 'Public repositories.' } },
  });
  paths.push({
    params: { slug: 'media' },
    props: { og: { eyebrow: 'Media', title: 'Videos and appearances.' } },
  });
  paths.push({
    params: { slug: 'contact' },
    props: { og: { eyebrow: 'Contact', title: 'Get in touch.' } },
  });
  paths.push({
    params: { slug: 'search' },
    props: { og: { eyebrow: 'Search', title: 'Find anything.' } },
  });

  for (const p of projects) {
    paths.push({
      params: { slug: `work/${p.id}` },
      props: {
        og: {
          eyebrow: 'Project',
          title: p.data.title,
          subtitle: p.data.summary,
          category: p.data.category,
        },
      },
    });
  }

  for (const a of articles) {
    paths.push({
      params: { slug: `writing/${a.id}` },
      props: {
        og: {
          eyebrow: 'Article',
          title: a.data.title,
          subtitle: a.data.description,
          category: a.data.category,
        },
      },
    });
  }

  for (const e of experiments) {
    paths.push({
      params: { slug: `lab/${e.id}` },
      props: {
        og: {
          eyebrow: 'Lab',
          title: e.data.title,
          subtitle: e.data.summary,
          category: e.data.category,
        },
      },
    });
  }

  return paths;
};

export const GET: APIRoute = ({ props }) => {
  const { og } = props as { og: OgData };

  const titleFontSize = og.title.length > 60 ? 52 : og.title.length > 40 ? 60 : 68;
  const titleLines = wrapText(og.title, 32);
  const titleY = 280;
  const lineHeight = titleFontSize * 1.1;

  const subtitleLines = og.subtitle ? wrapText(og.subtitle, 78).slice(0, 2) : [];
  const subtitleStartY = titleY + titleLines.length * lineHeight + 30;

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#151C4F"/>
      <stop offset="100%" stop-color="#00D9FF"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#07090F"/>

  <!-- Top accent bar -->
  <rect width="1200" height="4" fill="url(#accent)"/>

  <!-- Brand mark + wordmark (top-left) -->
  <rect x="80" y="80" width="40" height="40" rx="10" fill="#151C4F" stroke="#2A3252" stroke-width="1"/>
  <text x="100" y="107" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-weight="600" font-size="16" fill="#00D9FF">SF</text>
  <text x="140" y="107" font-family="Inter, system-ui, sans-serif" font-weight="600" font-size="22" fill="#F5F7FA" letter-spacing="-0.02em">SAVFLUX</text>

  <!-- Eyebrow (top-right) -->
  <text x="1120" y="107" text-anchor="end" font-family="JetBrains Mono, monospace" font-weight="500" font-size="15" fill="#00D9FF" letter-spacing="0.1em">${escapeXml(og.eyebrow.toUpperCase())}</text>

  <!-- Title -->
  ${titleLines
    .map(
      (line, i) =>
        `<text x="80" y="${titleY + i * lineHeight}" font-family="Inter, system-ui, sans-serif" font-weight="600" font-size="${titleFontSize}" fill="#F5F7FA" letter-spacing="-0.03em">${escapeXml(line)}</text>`,
    )
    .join('\n  ')}

  <!-- Subtitle -->
  ${subtitleLines
    .map(
      (line, i) =>
        `<text x="80" y="${subtitleStartY + i * 34}" font-family="Inter, system-ui, sans-serif" font-weight="400" font-size="22" fill="#9AA4B2">${escapeXml(line)}</text>`,
    )
    .join('\n  ')}

  <!-- Divider line above footer -->
  <line x1="80" y1="510" x2="1120" y2="510" stroke="#1E2540" stroke-width="1"/>

  <!-- Footer left: descriptor -->
  <text x="80" y="560" font-family="Inter, system-ui, sans-serif" font-weight="400" font-size="17" fill="#9AA4B2">Technology Lab by Freedom Evbakoe Amenaghawon</text>

  <!-- Footer right: domain -->
  <text x="1120" y="560" text-anchor="end" font-family="JetBrains Mono, monospace" font-weight="400" font-size="17" fill="#5C6577">savflux.com</text>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};

function escapeXml(text: string): string {
  return text.replace(
    /[<>&"']/g,
    (c) =>
      ({
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&apos;',
      })[c] ?? c,
  );
}

function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    if ((current + ' ' + word).trim().length > maxChars && current.length > 0) {
      lines.push(current.trim());
      current = word;
    } else {
      current = (current + ' ' + word).trim();
    }
  }
  if (current.length > 0) lines.push(current.trim());

  return lines.slice(0, 3);
}
