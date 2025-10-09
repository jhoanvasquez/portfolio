import Navigation from "@/components/Navigation";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Back-end e-commerce with Bold payments, PostgreSQL database, REST API, admin dashboard, and inventory management system.",
      tech: ["Python", "Django", "PostgreSQL", "Django's cache framework", "AWS S3"],
      github: "https://github.com/jhoanvasquez/hardcoregames-back",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Workouts app",
      description: "Intelligent Web Recommendation System — Designed and implemented using Django as part of my Systems Engineering graduation project, focused on delivering personalized user experiences.",
      tech: ["Python", "Django", "JavaScript", "PostgreSQL"],
      github: "https://github.com/jhoanvasquez/Workouts",
      demo: "#",
      featured: true,
    },
    {
      id: 3,
      title: "LangChain Chatbot",
      description: "Smart Chatbot with LangChain — Developed an LLM-powered assistant that can comprehend and respond based on uploaded files, showcasing the power of LangChain in a compact, efficient implementation under 100 lines of code.",
      tech: ["Node.js", "Express", "Redis", "PostgreSQL", "Docker"],
      github: "https://github.com/jhoanvasquez/langchain-chat-with-your-data",
      demo: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Task Management SaaS",
      description: "Multi-tenant task management platform with team collaboration, Kanban boards, and analytics.",
      tech: ["Next.js", "tRPC", "PostgreSQL", "Prisma", "TailwindCSS"],
      github: "#",
      demo: "#",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="text-[hsl(var(--code-comment))] mb-2">// my work</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-[hsl(var(--code-keyword))]">Featured</span> Projects
            </h1>
            <p className="text-[hsl(var(--muted-foreground))] text-lg">
              A collection of projects I've built to solve real problems and explore new technologies.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16 space-y-12">
            {projects.filter(p => p.featured).map((project) => (
              <div 
                key={project.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors group"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      <a 
                        href={project.github}
                        className="text-[hsl(var(--muted-foreground))] hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a 
                        href={project.demo}
                        className="text-[hsl(var(--muted-foreground))] hover:text-primary transition-colors"
                        aria-label="View demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-[hsl(var(--muted-foreground))] mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-[hsl(var(--code-comment))]">//</span> Other Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.filter(p => !p.featured).map((project) => (
                <div 
                  key={project.id}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a 
                        href={project.github}
                        className="text-[hsl(var(--muted-foreground))] hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a 
                        href={project.demo}
                        className="text-[hsl(var(--muted-foreground))] hover:text-primary transition-colors"
                        aria-label="View demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-[hsl(var(--muted-foreground))] mb-6">
              Want to see more? Check out my GitHub for additional projects and contributions.
            </p>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open("https://github.com/jhoanvasquez")}
            >
              <Github className="w-4 h-4 mr-2"/>
              View GitHub Profile
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;

