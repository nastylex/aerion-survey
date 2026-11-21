import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Laker Leslie Jordan — Nastylex | Developer & Technology Enthusiast',
  description: 'Meet Laker Leslie Jordan, aka Nastylex — Ugandan developer and technology enthusiast exploring software, cybersecurity, Linux, AI, and aerospace.',
  applicationName: 'Nastylex',
  metadataBase: new URL('https://lakerleslie.codes'),
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Laker Leslie Jordan — Nastylex',
    description: 'Ugandan developer and technology enthusiast.',
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
