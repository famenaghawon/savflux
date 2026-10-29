---
title: Ajo / Esusu Platform
summary: Digital infrastructure for cooperative savings and contribution management.
description: A prototype exploring how to digitize traditional Nigerian rotating savings systems (Ajo/Esusu) — with transparent tracking, member management, and trust guarantees.
year: 2026
role: Founder & Engineer
status: prototype
category: business
stack:
  - TypeScript
  - Cloudflare Workers
  - D1
  - Gemini API
  - WhatsApp Cloud API
heroImage: /images/projects/ajo-esusu/hero.png
heroImageAlt: Ajo/Esusu platform prototype
gallery:
  - src: /images/projects/ajo-esusu/flow.png
    alt: Contribution and payout flow
    caption: Contribution & payout flow
featured: false
weight: 60
publishedAt: 2026-06-01
updatedAt: 2026-09-01
---

Ajo (Yoruba) and Esusu (also West African) are traditional rotating savings systems used by millions of people across Nigeria. Members contribute a fixed amount at regular intervals, and each cycle one member receives the full pool. It works. It has worked for centuries. But it's manual, opaque, and trust-dependent in ways that don't scale.

**This is a prototype.** Not a product. Not a live service. A working exploration of what the infrastructure could look like.

## Problem

Traditional Ajo/Esusu works because of community trust. But:

- **No transparency** — members can't verify who paid, when, or how much
- **No record** — disputes arise from memory disagreements
- **No scale** — groups cap at sizes where everyone knows everyone
- **No portability** — you can't participate in a group you don't physically attend
- **No default protection** — a member who stops contributing affects everyone

Software can't replace the community. But it can **augment the trust** with structured records, transparent state, and automated reminders.

## What I Built

A prototype platform:

- **Group creation** — define contribution amount, cycle length, payout order
- **Member management** — invite, approve, track participation
- **Contribution tracking** — record payments, flag missed cycles
- **Payout scheduling** — determine and notify the next recipient
- **Transparent ledger** — every member sees the same state
- **WhatsApp integration** — reminders and notifications via WhatsApp Cloud API
- **AI assistant** — help members understand the group state, resolve common questions

## Stack

- **Runtime:** Cloudflare Workers
- **Data:** D1 for group state, transactions, member records
- **Notifications:** WhatsApp Cloud API
- **AI:** Gemini API for natural-language explanations and dispute resolution

## What This Is Not

- It is **not a live product**. No real money flows through it.
- It is **not a financial service**. It does not hold funds.
- It is **not a replacement for community trust**. It is infrastructure that records what the community already does.

## Status

**Prototype.** Core flows work. Real-world deployment would require regulatory work (financial services), partner integrations, and significant security hardening before any actual funds could move through the system.

## Lessons

- **Traditional systems work.** The role of technology is to remove friction, not replace the underlying mechanism.
- **Trust is the product.** Every UX decision must reinforce that members can see, verify, and audit what's happening.
- **WhatsApp is the operating system of informal commerce in Nigeria.** SMS is dated; email is ignored; WhatsApp is read.
- **Some ideas should stay prototypes.** Not everything needs to become a company.
