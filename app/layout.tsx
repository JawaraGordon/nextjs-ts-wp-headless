import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// components/Layout.tsx
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Headless WordPress Template',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      <main className="flex-grow container mx-auto py-8 px-4">
        {children}
      </main>
      <Footer />
      </body>
    </html>
  )
}
