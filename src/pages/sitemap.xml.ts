import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { servicesData } from '../data/services';

const SITE = 'https://mujiri.ge';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');

  const urls = [
    `${SITE}/en/`,
    `${SITE}/ka/`,
    `${SITE}/en/news/`,
    ...posts.map(p => `${SITE}/en/news/${p.slug}/`),
    ...servicesData.map(s => `${SITE}/en/services/${s.slug}/`),
    `${SITE}/en/privacy/`,
    `${SITE}/en/terms/`,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(loc => `  <url>
    <loc>${loc}</loc>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
