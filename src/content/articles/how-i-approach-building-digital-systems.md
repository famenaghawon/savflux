---
title: How I Approach Building Digital Systems
description: Requirements, architecture, data, APIs, security, performance, deployment, and iteration — the framework I use for every system I build.
category: Engineering
tags:
  - engineering
  - architecture
  - systems
publishedAt: 2026-10-01
relatedProjects:
  - primeshieldhub
  - primeshieldhub-buildmart
  - savflux
---

Every system I build goes through the same rough sequence. It's not a rigid methodology — more a set of questions I ask in order.

The point isn't to follow the steps. The point is to make sure I don't skip a step.

## 1. Requirements — What Is This Actually For?

Before architecture, before code, before design, I write down:

- **Who uses this?** Not "users" — specific people, roles, contexts.
- **What problem does it solve?** Not features. The actual friction being removed.
- **What does success look like?** Measurable, or it doesn't count.
- **What does failure look like?** Failure modes matter more than success criteria.
- **What's out of scope?** Explicitly. Saying no up front prevents scope creep.

Most systems fail because someone skipped this step and started building the wrong thing efficiently.

## 2. Architecture — How Do the Pieces Fit?

Once I know what it's for, I sketch the shape. Not code — shape.

- **Frontend:** what does the user touch?
- **API:** what's the contract between frontend and data?
- **Data:** what persists, where, and in what shape?
- **Auth:** who can do what?
- **Integrations:** what external systems does this depend on?
- **Deployment:** where does this run, and how does it get there?

I diagram this. On paper, in Excalidraw, in Figma — anywhere that lets me see relationships without getting lost in implementation detail.

**The architecture doesn't have to be perfect. It has to be explicit.**

## 3. Data — What Is the Shape of Truth?

This is the step most people underweight. But data outlives code.

Questions I ask:

- What are the entities? (User, Product, Order, Transaction, Document...)
- What are the relationships?
- What is the primary key? What makes each entity unique?
- What is immutable? What changes?
- What needs to be transactional? What can be eventually consistent?
- What is the retention policy?
- What needs to be queryable? How fast?

If the data model is right, the rest of the system flows naturally. If it's wrong, no amount of clever code will fix it.

## 4. APIs — The Contract

An API is a promise. It says: _if you send me this, I will do that._

Every API endpoint I design answers:

- What does it accept? (Types, validation, required vs optional)
- What does it return? (Success shape, error shape)
- What is it allowed to fail with? (Error codes, messages)
- Is it idempotent? (Can this be safely retried?)
- Who can call it? (Auth, authorization, rate limits)

I document every endpoint before writing implementation. Not as an afterthought — as the primary artifact.

## 5. Security — Non-Negotiable From Day One

Security isn't a feature you add. It's a constraint you design within.

Baseline:

- **Authentication** — How do we know who's calling?
- **Authorization** — What are they allowed to do?
- **Input validation** — Never trust the client. Ever.
- **Output encoding** — Never render user data as HTML without escaping.
- **Rate limiting** — Every public endpoint.
- **Secrets management** — No keys in code, ever.
- **HTTPS everywhere** — Non-negotiable.
- **Security headers** — CSP, HSTS, X-Frame-Options, Referrer-Policy.

I use OWASP's Top 10 as a starting checklist. If a system touches money or personal data, I add more.

## 6. Performance — Budget, Not Hope

Performance is not "we'll optimize later." It's a budget, declared up front.

For Savflux, the budget is:

- LCP under 1.8s
- CLS under 0.05
- INP under 150ms
- First-load JS under 30KB

For a commerce platform, the budget is different — but there's always a budget.

If a feature would blow the budget, it doesn't ship as-is. Either we cut scope, or we redesign. "We'll optimize later" is how sites end up slow forever.

## 7. Deployment — Automatic, Repeatable, Reversible

Deployment should be:

- **Automatic** — push to main, deploy runs
- **Repeatable** — same inputs, same output
- **Reversible** — rollback is one command
- **Observable** — you know when deploys fail, and why

For most of my projects, this means GitHub Actions → Cloudflare Workers. For more complex setups, it means more layers, but the same principles.

## 8. Iteration — The System Evolves

No system is "done." It evolves:

- **Observe** — analytics, logs, user feedback
- **Measure** — is it doing what it was designed for?
- **Adjust** — small changes, often
- **Re-architecture** — occasionally, when the current shape no longer fits

The point is not to build the perfect system up front. It's to build a system that can be changed, improved, and evolved — for years.

## The Meta-Rule

Every step in this framework exists to answer one question:

> **Does this system do what it's supposed to do, for the people who need it, at the scale and cost that makes it viable?**

If yes, ship it. If not, keep working.

Everything else is commentary.
