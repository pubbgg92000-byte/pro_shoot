import type { Metadata } from 'next';
import { InsightsExplorer } from '@/components/insights/InsightsExplorer';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Photography insights from Pro Shoot covering weddings, pre wedding sessions, maternity portraits, drone coverage, cinematography, albums, and practical photography tips.',
  alternates: {
    canonical: '/insights',
  },
  openGraph: {
    title: 'Photography Insights | Pro Shoot',
    description: 'Explore expert photography ideas, planning guides, and visual storytelling insights from Pro Shoot Studios.',
    url: '/insights',
    type: 'website',
  },
};

export default function InsightsPage() {
  return <InsightsExplorer />;
}
