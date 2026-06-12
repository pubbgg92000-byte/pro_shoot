import type { MetadataRoute } from 'next';
import { SERVICES, BLOG_POSTS } from '@/lib/constants';

const BASE_URL = 'https://proshoot.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '', '/about', '/services', '/portfolio', '/pricing', '/albums',
    '/contact', '/booking', '/testimonials', '/faq', '/blog',
    '/careers', '/thank-you', '/privacy-policy', '/terms',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1.0 : route === '/services' ? 0.9 : 0.7,
  }));

  const servicePages = SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
