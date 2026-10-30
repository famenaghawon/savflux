/**
 * Savflux performance budgets.
 * Every page must meet these. Anything that would break them requires
 * an explicit decision, documented in the PR.
 */

export const BUDGET = {
  // Core Web Vitals (mobile, 4G)
  LCP: 1800, // ms — Largest Contentful Paint
  INP: 150, // ms — Interaction to Next Paint
  CLS: 0.05, // score — Cumulative Layout Shift

  // Bundle sizes (gzipped)
  jsTotal: 30 * 1024, // 30 KB
  jsPerRoute: 15 * 1024, // 15 KB
  cssTotal: 25 * 1024, // 25 KB
  fontTotal: 90 * 1024, // 90 KB (3 fonts × 4 weights avg)

  // Page weight
  pageHTML: 60 * 1024, // 60 KB
  pageTotal: 400 * 1024, // 400 KB initial

  // Requests
  initialRequests: 12, // above-the-fold critical requests
} as const;

/**
 * Web Vitals thresholds for reporting.
 * https://web.dev/vitals/
 */
export const VITALS = {
  LCP: { good: 2500, needsImprovement: 4000 },
  INP: { good: 200, needsImprovement: 500 },
  CLS: { good: 0.1, needsImprovement: 0.25 },
  FCP: { good: 1800, needsImprovement: 3000 },
  TTFB: { good: 800, needsImprovement: 1800 },
} as const;

/**
 * Format bytes for display.
 */
export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}
