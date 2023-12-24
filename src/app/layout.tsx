import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Rubik } from 'next/font/google'
import { Nunito } from 'next/font/google'
import './globals.css'
import TopNav from '@/components/TopNav'
import Footer from '@/components/Footer'
import WhatsappBtn from '@/components/WhatsappBtn'
import Head from 'next/head'

const nunito = Nunito({ 
   subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Akgür Global',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <header>
          <TopNav/>
          <WhatsappBtn/>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  )
}
