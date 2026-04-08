import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from '@/context/AuthContext'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PhysioKaki - Estudio de Fisioterapia',
  description: 'App adaptativa para estudiar fisioterapia',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className="min-h-screen bg-gray-50">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}