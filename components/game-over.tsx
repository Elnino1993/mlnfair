"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, DollarSign, RotateCcw } from "lucide-react"

interface GameOverProps {
  prize: string
  isWinner: boolean
  onRestart: () => void
}

export function GameOver({ prize, isWinner, onRestart }: GameOverProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />

      {isWinner && (
        <>
          <div className="absolute inset-0 animate-pulse">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </>
      )}

      <Card className="relative z-10 max-w-2xl w-full p-8 md:p-12 bg-card/80 backdrop-blur-xl border-2 border-primary/30 shadow-2xl">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <div
              className={cn(
                "w-24 h-24 rounded-full flex items-center justify-center",
                isWinner
                  ? "bg-gradient-to-br from-gold to-primary animate-pulse"
                  : "bg-gradient-to-br from-primary to-accent",
              )}
            >
              <Trophy className="w-12 h-12 text-foreground" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              {isWinner ? "Congratulations!" : "Game Over"}
            </h2>
            <p className="text-xl text-muted-foreground">
              {isWinner ? "You are a Fairblock expert!" : "Thanks for playing!"}
            </p>
          </div>

          <div className="p-6 bg-secondary/50 rounded-xl border-2 border-gold/30">
            <p className="text-lg text-muted-foreground mb-2">You won</p>
            <div className="flex items-center justify-center gap-2">
              <DollarSign className="w-8 h-8 text-gold" />
              <span className="text-5xl md:text-6xl font-bold text-gold">{prize}</span>
            </div>
          </div>

          {isWinner && (
            <div className="space-y-2 text-muted-foreground">
              <p className="text-lg">You&apos;ve mastered blockchain privacy and Fairblock technology!</p>
              <p className="text-sm">Share your achievement and challenge your friends!</p>
            </div>
          )}

          <Button
            size="lg"
            onClick={onRestart}
            className="text-xl px-12 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-foreground font-bold shadow-lg transition-all duration-300 hover:scale-105"
          >
            <RotateCcw className="w-6 h-6 mr-2" />
            Play Again
          </Button>
        </div>
      </Card>
    </div>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
