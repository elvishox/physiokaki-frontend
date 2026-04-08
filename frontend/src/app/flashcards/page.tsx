'use client'
import { useEffect, useState } from 'react'
import api from '@/lib/api'
import Flashcard from '@/components/Flashcard'

interface FlashcardType {
  id: number
  question: string
  answer: string
}

export default function FlashcardsPage() {
  const [flashcards, setFlashcards] = useState<FlashcardType[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await api.get('/flashcards')
        setFlashcards(response.data)
      } catch (error) {
        console.error('Error cargando flashcards:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchFlashcards()
  }, [])

  const handleAnswer = async (correct: boolean) => {
    if (flashcards.length === 0) return
    
    try {
      await api.post('/progress/answer', {
        flashcardId: flashcards[currentIndex].id,
        correct
      })
      
      if (currentIndex + 1 < flashcards.length) {
        setCurrentIndex(currentIndex + 1)
      } else {
        alert('¡Completaste todas las flashcards!')
        // Reiniciar o volver al inicio
        setCurrentIndex(0)
      }
    } catch (error) {
      console.error('Error guardando progreso:', error)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p>Cargando flashcards...</p>
      </div>
    )
  }

  if (flashcards.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p>No hay flashcards disponibles. Contacta al administrador.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Flashcards - {currentIndex + 1}/{flashcards.length}
      </h1>
      <Flashcard
        question={flashcards[currentIndex].question}
        answer={flashcards[currentIndex].answer}
        onAnswer={handleAnswer}
      />
    </div>
  )
}