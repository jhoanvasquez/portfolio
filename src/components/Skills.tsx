import { Badge } from "./ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", 
        "Tailwind CSS", "Material-UI", "Framer Motion", "Redux", "Zustand"
      ]
    },
    {
      title: "Backend",
      skills: [
        "Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", 
        "Redis", "GraphQL", "REST APIs", "WebSockets", "Prisma"
      ]
    },
    {
      title: "Mobile",
      skills: [
        "React Native", "Expo", "Flutter", "iOS Development", "Android Development", 
        "Cross-platform", "Native APIs", "App Store Deployment"
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        "AWS", "Docker", "Kubernetes", "CI/CD", "Git", "GitHub Actions", 
        "Vercel", "Netlify", "Firebase", "Supabase", "Monitoring"
      ]
    }
  ]

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience 
            and continuous learning in modern development practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="text-xs px-3 py-1 bg-secondary/50 hover:bg-secondary/80 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Always learning and exploring new technologies to stay current with industry trends.
          </p>
        </div>
      </div>
    </section>
  )
}