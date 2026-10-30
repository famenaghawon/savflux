---
title: Savflux
summary: A personal technology laboratory for documenting, building, and shipping.
description: The meta-project — a technology lab that documents itself, its operator, and everything built within it. Built with Astro, TypeScript, and Cloudflare Workers.
year: 2026
role: Founder & Engineer
status: live
category: software
stack:
  - Astro
  - TypeScript
  - Cloudflare Workers
  - Tailwind CSS
  - lucide-static
heroImage: /images/projects/savflux/hero.png
heroImageAlt: Savflux homepage
gallery:
  - src: /images/projects/savflux/design-system.png
    alt: Savflux design system catalog
    caption: Design system catalog at /design
featured: true
weight: 80
relatedArticles:
  - why-i-built-savflux
publishedAt: 2026-10-01
updatedAt: 2026-10-01
---

Savflux is this site — a technology laboratory, a personal identity, and a public record of what gets built.

## Problem

Personal brands online are either:
- **Portfolios** — static, unmaintained, one-off
- **Blogs** — commentary without engineering
- **Company sites** — polished but anonymous

None of these fit a technical founder who builds systems, experiments in public, and needs a durable, ownable, extensible home on the internet.

## What I Built

A static-first, edge-deployed, content-driven technology platform:

- **Static site** built with Astro 7
- **Type-safe content collections** with Zod schemas
- **Design system** as a component library
- **Dynamic routing** for projects, experiments, and articles
- **Full SEO** — sitemap, robots, OG, Twitter cards, canonical URLs
- **Cloudflare Workers** deployment via GitHub Actions
- **Zero JavaScript shipped** for content pages — pure HTML/CSS
- **Security headers** — CSP, HSTS, X-Frame-Options, Permissions-Policy
- **Performance budget** enforced — LCP under 1.8s, CLS under 0.05

## Architecture

savflux.com
                     │
                     ▼
              Cloudflare Workers
                     │
            ┌────────┼────────┐
            ▼        ▼        ▼
         HTML/CSS  Content  Assets
          (static)  (MD)   (SVG)


The build happens in GitHub Actions; the site is deployed to Cloudflare's global edge; every visitor sees HTML from the nearest datacenter.

## Stack

- **Framework:** Astro 7
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS 4 + design tokens
- **Icons:** lucide-static (inline SVG)
- **Content:** Astro Content Collections + MDX
- **Deployment:** Cloudflare Workers
- **CI/CD:** GitHub Actions
- **Fonts:** Inter Display · Inter · JetBrains Mono

## Challenges

**1. Version drift.** Astro, its Cloudflare adapter, Tailwind, and TypeScript all move fast. Solution: pin everything in `package-lock.json` and upgrade deliberately.

**2. Icon library churn.** Lucide removed brand icons mid-project. Solution: generic placeholders for now, `simple-icons` when we need real brand marks.

**3. Cloudflare DNS conflicts.** Auto-imported placeholder DNS records blocked Worker custom domains. Solution: delete the placeholder records; let Workers own DNS.

**4. Content architecture.** Every page needed a schema-driven model, not ad-hoc templates. Solution: Zod-validated collections from day one.

## Lessons

- **Own your infrastructure.** What runs on your domain, in your repo, on your account — that's what you control.
- **Type safety pays for itself.** The Zod schemas caught content errors that would otherwise ship.
- **Static is fast.** Zero JS shipped means every page loads in under a second from anywhere on Earth.
- **Dogfood everything.** Savflux documents itself using the same patterns it advocates — meta-consistency matters.

## Outcome

Live at https://savflux.com. A technical identity that can grow to hundreds of pages, dozens of experiments, and every project shipped — without ever needing a redesign.
