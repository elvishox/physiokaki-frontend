'use client'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()

  if (!user) return null

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/dashboard" className="text-xl font-bold">
          PhysioKaki 📚
        </Link>
        <div className="space-x-4">
          <Link href="/flashcards" className="hover:underline">
            Flashcards
          </Link>
          <Link href="/modules" className="hover:underline">
            Módulos
          </Link>
          <button onClick={logout} className="hover:underline">
            Cerrar sesión
          </button>
        </div>
      </div>
    </nav>
  )
}