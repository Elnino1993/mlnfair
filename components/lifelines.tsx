"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Scissors, Users, Phone } from "lucide-react"
import type { LifelineType } from "@/components/game-screen"

interface LifelinesProps {
  usedLifelines: LifelineType[]
  onUseLifeline: (lifeline: LifelineType) => void
  disabled: boolean
}

export function Lifelines({ usedLifelines, onUseLifeline, disabled }: LifelinesProps) {
  const lifelines: { type: LifelineType; icon: typeof Scissors; label: string }[] = [
    { type: "50-50", icon: Scissors, label: "50:50" },
    { type: "audience", icon: Users, label: "Audience" },
    { type: "phone", icon: Phone, label: "Phone" },
  ]

  return (
    <div className="flex gap-3">
      {lifelines.map(({ type, icon: Icon, label }) => {
        const isUsed = usedLifelines.includes(type)
        return (
          <Button
            key={type}
            onClick={() => onUseLifeline(type)}
            disabled={isUsed || disabled}
            variant="outline"
            className={cn(
              "flex flex-col items-center gap-1 h-auto py-3 px-4 transition-all",
              "border-2 border-accent/50 hover:border-accent hover:bg-accent/10",
              isUsed && "opacity-30 cursor-not-allowed border-muted",
            )}
          >
            <Icon className={cn("w-6 h-6", isUsed ? "text-muted" : "text-accent")} />
            <span className={cn("text-xs font-medium", isUsed ? "text-muted" : "text-accent")}>{label}</span>
          </Button>
        )
      })}
    </div>
  )
}
