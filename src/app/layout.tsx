import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Irshad Ahamed | SaaS Builder & Developer',
    template: '%s | Irshad Ahamed',
  },
  description: 'Portfolio of Irshad Ahamed - SaaS Builder, Full Stack Developer, and Graphic Designer specializing in scalable digital solutions.',
  keywords: ['Irshad Ahamed', 'SaaS Builder', 'Full Stack Developer', 'Graphic Designer', 'Web Development', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Irshad Ahamed' }],
  creator: 'Irshad Ahamed',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://irshadahamed.com', // Replace with actual URL if known, or keep placeholder
    title: 'Irshad Ahamed | SaaS Builder & Developer',
    description: 'Transforming complex problems into elegant, scalable digital solutions.',
    siteName: 'Irshad Ahamed Portfolio',
    images: [
      {
        url: '/profile.jpg', // Assuming this image exists and is suitable
        width: 1200,
        height: 630,
        alt: 'Irshad Ahamed - SaaS Builder & Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Irshad Ahamed | SaaS Builder & Developer',
    description: 'Portfolio of Irshad Ahamed - SaaS Builder, Developer, Graphic Designer.',
    images: ['/profile.jpg'],
    creator: '@irshadahamed', // Placeholder, user can update
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased font-body" data-theme="dark" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
