import { SITE } from '@/lib/site';
import { ENTITY } from '@/data/entity';

export const IDS = {
  person: `${SITE.url}/#person`,
  website: `${SITE.url}/#website`,
  organization: `${ENTITY.primeshieldhub.url}/#organization`,
  personProfile: `${SITE.url}/about/#profile`,
} as const;

type JsonLd = Record<string, unknown>;

export function personSchema(): JsonLd {
  const sameAs = [
    ENTITY.person.social.github,
    ENTITY.person.social.orcid,
    ENTITY.person.social.linkedin,
    ENTITY.person.social.x,
    ENTITY.person.social.youtube,
    ENTITY.person.social.instagram,
  ].filter(Boolean) as string[];

  return {
    '@type': 'Person',
    '@id': IDS.person,
    name: ENTITY.person.name,
    alternateName: ENTITY.person.alternateNames,
    givenName: 'Freedom',
    additionalName: 'Evbakoe',
    familyName: 'Amenaghawon',
    jobTitle: ['Technology Entrepreneur', 'Full-Stack Developer', 'Systems Builder'],
    description:
      'Freedom Evbakoe Amenaghawon is a technology entrepreneur, full-stack developer, and systems builder. Founder of Savflux, a technology lab, and PrimeShieldHub, a technology-driven commerce platform.',
    url: `${SITE.url}/about/`,
    mainEntityOfPage: `${SITE.url}/about/`,
    email: `mailto:${ENTITY.person.email}`,
    image: `${SITE.url}/og/about.png`,
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'ORCID',
      value: ENTITY.person.orcid,
    },
    nationality: { '@type': 'Country', name: ENTITY.person.country },
    address: {
      '@type': 'PostalAddress',
      addressLocality: ENTITY.person.city,
      addressCountry: ENTITY.person.nationality,
    },
    sameAs,
    knowsAbout: [
      'Software Engineering',
      'Full-Stack Development',
      'Artificial Intelligence',
      'Cloud Infrastructure',
      'Serverless Architecture',
      'Data Analytics',
      'Bioinformatics',
      'Computational Biology',
      'Technology Entrepreneurship',
      'Digital Systems',
    ],
    owns: [{ '@id': IDS.website }, { '@id': IDS.organization }],
  };
}

export function websiteSchema(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': IDS.website,
    url: SITE.url,
    name: ENTITY.savflux.name,
    description: SITE.defaults.description,
    inLanguage: 'en-US',
    publisher: { '@id': IDS.person },
    creator: { '@id': IDS.person },
    datePublished: ENTITY.savflux.launched,
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

export function organizationSchema(): JsonLd {
  return {
    '@type': 'Organization',
    '@id': IDS.organization,
    name: ENTITY.primeshieldhub.name,
    alternateName: ENTITY.primeshieldhub.name,
    url: ENTITY.primeshieldhub.url,
    founder: { '@id': IDS.person },
    foundingDate: ENTITY.primeshieldhub.founded,
    description: ENTITY.primeshieldhub.description,
    knowsAbout: [
      'E-Commerce Infrastructure',
      'Enterprise Software',
      'Cloud Architecture',
      'Digital Commerce',
    ],
    sameAs: [ENTITY.primeshieldhub.url],
  };
}

export function profilePageSchema(): JsonLd {
  return {
    '@type': 'ProfilePage',
    '@id': IDS.personProfile,
    url: `${SITE.url}/about/`,
    name: `About ${ENTITY.person.name}`,
    isPartOf: { '@id': IDS.website },
    mainEntity: { '@id': IDS.person },
    about: { '@id': IDS.person },
    dateCreated: ENTITY.savflux.launched + 'T00:00:00Z',
    dateModified: new Date().toISOString(),
  };
}

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
    image: params.image ? [params.image] : [`${SITE.url}/og-default.svg`],
    articleSection: params.category,
    keywords: params.tags.join(', '),
    wordCount: params.wordCount,
    author: { '@id': IDS.person },
    publisher: { '@id': IDS.person },
    isPartOf: { '@id': IDS.website },
    mainEntityOfPage: { '@type': 'WebPage', '@id': params.url },
  };
}

export function projectSchema(params: {
  slug: string;
  url: string;
  title: string;
  summary: string;
  year: number;
  category: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
}): JsonLd {
  const projectDates = ENTITY.projects[params.slug as keyof typeof ENTITY.projects];
  const launched = projectDates?.launched ?? `${params.year}-01-01`;
  const updated = projectDates?.lastUpdated ?? launched;

  const base: JsonLd = {
    '@type': 'SoftwareApplication',
    '@id': `${params.url}#project`,
    url: params.liveUrl ?? params.url,
    name: params.title,
    description: params.summary,
    applicationCategory: params.category,
    operatingSystem: 'Any',
    datePublished: launched,
    dateModified: updated,
    author: { '@id': IDS.person },
    creator: { '@id': IDS.person },
    publisher: { '@id': IDS.person },
    isPartOf: { '@id': IDS.website },
    programmingLanguage: params.stack,
  };

  if (params.repoUrl) base.codeRepository = params.repoUrl;
  if (params.liveUrl) base.sameAs = [params.liveUrl];

  return base;
}

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

export function graph(...items: (JsonLd | null | undefined)[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@graph': items.filter((item): item is JsonLd => Boolean(item)),
  };
}
