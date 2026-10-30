---
title: Savflux AI
summary: A retrieval-augmented assistant over Savflux's own content — projects, articles, experiments.
status: research
category: AI
tags:
  - ai
  - rag
  - retrieval
startedAt: 2026-09-01
updatedAt: 2026-09-01
---

## Question

Can a visitor to Savflux ask natural-language questions about the site's content and receive accurate, cited answers?

Examples:

- _"What has Freedom built with Cloudflare Workers?"_
- _"Show me his AI projects."_
- _"Explain the PrimeShieldHub architecture."_
- _"What is he currently working on?"_

## Hypothesis

A retrieval-augmented generation (RAG) system over Savflux's own content could answer these — with citations back to the source pages, and without hallucinating.

## Approach

- Index all projects, experiments, and articles at build time
- Embed the content into a vector store (Cloudflare Vectorize, once available)
- On query, retrieve the top-k relevant chunks
- Feed them into a language model with strict instructions to cite sources
- Return an answer with links to the source pages

## Current State

**Research.** Evaluating Cloudflare's AI stack — Workers AI, Vectorize, and the available embedding models.

## Why This Is Interesting

An AI assistant that cites its sources is trustworthy. An AI assistant that invents facts is a liability. The technical problem is not _generation_ — it's _retrieval_ and _grounding_.

If this works, it becomes a template for any content-driven site that wants to offer conversational access to its knowledge.
