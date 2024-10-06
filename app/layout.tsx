import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ThemeProvider } from '../components/theme-provider'

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
      <body className={`${inter.className} pt-16`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}