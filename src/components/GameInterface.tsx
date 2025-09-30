import { useState, useEffect } from "react"
import { Button } from "./ui/button"

export function GameInterface() {
  const [gameState, setGameState] = useState({
    score: 0,
    level: 1,
    foodLeft: 10,
    direction: 'down'
  })

  const [snakeBlocks, setSnakeBlocks] = useState([
    { x: 160, y: 200 },
    { x: 160, y: 180 },
    { x: 160, y: 160 }
  ])

  const [food, setFood] = useState({ x: 200, y: 240 })

  useEffect(() => {
    const timer = setInterval(() => {
      setGameState(prev => ({
        ...prev,
        score: prev.score + Math.floor(Math.random() * 5)
      }))
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  const gridSize = 20
  const gameWidth = 320
  const gameHeight = 240

  return (
    <div className="game-screen rounded-lg p-6 w-full max-w-md">
      {/* Game Info Panel */}
      <div className="bg-background/20 rounded-lg p-4 mb-4 space-y-2">
        <div className="code-text text-sm text-white">
          <span className="text-code-comment">// use keyboard</span>
        </div>
        <div className="code-text text-sm text-white">
          <span className="text-code-comment">// arrows to play</span>
        </div>
        <div className="grid grid-cols-4 gap-1 my-3">
          <div className="w-6 h-6 bg-white/20 rounded border border-white/40"></div>
          <div className="w-6 h-6 bg-white/40 rounded border border-white/60"></div>
          <div className="w-6 h-6 bg-white/20 rounded border border-white/40"></div>
          <div className="w-6 h-6 bg-white/60 rounded border border-white/80"></div>
        </div>
        <div className="code-text text-sm text-white">
          <span className="text-code-comment">// food left</span>
        </div>
        <div className="grid grid-cols-5 gap-1">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i < gameState.foodLeft ? 'bg-accent' : 'bg-white/20'
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Game Screen */}
      <div className="bg-background/40 rounded-lg p-4 relative overflow-hidden">
        <div 
          className="relative border border-white/20 rounded"
          style={{ width: gameWidth, height: gameHeight }}
        >
          {/* Snake */}
          {snakeBlocks.map((block, index) => (
            <div
              key={index}
              className={`absolute w-4 h-4 rounded-sm ${
                index === 0 ? 'bg-accent' : 'bg-code-green'
              }`}
              style={{
                left: block.x,
                top: block.y,
              }}
            ></div>
          ))}
          
          {/* Food */}
          <div
            className="absolute w-4 h-4 bg-code-orange rounded-full"
            style={{
              left: food.x,
              top: food.y,
            }}
          ></div>

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: Math.ceil(gameHeight / gridSize) }, (_, row) => (
              <div key={row} className="flex">
                {Array.from({ length: Math.ceil(gameWidth / gridSize) }, (_, col) => (
                  <div
                    key={col}
                    className="border border-white/20"
                    style={{ width: gridSize, height: gridSize }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <Button
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/80 code-text"
          >
            start-game
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 code-text"
          >
            skip
          </Button>
        </div>
      </div>
    </div>
  )
}