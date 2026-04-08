'use client'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
  }, [user, router])

  if (user) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          PhysioKaki 📚
        </h1>
        <p className="text-gray-600 mb-8">
          Aprende fisioterapia de forma adaptativa
        </p>
        <div className="space-x-4">
          <Link
            href="/login"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Iniciar sesión
          </Link>
          <Link
            href="/register"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  )
}