import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Providers from './providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Clarityflow - Turn user behavior into clear product improvements',
  description:
    'See exactly where users drop off and what to fix next. Clarityflow turns user behaviour into clear, prioritized product improvements without analytics complexity.',
  keywords: [
    'analytics',
    'user behavior',
    'conversion optimization',
    'product analytics',
    'funnel analysis',
  ],
  authors: [{ name: 'Clarityflow' }],
  openGraph: {
    title: 'Clarityflow - Turn user behavior into clear product improvements',
    description: 'See exactly where users drop off and what to fix next.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Clarityflow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clarityflow - Turn user behavior into clear product improvements',
    description: 'See exactly where users drop off and what to fix next.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        {process.env.NEXT_PUBLIC_PLAUSIBLE === '1' && (
          <script
            defer
            data-domain="clarityflow.example.com"
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className="antialiased">
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
