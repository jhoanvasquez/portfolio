import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Building, Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "TechFlow Solutions",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: "Lead development of enterprise web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Reduced application load time by 60% through optimization",
        "Led migration to cloud-native architecture",
        "Mentored 5 junior developers"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
    },
    {
      company: "Digital Innovations Inc",
      position: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects ranging from e-commerce platforms to SaaS applications with focus on performance and user experience.",
      achievements: [
        "Delivered 15+ successful projects on time",
        "Implemented CI/CD pipelines reducing deployment time by 80%",
        "Improved code coverage from 40% to 90%"
      ],
      technologies: ["React", "Python", "Django", "MongoDB", "Redis"]
    },
    {
      company: "StartupLab",
      position: "Frontend Developer",
      period: "2019 - 2020",
      description: "Built responsive web applications and mobile apps for early-stage startups. Focused on rapid prototyping and MVP development.",
      achievements: [
        "Launched 8 MVPs that secured funding",
        "Built reusable component library used across 5 projects",
        "Collaborated with designers to implement pixel-perfect UIs"
      ],
      technologies: ["React", "React Native", "TypeScript", "Firebase"]
    }
  ]

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey through different roles and companies, building impactful 
            solutions and growing as a developer.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-border"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  
                  <Card className="md:ml-16 border-0 shadow-sm">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="space-y-1">
                          <CardTitle className="text-xl">
                            {exp.position}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Building className="w-4 h-4" />
                            {exp.company}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Key Achievements</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge 
                                key={techIndex} 
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}