---
title: PrimeShieldHub BuildMart
summary: Enterprise operating system for a construction-material business — procurement, projects, teams, and operations.
description: A digital operating system for an enterprise construction-material business. Not a storefront — an infrastructure layer for procurement, project tracking, and team coordination.
year: 2025
role: Founder & Lead Engineer
status: live
category: software
stack:
  - TypeScript
  - Cloudflare Workers
  - D1
  - R2
  - KV
heroImage: /images/projects/buildmart/hero.png
heroImageAlt: BuildMart enterprise procurement platform
gallery:
  - src: /images/projects/buildmart/workspace.png
    alt: BuildMart workspace control center
    caption: Workspace control center
featured: true
weight: 90
relatedProjects:
  - primeshieldhub
publishedAt: 2025-08-01
updatedAt: 2026-08-01
---

BuildMart is the enterprise counterpart to PrimeShieldHub — a digital operating system for a construction-material business with complex multi-party workflows.

## Problem

Construction-material procurement is not a simple sale. It involves organizations, teams, projects, procurement officers, approval chains, equipment allocation, document exchange, and financial trust workflows. Traditional point-of-sale systems don't model any of this.

## What I Built

An enterprise platform with modules for:

- **Enterprise identity** — organizations, teams, roles, permissions
- **Project management** — sites, milestones, materials, assignments
- **Procurement workflows** — request, approval, order, fulfilment
- **Document management** — contracts, invoices, delivery notes, on R2
- **Equipment tracking** — allocation, maintenance, return
- **Trust & financial information** — historical credit, payment track record
- **Activity streams** — audit trails across every module
- **Security** — role-based access, session isolation, audit logging
- **AI assistant** — help users navigate complex procurement workflows
- **Workspace control center** — a unified dashboard for the business owner

## Architecture

BuildMart Platform
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
    Identity        Projects      Procurement
          │             │             │
          └─────────────┼─────────────┘
                        ▼
                Cloudflare Workers
                   ┌────┼────┐
                   ▼    ▼    ▼
                  D1    R2   KV


## Stack

- **Runtime:** Cloudflare Workers
- **Data:** D1 for relational state, R2 for documents and media, KV for cache
- **Frontend:** JavaScript, HTML, CSS
- **AI:** Gemini API for workflow assistance

## Challenges

**1. Modeling complex workflows in a flat relational store.** D1 doesn't have full transaction support for deeply nested operations. Solution: careful state machines and compensating transactions where needed.

**2. Multi-tenant isolation.** Each enterprise must be fully isolated. Solution: tenant-scoped queries, strict row-level access via middleware, and per-organization R2 prefixes.

**3. Document management at scale.** Thousands of PDFs, images, and contracts. Solution: R2 with signed URL access and lazy-loaded previews.

**4. AI in enterprise context.** Users won't trust AI with financial or legal decisions. Solution: AI as an **assistant**, not an authority — suggests, drafts, and explains, but never acts without human approval.

## Outcome

The business's procurement operations now run on BuildMart. What used to require spreadsheets, WhatsApp threads, and physical filing is now structured, searchable, and auditable.

## Lessons

- **Enterprise software is workflow software.** The hard part isn't the CRUD — it's modeling the human process correctly.
- **Trust is a design material.** In enterprise, the interface must feel deliberate, controlled, and predictable. Fluent animations and playful copy are liabilities.
- **AI works best in the gaps.** The right place for AI isn't doing the work — it's removing friction from the work.
