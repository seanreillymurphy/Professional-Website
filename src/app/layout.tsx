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
  title: 'Sean R. Murphy - AI & Enterprise GTM Leader',
  description: 'Consultative sales leader specializing in AI and cloud-native data platforms.',
  keywords: 'Enterprise AI, GTM Strategy, Cloud Native, Digital Transformation, Sales Leadership',
  authors: [{ name: 'Sean R. Murphy' }],
  creator: 'Sean R. Murphy',
  openGraph: {
    title: 'Sean R. Murphy - Technology Sales Executive',
    description: 'Translating complex AI and data capabilities into narratives that drive executive buy-in.',
    url: 'https://seanreillymurphy.com',
    siteName: 'Sean R. Murphy - Professional Portfolio',
    images: [{ url: '/profile.jpg', width: 1200, height: 630, alt: 'Sean R. Murphy' }],
    locale: 'en_US',
    type: 'profile',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
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
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sean R. Murphy",
              "jobTitle": "Senior Director, Go-to-Market",
              "url": "https://seanreillymurphy.com",
              "sameAs": ["https://www.linkedin.com/in/seanreillymurphy/"]
            }),
          }}
        />
      </head>
      <body>
        <ParticleBackground />
        <SmoothScroll>
          {children}
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  )
}