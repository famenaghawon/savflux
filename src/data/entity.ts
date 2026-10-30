/**
 * SAVFLUX — CANONICAL ENTITY DATA
 *
 * This file is the single source of truth for all dated facts about
 * Freedom Evbakoe Amenaghawon, Savflux, PrimeShieldHub, and every
 * project on this site.
 *
 * RULES:
 * 1. Every date here must be VERIFIABLE from at least one external source
 *    (a public launch, a press mention, a LinkedIn post, an archive.org
 *    snapshot, an ORCID record, a GitHub repository, etc.).
 * 2. If you change a date here, verify it still matches what the source
 *    (PrimeShieldHub, LinkedIn, ORCID, GitHub) declares.
 * 3. Never guess. If unsure, leave the field undefined and mark it "TBD"
 *    in a comment. An absent date is better than a wrong one.
 * 4. All dates are ISO 8601. For year-only facts, use YYYY-01-01 as the
 *    convention (Schema.org accepts this for foundingDate etc.).
 */

export const ENTITY = {
  // ---------------------------------------------------------
  // PERSON — Freedom Evbakoe Amenaghawon
  // ---------------------------------------------------------
  person: {
    name: 'Freedom Evbakoe Amenaghawon',
    alternateNames: [
      'Freedom Amenaghawon',
      'Freedom Evbakoe Amenaghawon',
      'Freedom E. Amenaghawon',
    ],
    email: 'f.e.amenaghawon@gmail.com',
    orcid: '0009-0003-1457-809X',
    nationality: 'NG',
    city: 'Benin City',
    country: 'Nigeria',
    /**
     * When Freedom first began publishing technical work publicly.
     * Verify: this should match the earliest public artifact
     * (first GitHub commit, first LinkedIn post, first ORCID record).
     * If unknown, leave undefined and mark for later verification.
     */
    beganPublishing: '2024-01-01', // TBD — verify from GitHub earliest repo
    // Social profiles — fill in only once verified
    social: {
      email: 'f.e.amenaghawon@gmail.com',
      orcid: '0009-0003-1457-809X',
      github: 'https://github.com/famenaghawon',
      linkedin: 'https://www.linkedin.com/in/freedom-amenaghawon-720456414',
      x: 'https://x.com/freedomamena?s=11',
      youtube: 'https://youtube.com/@freedomamenaghawon?si=UFBgMFzfNZGb2AS3',
      instagram:
        'https://www.instagram.com/freedomamenaghawon?stkn=MXViYTR1cW1hbzg4cw%3D%3D&utm_source=qr',
      tiktok: 'https://www.tiktok.com/@freedomamenaghawon?_r=1&_t=ZN-9AB7MTosJ8A',
    },
  },

  // ---------------------------------------------------------
  // ORGANIZATION — PrimeShieldHub
  // ---------------------------------------------------------
  primeshieldhub: {
    name: 'PrimeShieldHub',
    url: 'https://primeshieldhub.com',
    /**
     * The year PrimeShieldHub was founded.
     * VERIFY: this must match what primeshieldhub.com declares publicly,
     * what your LinkedIn profile says, and what any press mention shows.
     * If primeshieldhub.com says "Founded 2024" and this file says "2025",
     * Google sees a contradiction — fix one or the other.
     */
    founded: '2026-02-05', // ← VERIFY against primeshieldhub.com footer/About
    description:
      'Technology-driven commerce infrastructure for premium gadgets and enterprise procurement.',
  },

  // ---------------------------------------------------------
  // WEBSITE — Savflux
  // ---------------------------------------------------------
  savflux: {
    name: 'Savflux',
    url: 'https://savflux.com',
    /**
     * The date Savflux went live on the public web.
     * This should match the date of the first successful deploy that
     * made savflux.com publicly available.
     */
    launched: '2026-10-01',
    descriptor: 'Technology Lab by Freedom Evbakoe Amenaghawon',
  },

  // ---------------------------------------------------------
  // PROJECTS — dated facts for each
  // ---------------------------------------------------------
  projects: {
    primeshieldhub: {
      // When PrimeShieldHub became publicly available (not just founded).
      // This is the date you'd tell a journalist: "PrimeShieldHub launched on ..."
      launched: '2026-02-05', // ← VERIFY against primeshieldhub.com
      lastUpdated: '2026-09-01',
    },
    buildmart: {
      launched: '2026-08-01',
      lastUpdated: '2026-08-01',
    },
    savflux: {
      launched: '2026-10-01',
      lastUpdated: new Date().toISOString().split('T')[0]!,
    },
    'cancer-biomarker-discovery': {
      launched: '2025-12-01',
      lastUpdated: '2025-12-01',
    },
    'ajo-esusu': {
      launched: '2026-06-01',
      lastUpdated: '2026-09-01',
    },
  },
} as const;

export type ProjectSlug = keyof typeof ENTITY.projects;
