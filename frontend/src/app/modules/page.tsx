'use client'
import { useEffect, useState } from 'react'
import api from '@/lib/api'

interface Module {
  id: number
  name: string
  description: string
  content: string
}

export default function ModulesPage() {
  const [modules, setModules] = useState<Module[]>([])
  const [selectedModule, setSelectedModule] = useState<Module | null>(null)

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await api.get('/modules')
        setModules(response.data)
      } catch (error) {
        console.error('Error cargando módulos:', error)
      }
    }
    fetchModules()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Módulos de Estudio</h1>
      
      <div className="grid md:grid-cols-3 gap-4">
        {modules.map((module) => (
          <div
            key={module.id}
            className="bg-white p-4 rounded shadow cursor-pointer hover:shadow-lg"
            onClick={() => setSelectedModule(module)}
          >
            <h2 className="text-xl font-bold mb-2">{module.name}</h2>
            <p className="text-gray-600">{module.description}</p>
          </div>
        ))}
      </div>

      {selectedModule && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl max-h-screen overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{selectedModule.name}</h2>
            <p className="text-gray-700 whitespace-pre-wrap">{selectedModule.content}</p>
            <button
              onClick={() => setSelectedModule(null)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}