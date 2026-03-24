import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ContentProvider } from '../contexts/ContentContext'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brewtendo',
  description: 'Brewtendo\'s website, which is more or less a guide on how to install it on your 3DS.',
  openGraph: {
    url: 'https://brewtendonetwork.github.io',
    type: 'website',
    title: 'Brewtendo',
    description: 'Brewtendo\'s website, which is more or less a guide on how to install it on your 3DS.',
    images: [
      {
        url: 'https://brewtendonetwork.github.io/meta/images/imgbg.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link id="pagestyle" rel="stylesheet" href="/css/main.css" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      </head>
      <body className={inter.className}>
        <ContentProvider>
          <main>
            <div id="content">{children}</div>
          </main>
          <Footer />
          <audio id="decide">
            <source src="/audio/decide.mp3" type="audio/mp3" />
          </audio>
          <audio id="background" loop>
            <source src="/audio/background.mp3" type="audio/mp3" />
          </audio>
        </ContentProvider>
      </body>
    </html>
  )
}