---
title: Why I Built Savflux
description: On building a technology identity that belongs to me — separate from the businesses it serves, and durable across whatever comes next.
category: Technology
tags:
  - savflux
  - identity
  - technology
publishedAt: 2026-10-01
relatedProjects:
  - savflux
---

Savflux is a technology lab. It documents what I build, what I know, what I'm experimenting with, and how I think about technology.

It's also the first property I've built that belongs entirely to me — separate from any business, any product, any company.

That distinction matters more than it might seem.

## The Problem With Business-Only Presence

For years, my online presence was: PrimeShieldHub.

The company website. The corporate brand. The commerce platform.

Which is fine — until it isn't.

**Problems with business-only presence:**

- **Merging identity** — I become "the PrimeShieldHub guy," not "a technologist who also runs PrimeShieldHub."
- **Scope limitation** — everything I write has to relate to the business, or it doesn't belong.
- **Fragility** — if the business pivots or is acquired, my identity pivots with it.
- **No space for experiments** — research, prototypes, and ideas that don't serve the current business have nowhere to live.

The solution wasn't to make PrimeShieldHub broader. It was to build a separate layer: **a personal technology identity, distinct from any specific business.**

## What Savflux Is

Savflux is:

- **A technology lab** — where experiments, prototypes, and ideas live
- **A public record** — of what's built, and how it's built
- **An engineering portfolio** — not a design showcase, not a resume, but evidence of systems built
- **A place for research** — computational biology, machine learning, data science
- **A place for writing** — technical articles, essays, lessons learned
- **A durable identity** — that outlives any specific business

The brand descriptor says it: _Technology Lab by Freedom Evbakoe Amenaghawon_.

Not a company. Not a product. A lab.

## What Savflux Is Not

- **Not a portfolio template.** It's built from a real design system, with real architecture decisions.
- **Not a blog.** Writing is one of several things it does.
- **Not a company.** It doesn't sell anything. It doesn't have a business model.
- **Not finished.** It's deliberately structured to grow — new pages, new experiments, new categories, without re-architecture.

## The Architectural Bets

Three big bets shaped Savflux.

**1. Static-first over dynamic.**
Every page is pre-rendered HTML. Zero JavaScript shipped for content. This means:

- Fast everywhere (under 1 second globally)
- SEO-native
- Cheap to host
- Resilient (no server to break)

**2. Cloudflare Workers over traditional hosting.**
Global edge deployment, zero cold-start, predictable cost.

- Same infrastructure as the biggest sites on the internet
- No servers to patch
- No regional latency issues

**3. Design system over page-by-page design.**
A component library — buttons, cards, badges, forms, layout primitives — with every component documented and reproducible.

- New pages are assembled, not designed
- Consistency emerges from constraints, not discipline
- Changes propagate everywhere

Every one of these is a bet that lasts. If Savflux grows to hundreds of pages, these decisions will still hold.

## Why Now

I've been building technology for years. But until recently, everything I built was either for a business or for a specific research problem.

What was missing was **a body of work that was mine** — a place to point at and say _"this is what I actually do, and here's the evidence."_

Savflux is that place. It's not marketing. It's not a portfolio. It's the natural home for a technical person who wants a durable, ownable, extensible presence on the internet.

## What Comes Next

The lab is now public. Over the next phases:

- **Real case studies** — deep technical writeups of what's been built
- **Real experiments** — prototypes and ideas in progress
- **Real writing** — technical articles and lessons
- **Real AI** — RAG over Savflux's own content

But the underlying principle is fixed:

> **Build technology. Document what you build. Let the work speak.**

That's what Savflux is. That's what it does. That's what it's for.
