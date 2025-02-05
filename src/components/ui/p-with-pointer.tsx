import { cn } from "@/lib/utils"
import * as React from "react"

const PWithPointer = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return <p className={cn("pointer-events-auto", className)} ref={ref} {...props} />
  }
)
PWithPointer.displayName = "PWithPointer"

export { PWithPointer } 