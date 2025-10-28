"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QuestionDisplay } from "@/components/question-display"
import { MoneyLadder } from "@/components/money-ladder"
import { Lifelines } from "@/components/lifelines"
import { GameOver } from "@/components/game-over"
import { questions } from "@/lib/questions"
import { Trophy, DollarSign } from "lucide-react"

interface GameScreenProps {
  onRestart: () => void
}

export type LifelineType = "50-50" | "audience" | "phone"

export function GameScreen({ onRestart }: GameScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [isWinner, setIsWinner] = useState(false)
  const [usedLifelines, setUsedLifelines] = useState<LifelineType[]>([])
  const [removedAnswers, setRemovedAnswers] = useState<string[]>([])
  const [showAudience, setShowAudience] = useState(false)
  const [showPhone, setShowPhone] = useState(false)
  const [canWalkAway, setCanWalkAway] = useState(false)

  const currentQuestionData = questions[currentQuestion]
  const currentPrize = currentQuestionData.prize

  useEffect(() => {
    if (currentQuestion > 0) {
      setCanWalkAway(true)
    }
  }, [currentQuestion])

  const handleAnswerSelect = (answer: string) => {
    if (isAnswerRevealed || selectedAnswer) return
    setSelectedAnswer(answer)
  }

  const handleConfirmAnswer = () => {
    if (!selectedAnswer) return
    setIsAnswerRevealed(true)

    setTimeout(() => {
      if (selectedAnswer === currentQuestionData.correct) {
        if (currentQuestion === questions.length - 1) {
          setIsWinner(true)
          setGameOver(true)
        } else {
          setCurrentQuestion(currentQuestion + 1)
          setSelectedAnswer(null)
          setIsAnswerRevealed(false)
          setRemovedAnswers([])
          setShowAudience(false)
          setShowPhone(false)
        }
      } else {
        setGameOver(true)
      }
    }, 2000)
  }

  const handleLifeline = (lifeline: LifelineType) => {
    if (usedLifelines.includes(lifeline)) return
    setUsedLifelines([...usedLifelines, lifeline])

    if (lifeline === "50-50") {
      const incorrectAnswers = currentQuestionData.options.filter((opt) => opt !== currentQuestionData.correct)
      const toRemove = incorrectAnswers.slice(0, 2)
      setRemovedAnswers(toRemove)
    } else if (lifeline === "audience") {
      setShowAudience(true)
    } else if (lifeline === "phone") {
      setShowPhone(true)
    }
  }

  const handleWalkAway = () => {
    setGameOver(true)
  }

  if (gameOver) {
    const finalPrize = isWinner ? "$1,000,000" : currentQuestion > 0 ? questions[currentQuestion - 1].prize : "$0"
    return <GameOver prize={finalPrize} isWinner={isWinner} onRestart={onRestart} />
  }

  return (
    <div className="min-h-screen p-4 md:p-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Trophy className="w-8 h-8 text-gold" />
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gold to-primary bg-clip-text text-transparent">
              Fairblock Millionaire
            </h1>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-lg border border-gold/30">
            <DollarSign className="w-5 h-5 text-gold" />
            <span className="text-xl font-bold text-gold">{currentPrize}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Main game area */}
          <div className="space-y-6 order-2 lg:order-1">
            <QuestionDisplay
              question={currentQuestionData}
              questionNumber={currentQuestion + 1}
              selectedAnswer={selectedAnswer}
              isAnswerRevealed={isAnswerRevealed}
              onAnswerSelect={handleAnswerSelect}
              removedAnswers={removedAnswers}
              showAudience={showAudience}
              showPhone={showPhone}
            />

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <Lifelines
                  usedLifelines={usedLifelines}
                  onUseLifeline={handleLifeline}
                  disabled={isAnswerRevealed || !selectedAnswer}
                />
                <div className="flex gap-3">
                  {canWalkAway && !isAnswerRevealed && (
                    <Button
                      variant="outline"
                      onClick={handleWalkAway}
                      className="border-gold/50 text-gold hover:bg-gold/10 bg-transparent"
                    >
                      Walk Away
                    </Button>
                  )}
                  <Button
                    onClick={handleConfirmAnswer}
                    disabled={!selectedAnswer || isAnswerRevealed}
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-foreground font-bold px-8"
                  >
                    {isAnswerRevealed ? "Revealing..." : "Final Answer"}
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="order-1 lg:order-2">
            <MoneyLadder currentQuestion={currentQuestion} />
          </div>
        </div>
      </div>
    </div>
  )
}
