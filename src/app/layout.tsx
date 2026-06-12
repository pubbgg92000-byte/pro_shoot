import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GSAPProvider } from '@/components/GSAPProvider';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const siteUrl = 'https://proshoot-gamma.vercel.app';
const previewImage = `${siteUrl}/images/social-preview.png`;

export const metadata: Metadata = {
  title: {
    default: 'Pro Shoot — Premium Photography & Cinematic Storytelling',
    template: '%s | Pro Shoot',
  },
  description: 'Award-winning luxury photography studio specializing in weddings, pre-wedding shoots, baby photography, fashion, corporate, and cinematic storytelling. Crafting timeless imagery for life\'s most meaningful moments.',
  keywords: [
    'luxury photography', 'wedding photography', 'premium photographer',
    'cinematic wedding', 'baby photography', 'pre-wedding shoot',
    'fashion photography', 'corporate photography', 'drone photography',
    'photography studio India', 'Bangalore photographer',
  ],
  authors: [{ name: 'Pro Shoot Studios' }],
  creator: 'Pro Shoot',
  publisher: 'Pro Shoot Studios',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Pro Shoot',
    title: 'Pro Shoot — Premium Photography & Cinematic Storytelling',
    description: 'Award-winning luxury photography studio crafting timeless imagery for weddings, families, and brands.',
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: 'Pro Shoot — Premium photography and cinematic storytelling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pro Shoot — Premium Photography & Cinematic Storytelling',
    description: 'Award-winning luxury photography studio crafting timeless imagery for weddings, families, and brands.',
    images: [previewImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': siteUrl,
  name: 'Pro Shoot Studios',
  description: 'Award-winning luxury photography studio specializing in weddings, pre-wedding shoots, baby photography, fashion, corporate, and cinematic storytelling.',
  url: siteUrl,
  telephone: '+919876543210',
  email: 'hello@proshoot.in',
  image: previewImage,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '42, MG Road, Indiranagar',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    postalCode: '560038',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.9716,
    longitude: 77.5946,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '17:00',
    },
  ],
  priceRange: '₹₹₹',
  sameAs: [
    'https://instagram.com/proshoot',
    'https://facebook.com/proshoot',
    'https://youtube.com/@proshoot',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}
    >
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#0A0A0C" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-bg-primary text-text-primary antialiased w-full">
        <GSAPProvider />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
