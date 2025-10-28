"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckCircle2, XCircle, Users, Phone } from "lucide-react"

interface Question {
  question: string
  options: string[]
  correct: string
  prize: string
  explanation?: string
  audiencePoll?: { [key: string]: number }
  phoneAdvice?: string
}

interface QuestionDisplayProps {
  question: Question
  questionNumber: number
  selectedAnswer: string | null
  isAnswerRevealed: boolean
  onAnswerSelect: (answer: string) => void
  removedAnswers: string[]
  showAudience: boolean
  showPhone: boolean
}

export function QuestionDisplay({
  question,
  questionNumber,
  selectedAnswer,
  isAnswerRevealed,
  onAnswerSelect,
  removedAnswers,
  showAudience,
  showPhone,
}: QuestionDisplayProps) {
  const letters = ["A", "B", "C", "D"]

  return (
    <div className="space-y-6">
      <Card className="p-6 md:p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/30 shadow-xl">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl font-bold">
              {questionNumber}
            </div>
            <p className="text-xl md:text-2xl font-semibold leading-relaxed text-balance">{question.question}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options.map((option, index) => {
              const letter = letters[index]
              const isSelected = selectedAnswer === option
              const isCorrect = option === question.correct
              const isRemoved = removedAnswers.includes(option)
              const showResult = isAnswerRevealed

              return (
                <Button
                  key={option}
                  onClick={() => onAnswerSelect(option)}
                  disabled={isAnswerRevealed || isRemoved}
                  className={cn(
                    "h-auto p-4 text-left justify-start gap-3 transition-all duration-300 relative overflow-hidden",
                    "border-2 bg-secondary/50 hover:bg-secondary text-foreground",
                    isRemoved && "opacity-30 cursor-not-allowed",
                    isSelected && !showResult && "border-primary bg-primary/20 glow-effect",
                    showResult && isCorrect && "border-green-500 bg-green-500/20",
                    showResult && isSelected && !isCorrect && "border-red-500 bg-red-500/20",
                  )}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center font-bold">
                    {letter}
                  </span>
                  <span className="flex-1 text-base md:text-lg">{option}</span>
                  {showResult && isCorrect && <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />}
                  {showResult && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />}
                </Button>
              )
            })}
          </div>
        </div>
      </Card>

      {/* Audience Poll */}
      {showAudience && question.audiencePoll && (
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-accent/30 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-accent" />
            <h3 className="text-xl font-bold text-accent">Ask the Audience</h3>
          </div>
          <div className="space-y-3">
            {Object.entries(question.audiencePoll).map(([option, percentage]) => (
              <div key={option} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{option}</span>
                  <span className="font-bold text-accent">{percentage}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent to-primary transition-all duration-1000"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Phone a Friend */}
      {showPhone && question.phoneAdvice && (
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-accent/30 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-center gap-3 mb-4">
            <Phone className="w-6 h-6 text-accent" />
            <h3 className="text-xl font-bold text-accent">Phone a Friend</h3>
          </div>
          <p className="text-lg leading-relaxed italic text-muted-foreground">&ldquo;{question.phoneAdvice}&rdquo;</p>
        </Card>
      )}
    </div>
  )
}
