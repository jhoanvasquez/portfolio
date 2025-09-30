import { Button } from "./ui/button"

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-muted">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="code-text text-muted-foreground">
            jhoan-vasquez
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hello')}
              className="code-text text-muted-foreground hover:text-foreground transition-colors border-b-2 border-accent"
            >
              _hello
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="code-text text-muted-foreground hover:text-foreground transition-colors"
            >
              _about-me
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="code-text text-muted-foreground hover:text-foreground transition-colors"
            >
              _projects
            </button>
          </div>

          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="code-text border-muted-foreground text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            _contact-me
          </Button>
        </nav>
      </div>
    </header>
  )
}