import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HouseIL',
  description: 'Experience luxury in technology and accommodation with HouseIL',
  keywords: ['technology', 'HouseIL', 'luxury', 'AirBNB', 'high-end'],
  authors: [{ name: 'HouseIL' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={${inter.className} bg-black text-pink-400 min-h-screen antialiased}>
        <div className="relative min-h-screen bg-gradient-to-br from-black to-gray-900">
          {children}
        </div>
      </body>
    </html>
  )
}
);