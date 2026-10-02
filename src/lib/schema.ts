import { SITE } from '@/lib/site';

/**
 * Canonical @id references — every entity in the graph points to these.
 */
export const IDS = {
  person: `${SITE.url}/#person`,
  website: `${SITE.url}/#website`,
  organization: `${SITE.organization.url}/#organization`,
  personProfile: `${SITE.url}/about/#profile`,
} as const;

type JsonLd = Record<string, unknown>;

/**
 * The Person entity — Freedom Evbakoe Amenaghawon.
 * Referenced by every Article, Project, and Page as `author` or `creator`.
 */
export function personSchema(): JsonLd {
  const sameAs = [
    SITE.author.github,
    SITE.author.linkedin,
    SITE.author.x,
    SITE.author.youtube,
    SITE.author.instagram,
  ].filter(Boolean);

  return {
    '@type': 'Person',
    '@id': IDS.person,
    name: SITE.author.name,
    givenName: SITE.author.givenName,
    additionalName: SITE.author.additionalName,
    familyName: SITE.author.familyName,
    jobTitle: SITE.author.role,
    url: SITE.url,
    email: `mailto:${SITE.author.email}`,
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'ORCID',
      value: SITE.author.orcid,
    },
    sameAs,
    knowsAbout: [
      'Software Engineering',
      'Full-Stack Development',
      'Artificial Intelligence',
      'Cloud Infrastructure',
      'Data Analytics',
      'Bioinformatics',
      'Technology Entrepreneurship',
      'Digital Systems',
    ],
    owns: { '@id': IDS.website },
    founderOf: { '@id': IDS.organization },
  };
}

/**
 * The WebSite entity — savflux.com.
 */
export function websiteSchema(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': IDS.website,
    url: SITE.url,
    name: SITE.name,
    description: SITE.defaults.description,
    inLanguage: 'en-US',
    publisher: { '@id': IDS.person },
    creator: { '@id': IDS.person },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * The Organization entity — PrimeShieldHub.
 */
export function organizationSchema(): JsonLd {
  return {
    '@type': 'Organization',
    '@id': IDS.organization,
    name: SITE.organization.name,
    url: SITE.organization.url,
    founder: { '@id': IDS.person },
    foundingDate: '2025',
    description:
      'Technology-driven commerce infrastructure for premium gadgets and enterprise procurement.',
  };
}

/**
 * The ProfilePage — wraps /about.
 */
export function profilePageSchema(): JsonLd {
  return {
    '@type': 'ProfilePage',
    '@id': IDS.personProfile,
    url: `${SITE.url}/about/`,
    name: `About ${SITE.author.name}`,
    isPartOf: { '@id': IDS.website },
    mainEntity: { '@id': IDS.person },
    about: { '@id': IDS.person },
    dateCreated: '2026-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  };
}

/**
 * Article schema for /writing/[slug].
 */
export function articleSchema(params: {
  url: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  image?: string;
  category: string;
  tags: string[];
  wordCount?: number;
}): JsonLd {
  return {
    '@type': 'Article',
    '@id': `${params.url}#article`,
    url: params.url,
    headline: params.title,
    description: params.description,
    datePublished: params.publishedAt,
    dateModified: params.updatedAt ?? params.publishedAt,
    inLanguage: 'en-US',
    image: params.image ? [params.image] : [`${SITE.url}/og-default.png`],
    articleSection: params.category,
    keywords: params.tags.join(', '),
    wordCount: params.wordCount,
    author: { '@id': IDS.person },
    publisher: { '@id': IDS.person },
    isPartOf: { '@id': IDS.website },
    mainEntityOfPage: { '@type': 'WebPage', '@id': params.url },
  };
}

/**
 * SoftwareApplication / CreativeWork schema for /work/[slug].
 */
export function projectSchema(params: {
  url: string;
  title: string;
  summary: string;
  year: number;
  category: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
}): JsonLd {
  const base: JsonLd = {
    '@type': 'SoftwareApplication',
    '@id': `${params.url}#project`,
    url: params.url,
    name: params.title,
    description: params.summary,
    applicationCategory: params.category,
    operatingSystem: 'Any',
    datePublished: `${params.year}-01-01`,
    author: { '@id': IDS.person },
    creator: { '@id': IDS.person },
    publisher: { '@id': IDS.person },
    isPartOf: { '@id': IDS.website },
    programmingLanguage: params.stack,
  };

  if (params.liveUrl) base.url = params.liveUrl;
  if (params.repoUrl) {
    base.codeRepository = params.repoUrl;
  }
  if (params.liveUrl) {
    base.sameAs = [params.liveUrl];
  }

  return base;
}

/**
 * Lab entry schema for /lab/[slug].
 */
export function experimentSchema(params: {
  url: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  startedAt: string;
  updatedAt: string;
}): JsonLd {
  return {
    '@type': 'CreativeWork',
    '@id': `${params.url}#experiment`,
    url: params.url,
    name: params.title,
    description: params.summary,
    genre: params.category,
    keywords: params.tags.join(', '),
    dateCreated: params.startedAt,
    dateModified: params.updatedAt,
    creator: { '@id': IDS.person },
    isPartOf: { '@id': IDS.website },
  };
}

/**
 * Wraps all schemas in a top-level @graph.
 * Only emits entries that are actually present.
 */
export function graph(...items: (JsonLd | null | undefined)[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@graph': items.filter((item): item is JsonLd => Boolean(item)),
  };
}
