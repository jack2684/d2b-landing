import { cn } from "@/lib/utils"
import * as React from "react"

interface PWithPointerProps extends React.HTMLAttributes<HTMLParagraphElement> { }

const PWithPointer = React.forwardRef<HTMLParagraphElement, PWithPointerProps>(
  ({ className, ...props }, ref) => {
    return <p className={cn("pointer-events-auto", className)} ref={ref} {...props} />
  }
)
PWithPointer.displayName = "PWithPointer"

export { PWithPointer } 