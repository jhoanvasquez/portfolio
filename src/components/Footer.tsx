import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-muted py-4">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="code-text text-muted-foreground">find me in:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-muted hover:border-accent text-muted-foreground hover:text-accent transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/jhoan-vasquez-34024a1b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-muted hover:border-accent text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="border-l border-muted pl-4">
            <a
              href="https://github.com/jhoanvasquez"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 border border-muted hover:border-accent text-muted-foreground hover:text-accent transition-colors"
            >
              <span className="code-text text-sm">@jhoanvasquez</span>
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}