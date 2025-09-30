import { Card, CardContent } from "./ui/card"
import { Folder, ChevronRight, ChevronDown } from "lucide-react"
import { useState } from "react"

export function About() {
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['personal-info'])
  const [activeFile, setActiveFile] = useState<string>('bio')

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev =>
      prev.includes(folder)
        ? prev.filter(f => f !== folder)
        : [...prev, folder]
    )
  }

  const fileContents = {
    bio: [
      "I have 5 years of experience in software development,",
      "working with Java, Python and modern JavaScript.",
      "",
      "I enjoy creating robust and",
      "scalable applications that",
      "solve real-world problems.",
      "",
      "I'm passionate about clean code,",
      "software architecture, and continuous learning.",
      "Always excited to take on new challenges!"
    ],
    interests: [
      "🎮 Gaming - I love exploring virtual worlds",
      "and competitive gaming, especially FPS",
      "and strategy games.",
      "⚽ Sports & Fitness – Outside the tech world",
      "I stay active by playing soccer and going to the gym",
      "which helps me maintain focus and a balanced lifestyle.",
      "📚 Continuous Learning - Always reading",
      "about new technologies, frameworks,",
      "and programming paradigms."
    ],
    education: [
      "🎓 Bachelor of Systems Engineer",
      "Universidad del Valle (2018–2023)",
      "🎓 Bachelor of Computer Science",
      "Universidad del Valle (2015–2019)"
    ]
  }

  const files = [
    { name: 'bio.txt', key: 'bio', icon: '📄' },
    { name: 'interests.txt', key: 'interests', icon: '📄' },
    { name: 'education.txt', key: 'education', icon: '📄' }
  ]

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 h-screen max-h-[800px]">
          {/* File Explorer Sidebar */}
          <div className="lg:col-span-3">
            <Card className="h-full terminal-window">
              <CardContent className="p-0">
                <div className="border-b border-muted p-4">
                  <h3 className="code-text text-foreground">_about-me</h3>
                </div>

                <div className="p-4 space-y-2">
                  <div className="space-y-1">
                    <button
                      onClick={() => toggleFolder('personal-info')}
                      className="flex items-center gap-2 w-full text-left text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {expandedFolders.includes('personal-info') ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                      <Folder className="w-4 h-4 text-accent" />
                      <span className="code-text">personal-info</span>
                    </button>

                    {expandedFolders.includes('personal-info') && (
                      <div className="ml-6 space-y-1">
                        {files.map((file) => (
                          <button
                            key={file.key}
                            onClick={() => setActiveFile(file.key)}
                            className={`flex items-center gap-2 w-full text-left transition-colors ${
                              activeFile === file.key
                                ? 'text-foreground bg-muted/50'
                                : 'text-muted-foreground hover:text-foreground'
                            } p-1 rounded`}
                          >
                            <div className="w-4 h-4 flex items-center justify-center">
                              {file.icon}
                            </div>
                            <span className="code-text text-sm">{file.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <button
                      onClick={() => toggleFolder('contacts')}
                      className="flex items-center gap-2 w-full text-left text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {expandedFolders.includes('contacts') ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                      <Folder className="w-4 h-4 text-accent" />
                      <span className="code-text">contacts</span>
                    </button>

                    {expandedFolders.includes('contacts') && (
                      <div className="ml-6 space-y-1">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-4 h-4 flex items-center justify-center">📧</div>
                          <span className="code-text text-sm">email.txt</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-4 h-4 flex items-center justify-center">📱</div>
                          <span className="code-text text-sm">phone.txt</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9">
            <Card className="h-full terminal-window">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="border-b border-muted p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-t-lg">
                      <span className="code-text text-sm text-foreground">
                        {files.find(f => f.key === activeFile)?.name || 'bio.txt'}
                      </span>
                      <button className="text-muted-foreground hover:text-foreground">×</button>
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-6 code-text overflow-hidden">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="text-muted-foreground space-y-1 text-right">
                        {fileContents[activeFile as keyof typeof fileContents].map((_, index) => (
                          <div key={index} className="text-sm leading-6">
                            {index + 1}
                          </div>
                        ))}
                      </div>
                      <div
                        className="space-y-1 transition-all duration-300 ease-in-out"
                        key={activeFile}
                      >
                        {fileContents[activeFile as keyof typeof fileContents].map((line, index) => (
                          <div
                            key={index}
                            className="text-sm leading-6 animate-in fade-in duration-300"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            {line && (
                              <>
                                <span className="text-code-comment">/**</span>
                                <span className="text-muted-foreground ml-2">{line}</span>
                                <span className="text-code-comment ml-1">*/</span>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}