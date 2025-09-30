import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Folder, ChevronRight, ChevronDown, ExternalLink } from "lucide-react"
import { useState } from "react"
import { ImageWithFallback } from "./figma/ImageWithFallback"

export function Projects() {
  const [selectedTech, setSelectedTech] = useState("React")
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['React', 'HTML', 'CSS'])

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'text-code-blue' },
    { name: 'HTML', icon: '🌐', color: 'text-code-orange' },
    { name: 'CSS', icon: '🎨', color: 'text-code-green' },
    { name: 'Vue', icon: '💚', color: 'text-code-green' },
    { name: 'Angular', icon: '🅰️', color: 'text-code-red' },
    { name: 'Gatsby', icon: '🚀', color: 'text-code-pink' },
    { name: 'Flutter', icon: '📱', color: 'text-code-blue' }
  ]

  const projects = [
    // React Projects
    {
      id: 1,
      title: "_ui-animations",
      description: "Smooth UI animations and micro-interactions using Framer Motion and React Spring.",
      image: "https://images.unsplash.com/photo-1642635715930-b3a1eba9c99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMG5lYnVsYSUyMHN0YXJzfGVufDF8fHx8MTc1OTEzNTE2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      tech: "React"
    },
    {
      id: 2,
      title: "_tetris-game",
      description: "Classic Tetris game built with React hooks and TypeScript for state management.",
      image: "https://images.unsplash.com/photo-1648736958748-a0978b01da0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBuZW9uJTIwZ2FtZXxlbnwxfHx8fDE3NTkxNzEyODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      tech: "React"
    },
    {
      id: 3,
      title: "_dashboard-app",
      description: "Real-time analytics dashboard with charts and data visualization components.",
      image: "https://images.unsplash.com/photo-1735027441011-d2919174e28b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTkxNzQ4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      tech: "React"
    },
    // HTML Projects
    {
      id: 4,
      title: "_portfolio-v1",
      description: "First portfolio website built with semantic HTML5 and CSS Grid layout.",
      image: "https://images.unsplash.com/photo-1642635715930-b3a1eba9c99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMG5lYnVsYSUyMHN0YXJzfGVufDF8fHx8MTc1OTEzNTE2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      tech: "HTML"
    },
    {
      id: 5,
      title: "_landing-page",
      description: "Responsive landing page with modern HTML5 semantics and accessibility features.",
      image: "https://images.unsplash.com/photo-1648736958748-a0978b01da0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBuZW9uJTIwZ2FtZXxlbnwxfHx8fDE3NTkxNzEyODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      tech: "HTML"
    },
    // CSS Projects
    {
      id: 6,
      title: "_css-animations",
      description: "Pure CSS animations showcasing keyframes, transforms, and transitions.",
      image: "https://images.unsplash.com/photo-1735027441011-d2919174e28b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTkxNzQ4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      tech: "CSS"
    },
    {
      id: 7,
      title: "_flexbox-grid",
      description: "Complex layouts using CSS Flexbox and Grid with responsive design patterns.",
      image: "https://images.unsplash.com/photo-1642635715930-b3a1eba9c99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMG5lYnVsYSUyMHN0YXJzfGVufDF8fHx8MTc1OTEzNTE2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      tech: "CSS"
    },
    // Vue Projects
    {
      id: 8,
      title: "_vue-todo",
      description: "Task management app built with Vue 3 Composition API and Pinia state management.",
      image: "https://images.unsplash.com/photo-1648736958748-a0978b01da0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBuZW9uJTIwZ2FtZXxlbnwxfHx8fDE3NTkxNzEyODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      tech: "Vue"
    },
    // Angular Projects
    {
      id: 9,
      title: "_angular-ecommerce",
      description: "E-commerce platform with Angular, RxJS, and NgRx for complex state management.",
      image: "https://images.unsplash.com/photo-1735027441011-d2919174e28b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTkxNzQ4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      tech: "Angular"
    },
    // Gatsby Projects
    {
      id: 10,
      title: "_gatsby-blog",
      description: "Static blog site with Gatsby, GraphQL, and Markdown for content management.",
      image: "https://images.unsplash.com/photo-1642635715930-b3a1eba9c99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMG5lYnVsYSUyMHN0YXJzfGVufDF8fHx8MTc1OTEzNTE2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      tech: "Gatsby"
    },
    // Flutter Projects
    {
      id: 11,
      title: "_flutter-weather",
      description: "Cross-platform weather app with Flutter, featuring beautiful animations and dark mode.",
      image: "https://images.unsplash.com/photo-1648736958748-a0978b01da0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBuZW9uJTIwZ2FtZXxlbnwxfHx8fDE3NTkxNzEyODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      tech: "Flutter"
    }
  ]

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => 
      prev.includes(folder) 
        ? prev.filter(f => f !== folder)
        : [...prev, folder]
    )
  }

  const filteredProjects = projects.filter(project => project.tech === selectedTech)

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 h-screen max-h-[800px]">
          {/* Technology Sidebar */}
          <div className="lg:col-span-3">
            <Card className="h-full terminal-window">
              <CardContent className="p-0">
                <div className="border-b border-muted p-4">
                  <h3 className="code-text text-foreground">_projects</h3>
                </div>
                
                <div className="p-4 space-y-2">
                  {technologies.map((tech) => (
                    <div key={tech.name} className="space-y-1">
                      <button
                        onClick={() => toggleFolder(tech.name)}
                        className="flex items-center gap-2 w-full text-left text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {expandedFolders.includes(tech.name) ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                        <Folder className="w-4 h-4 text-accent" />
                        <span className="code-text">{tech.name}</span>
                      </button>
                      
                      {expandedFolders.includes(tech.name) && (
                        <div className="ml-6 space-y-1">
                          {projects.filter(p => p.tech === tech.name).map(project => (
                            <button
                              key={project.id}
                              onClick={() => setSelectedTech(tech.name)}
                              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <div className="w-4 h-4 flex items-center justify-center">
                                <span className="text-xs">{tech.icon}</span>
                              </div>
                              <span className="code-text text-sm">{project.title}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Projects Area */}
          <div className="lg:col-span-9">
            <Card className="h-full terminal-window">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="border-b border-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-t-lg">
                        <span className="code-text text-sm text-foreground">_projects</span>
                        <button className="text-muted-foreground hover:text-foreground">×</button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Select value={selectedTech} onValueChange={setSelectedTech}>
                        <SelectTrigger className="w-32 bg-muted border-0 code-text">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {technologies.map((tech) => (
                            <SelectItem key={tech.name} value={tech.name} className="code-text">
                              {tech.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 p-6">
                  {filteredProjects.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredProjects.map((project, index) => (
                        <Card 
                          key={`${selectedTech}-${project.id}`} 
                          className="bg-card border-muted overflow-hidden group hover:border-accent transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="aspect-video overflow-hidden">
                            <ImageWithFallback 
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-4 space-y-3">
                            <div className="flex items-center justify-between">
                              <h3 className="code-text text-code-blue">
                                Project {index + 1}
                              </h3>
                              <span className="code-text text-muted-foreground text-sm">
                                // {selectedTech}
                              </span>
                            </div>
                            
                            <h4 className="code-text font-medium text-foreground">
                              {project.title}
                            </h4>
                            
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {project.description}
                            </p>
                            
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground code-text mt-4"
                              asChild
                            >
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                view-project
                              </a>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-64">
                      <div className="text-center space-y-4">
                        <div className="text-4xl">🚧</div>
                        <div className="code-text text-muted-foreground">
                          No projects found for {selectedTech}
                        </div>
                        <div className="code-text text-sm text-muted-foreground">
                          // Coming soon...
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}