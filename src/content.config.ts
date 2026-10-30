import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    description: z.string(),
    year: z.number(),
    role: z.string(),
    status: z.enum(['live', 'building', 'prototype', 'concept', 'archived']),
    category: z.enum(['software', 'ai', 'data', 'cloud', 'business', 'research']),
    stack: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      )
      .default([]),
    liveUrl: z.url().optional(),
    repoUrl: z.url().optional(),
    featured: z.boolean().default(false),
    weight: z.number().default(0),
    relatedArticles: z.array(z.string()).default([]),
    relatedProjects: z.array(z.string()).default([]),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
  }),
});

const experiments = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experiments' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['idea', 'research', 'prototype', 'building', 'live', 'archived']),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    startedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    promotedToProject: z.string().optional(),
    relatedArticles: z.array(z.string()).default([]),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('freedom-amenaghawon'),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    featuredImage: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    relatedProjects: z.array(z.string()).default([]),
    relatedArticles: z.array(z.string()).default([]),
    canonical: z.url().optional(),
  }),
});

export const collections = { projects, experiments, articles };
