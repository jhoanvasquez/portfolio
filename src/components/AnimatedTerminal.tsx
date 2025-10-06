import { useEffect, useState } from "react";

const AnimatedTerminal = () => {
  const [lines, setLines] = useState<string[]>([]);
  
  const commands = [
    "$ npm install creativity",
    "$ npm install problem-solving",
    "$ npm run build-future",
    "> Building awesome projects...",
    "✓ Compilation successful!",
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < commands.length) {
        setLines((prev) => [...prev, commands[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card border border-border rounded-lg p-6 max-w-md">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-destructive"></div>
        <div className="w-3 h-3 rounded-full bg-[#fbbf24]"></div>
        <div className="w-3 h-3 rounded-full bg-primary"></div>
      </div>
      <div className="space-y-2 font-mono text-sm min-h-[160px]">
        {lines.map((line, index) => (
          <div
            key={index}
            className={`animate-fade-in ${
              line.startsWith("✓") 
                ? "text-primary" 
                : line.startsWith(">") 
                ? "text-[hsl(var(--muted-foreground))]" 
                : "text-foreground"
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {line}
          </div>
        ))}
        {lines.length < commands.length && (
          <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
        )}
      </div>
    </div>
  );
};

export default AnimatedTerminal;
