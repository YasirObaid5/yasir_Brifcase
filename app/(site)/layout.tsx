'use Client'
import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yasir Al-Shukaili — Portfolio',
  description: 'Front-End Developer & Animal Production Specialist — Portfolio of Yasir Obaid Al-Shukaili',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
