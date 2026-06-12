// Pro Shoot — Utility Functions & Types

import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPhone(phone: string): string {
  return phone.replace(/\s/g, '');
}

export function getWhatsAppUrl(number: string, message?: string): string {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Generate sequence frame paths
export function getSequenceFrames(
  basePath: string,
  count: number,
  padLength: number = 6
): string[] {
  return Array.from({ length: count }, (_, i) => {
    const frame = String(i).padStart(padLength, '0');
    return `${basePath}/frame_${frame}.png`;
  });
}
