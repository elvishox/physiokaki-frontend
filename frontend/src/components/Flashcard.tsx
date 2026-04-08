'use client'
import { useState } from 'react'

interface FlashcardProps {
  question: string
  answer: string
  onAnswer: (correct: boolean) => void
}

export default function Flashcard({ question, answer, onAnswer }: FlashcardProps) {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-8">
        <div className="text-center mb-6">
          <p className="text-gray-700 text-lg">
            {showAnswer ? answer : question}
          </p>
        </div>
        
        {!showAnswer ? (
          <button
            onClick={() => setShowAnswer(true)}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Mostrar respuesta
          </button>
        ) : (
          <div className="space-x-4 flex justify-center">
            <button
              onClick={() => {
                setShowAnswer(false)
                onAnswer(false)
              }}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              ❌ Difícil
            </button>
            <button
              onClick={() => {
                setShowAnswer(false)
                onAnswer(true)
              }}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              ✅ Fácil
            </button>
          </div>
        )}
      </div>
    </div>
  )
}