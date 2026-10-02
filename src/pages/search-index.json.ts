import type { APIRoute } from 'astro';
import { buildSearchIndex } from '@/lib/search';

export const GET: APIRoute = async () => {
  const records = await buildSearchIndex();
  return new Response(JSON.stringify(records), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
