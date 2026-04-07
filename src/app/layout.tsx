import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ParticleBackground from '@/components/ParticleBackground'
import SmoothScroll from '@/components/SmoothScroll'
import SiteFooter from '@/components/layout/SiteFooter'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Your Name - Your Title or Tagline',
  description: 'A brief professional description about yourself and what you do. Update this with your own summary.',
  keywords: 'your, keywords, here, separated, by, commas',
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    title: 'Your Name - Your Title or Tagline',
    description: 'A brief professional description about yourself and what you do.',
    url: 'https://yourdomain.com',
    siteName: 'Your Name - Professional Portfolio',
    images: [
      {
        url: 'https://yourdomain.com/headshot.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Name - Your Title',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Your Title',
    description: 'A brief professional description about yourself and what you do.',
    images: ['https://yourdomain.com/headshot.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Performance optimizations */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Accessibility enhancements */}
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* Professional Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Your Name",
              "jobTitle": "Your Job Title",
              "description": "A brief professional description about yourself and what you do",
              "url": "https://yourdomain.com",
              "image": "https://yourdomain.com/headshot.jpg",
              "sameAs": [
                "https://www.linkedin.com/in/your-linkedin-handle/"
              ],
              "knowsAbout": [
                "Skill 1",
                "Skill 2",
                "Skill 3",
                "Skill 4"
              ]
            }),
          }}
        />
      </head>
      <body>
        {/* Ocean Current Particle Background */}
        <ParticleBackground />

        {/* Smooth Scroll Provider */}
        <SmoothScroll>
          {children}

          {/* Site Footer */}
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  )
}
