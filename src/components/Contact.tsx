import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Folder, ChevronRight, ChevronDown } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['contacts'])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev =>
      prev.includes(folder)
        ? prev.filter(f => f !== folder)
        : [...prev, folder]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Message sent! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contacts = [
    { name: 'email.txt', value: 'micheal@example.com', icon: '📧' },
    { name: 'phone.txt', value: '+3598246359', icon: '📱' },
    { name: 'discord.txt', value: 'micheal#5921', icon: '💬' }
  ]

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 h-screen max-h-[800px]">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-3">
            <Card className="h-full terminal-window">
              <CardContent className="p-0">
                <div className="border-b border-muted p-4">
                  <h3 className="code-text text-foreground">_contact-me</h3>
                </div>

                <div className="p-4 space-y-2">
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
                        {contacts.map((contact, index) => (
                          <div key={index} className="flex items-center gap-2 text-muted-foreground">
                            <div className="w-4 h-4 flex items-center justify-center">
                              <span className="text-xs">{contact.icon}</span>
                            </div>
                            <span className="code-text text-sm">{contact.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <button
                      onClick={() => toggleFolder('find-me-also-in')}
                      className="flex items-center gap-2 w-full text-left text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {expandedFolders.includes('find-me-also-in') ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                      <Folder className="w-4 h-4 text-accent" />
                      <span className="code-text">find-me-also-in</span>
                    </button>

                    {expandedFolders.includes('find-me-also-in') && (
                      <div className="ml-6 space-y-1">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-4 h-4 flex items-center justify-center">🐦</div>
                          <span className="code-text text-sm">Twitter</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-4 h-4 flex items-center justify-center">💼</div>
                          <span className="code-text text-sm">LinkedIn</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-4 h-4 flex items-center justify-center">📸</div>
                          <span className="code-text text-sm">Instagram</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-9">
            <Card className="h-full terminal-window">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="border-b border-muted p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-t-lg">
                      <span className="code-text text-sm text-foreground">contacts</span>
                      <button className="text-muted-foreground hover:text-foreground">×</button>
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-6">
                  <div className="max-w-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="code-text space-y-4">
                        <div className="space-y-2">
                          <label className="text-muted-foreground">_name:</label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="bg-muted border-muted text-foreground code-text"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-muted-foreground">_email:</label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="bg-muted border-muted text-foreground code-text"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-muted-foreground">_message:</label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message"
                            rows={8}
                            className="bg-muted border-muted text-foreground code-text resize-none"
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          className="bg-accent text-accent-foreground hover:bg-accent/80 code-text"
                        >
                          submit-message
                        </Button>
                      </div>
                    </form>
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