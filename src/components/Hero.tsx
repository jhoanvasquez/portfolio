import { GameInterface } from "./GameInterface"
import { TypewriterText } from "./TypewriterText"
import { Github, Linkedin, Twitter } from "lucide-react"
import { useState } from "react"

export function Hero() {
  const [showGreeting, setShowGreeting] = useState(false)
  const [showName, setShowName] = useState(false)
  const [showRole, setShowRole] = useState(false)

  useState(() => {
    setTimeout(() => setShowGreeting(true), 500)
  })

  return (
    <section id="hello" className="min-h-screen flex items-center justify-center pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="code-text text-lg text-foreground min-h-[1.5rem]">
                {showGreeting && (
                  <TypewriterText
                    text="Hi all. I am"
                    speed={80}
                    onComplete={() => setShowName(true)}
                    showCursor={false}
                  />
                )}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem]">
                {"Jhoan Vasquez"}
              </h1>
              <div className="code-text text-xl md:text-2xl text-code-blue min-h-[2rem]">

                  <>
                    <span className="text-foreground">{">"}</span>{" "}
                    <TypewriterText
                      text="Full-stack developer"
                      speed={100}
                      delay={300}
                      showCursor={true}
                      className="text-code-blue"
                    />
                  </>
              </div>
            </div>

            <div className="space-y-4 code-text text-muted-foreground">
                <div className="space-y-4 animate-in fade-in duration-700" style={{ animationDelay: '0.5s' }}>
                  <div>I'm passionate about creating robust and scalable full-stack solutions
                  tailored to their business needs.</div>

                  <div className="flex items-center gap-2">
                    <span className="text-code-blue">const</span>
                    <span className="text-code-green">githubLink</span>
                    <span className="text-foreground">=</span>
                    <a
                      href="https://github.com/jhoanvasquez"
                      className="text-code-orange hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      "https://github.com/jhoanvasquez"
                    </a>
                  </div>
                </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="animate-in fade-in slide-in-from-right-8 duration-1000" style={{ animationDelay: '1s' }}>
              {/* <GameInterface /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}