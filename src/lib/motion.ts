/**
 * Savflux motion primitives.
 * Every animation respects `prefers-reduced-motion`.
 */

export function revealOnScroll(
  selector = '[data-reveal]',
  options: { threshold?: number; rootMargin?: string } = {},
): void {
  const { threshold = 0.15, rootMargin = '0px 0px -80px 0px' } = options;

  if (typeof window === 'undefined') return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const elements = document.querySelectorAll<HTMLElement>(selector);

  if (reduceMotion || !('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold, rootMargin },
  );

  elements.forEach((el) => observer.observe(el));
}

export function initMotion(): void {
  revealOnScroll();
}
