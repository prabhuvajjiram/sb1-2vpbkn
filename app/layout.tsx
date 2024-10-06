 // app/layout.tsx
import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ThemeProviderWrapper from './ThemeProviderWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rajambal Cottons',
  description: 'High-quality cotton sarees',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen bg-black text-white`}>
        <ThemeProviderWrapper>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
