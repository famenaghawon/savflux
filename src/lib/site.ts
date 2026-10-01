export const SITE = {
  name: 'Savflux',
  tagline: 'Where ideas become technology.',
  descriptor: 'Technology Lab by Freedom Evbakoe Amenaghawon',
  url: 'https://savflux.com',
  locale: 'en',
  language: 'en',
  author: {
    name: 'Freedom Evbakoe Amenaghawon',
    givenName: 'Freedom',
    additionalName: 'Evbakoe',
    familyName: 'Amenaghawon',
    role: 'Technology Entrepreneur & Full-Stack Developer',
    orcid: '0009-0003-1457-809X',
    github: 'https://github.com/famenaghawon',
    linkedin: 'https://www.linkedin.com/in/freedom-amenaghawon-720456414',
    x: 'https://x.com/freedomamena?s=11',
    youtube: 'https://youtube.com/@freedomamenaghawon?si=UFBgMFzfNZGb2AS3',
    instagram:
      'https://www.instagram.com/freedomamenaghawon?stkn=MXViYTR1cW1hbzg4cw%3D%3D&utm_source=qr',
    tiktok: 'https://www.tiktok.com/@freedomamenaghawon?_r=1&_t=ZN-9AB7MTosJ8A',
  },
  organization: {
    name: 'PrimeShieldHub',
    url: 'https://primeshieldhub.com',
  },
  nav: {
    primary: [
      { label: 'Work', href: '/work' },
      { label: 'Lab', href: '/lab' },
      { label: 'Writing', href: '/writing' },
      { label: 'Technology', href: '/technology' },
      { label: 'About', href: '/about' },
      { label: 'Now', href: '/now' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  defaults: {
    title: 'Savflux — Technology Lab by Freedom Evbakoe Amenaghawon',
    description:
      'Software · AI · Data · Cloud · Digital Systems. The technical laboratory of Freedom Evbakoe Amenaghawon.',
    ogImage: '/og-default.png',
  },
} as const;
