"use client"

import { useState, useEffect, useRef } from "react"
import { GameScreen } from "@/components/game-screen"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false)
  const welcomeMusicRef = useRef<HTMLAudioElement | null>(null)
  const gameMusicRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    welcomeMusicRef.current = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hello-new-punter-2008-long-oQ6Vzggh2E8SMaPU3gyKTrEBCxsBcU.mp3")
    welcomeMusicRef.current.loop = true
    welcomeMusicRef.current.volume = 0.3

    // Play welcome music (with user interaction fallback)
    const playWelcomeMusic = () => {
      welcomeMusicRef.current?.play().catch(() => {
        document.addEventListener(
          "click",
          () => {
            welcomeMusicRef.current?.play()
          },
          { once: true },
        )
      })
    }

    playWelcomeMusic()

    return () => {
      welcomeMusicRef.current?.pause()
      gameMusicRef.current?.pause()
    }
  }, [])

  const handleStartGame = () => {
    welcomeMusicRef.current?.pause()

    gameMusicRef.current = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/q1-5-bed-2008-2WJJfJxjQcNxns2FCxQyU1DQqLpsnt.mp3")
    gameMusicRef.current.loop = true
    gameMusicRef.current.volume = 0.3
    gameMusicRef.current.play().catch(() => {
      document.addEventListener(
        "click",
        () => {
          gameMusicRef.current?.play()
        },
        { once: true },
      )
    })

    setGameStarted(true)
  }

  const handleRestart = () => {
    gameMusicRef.current?.pause()
    welcomeMusicRef.current?.play()
    setGameStarted(false)
  }

  if (!gameStarted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse">
              Who Wants to Be a Millionaire?
            </h1>
            <p className="text-2xl text-blue-300 font-semibold">Fairblock Edition</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/30 rounded-lg p-8 space-y-6">
            <p className="text-lg text-slate-300">
              Test your knowledge of blockchain privacy, confidential computing, and Fairblock technology.
            </p>

            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>15 questions from easy to expert level</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span>3 lifelines to help you win</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                <span>Climb to $1,000,000</span>
              </div>
            </div>

            <Button
              onClick={handleStartGame}
              size="lg"
              className="w-full text-xl py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              Start Game
            </Button>

            <div className="pt-4 border-t border-slate-700/50">
              <p className="text-slate-500 text-xs mb-2">Created by</p>
              <a
                href="https://x.com/OxVentura"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                @OxVentura
              </a>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return <GameScreen onRestart={handleRestart} />
}
