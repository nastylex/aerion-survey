import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import './portfolio-redesign.css'

export const metadata: Metadata = {
  title: 'Laker Leslie Jordan — Nastylex | AERION Developer & Founder',
  description: 'Meet Laker Leslie Jordan, aka Nastylex — Ugandan software developer, technology enthusiast, and AERION founder exploring software, cybersecurity, Linux, AI, and aerospace.',
  applicationName: 'Nastylex',
  metadataBase: new URL('https://lakerleslie.codes'),
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Laker Leslie Jordan — Nastylex',
    description: 'Ugandan developer, technology enthusiast, and AERION founder.',
    type: 'website',
    url: 'https://lakerleslie.codes',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#090b0f',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
