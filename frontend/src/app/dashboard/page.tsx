'use client'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        ¡Bienvenido, {user?.email}!
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/flashcards" className="bg-white p-6 rounded shadow hover:shadow-lg">
          <h2 className="text-xl font-bold mb-2">📇 Flashcards</h2>
          <p className="text-gray-600">Estudia con tarjetas adaptativas</p>
        </Link>
        
        <Link href="/modules" className="bg-white p-6 rounded shadow hover:shadow-lg">
          <h2 className="text-xl font-bold mb-2">📚 Módulos</h2>
          <p className="text-gray-600">Contenido teórico por materia</p>
        </Link>
      </div>
    </div>
  )
}