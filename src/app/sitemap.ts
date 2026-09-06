import { MetadataRoute } from 'next';
import { publicUrl } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || publicUrl
  ).replace(/\/$/, '');

  const routes = [
    '',
    '/projects',
    '/education',
    '/publications',
    '/blog',
    '/certifications',
    '/contact',
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));
}