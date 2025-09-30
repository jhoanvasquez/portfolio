import { useState, useEffect } from "react"

interface TypewriterTextProps {
  text: string
  delay?: number
  speed?: number
  onComplete?: () => void
  showCursor?: boolean
  className?: string
}

export function TypewriterText({ 
  text, 
  delay = 0, 
  speed = 100, 
  onComplete,
  showCursor = true,
  className = ""
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const [showTypingCursor, setShowTypingCursor] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setShowTypingCursor(true)
      let index = 0
      
      const typeTimer = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index))
          index++
        } else {
          clearInterval(typeTimer)
          setIsComplete(true)
          onComplete?.()
          
          // Hide cursor after completion (optional)
          if (!showCursor) {
            setTimeout(() => setShowTypingCursor(false), 1000)
          }
        }
      }, speed)

      return () => clearInterval(typeTimer)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [text, delay, speed, onComplete, showCursor])

  return (
    <span className={`typewriter-text ${className}`}>
      {displayText}
      {showTypingCursor && (
        <span className="typewriter-cursor"></span>
      )}
    </span>
  )
}