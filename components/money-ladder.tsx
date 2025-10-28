"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { questions } from "@/lib/questions"
import { Crown } from "lucide-react"

interface MoneyLadderProps {
  currentQuestion: number
}

export function MoneyLadder({ currentQuestion }: MoneyLadderProps) {
  return (
    <Card className="p-4 md:p-6 bg-card/80 backdrop-blur-sm border-primary/30 h-fit sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
      <div className="flex items-center gap-2 mb-4">
        <Crown className="w-5 h-5 md:w-6 md:h-6 text-gold" />
        <h3 className="text-lg md:text-xl font-bold text-gold">Prize Ladder</h3>
      </div>
      <div className="space-y-1.5 md:space-y-2">
        {[...questions].reverse().map((q, index) => {
          const questionIndex = questions.length - 1 - index
          const isCurrent = questionIndex === currentQuestion
          const isPassed = questionIndex < currentQuestion
          const isSafeHaven = q.prize === "$1,000" || q.prize === "$32,000"

          return (
            <div
              key={questionIndex}
              className={cn(
                "p-2 md:p-3 rounded-lg border-2 transition-all duration-300",
                isCurrent && "bg-gradient-to-r from-primary/30 to-accent/30 border-primary glow-effect scale-105",
                isPassed && "bg-secondary/30 border-secondary opacity-60",
                !isCurrent && !isPassed && "bg-card/50 border-border",
                isSafeHaven && "border-gold/50",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs md:text-sm font-medium text-muted-foreground">Q{questionIndex + 1}</span>
                <span
                  className={cn(
                    "font-bold text-base md:text-lg",
                    isCurrent && "text-gold",
                    isPassed && "text-muted-foreground",
                    !isCurrent && !isPassed && "text-foreground",
                  )}
                >
                  {q.prize}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
