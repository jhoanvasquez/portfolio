import Navigation from "@/components/Navigation";
import { Code2, Palette, Rocket, Database } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Prisma", "GraphQL", "REST APIs"] },
    { category: "DevOps & Tools", items: ["Docker", "Git", "AWS", "Redis", "CI/CD"] },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="text-[hsl(var(--code-comment))] mb-2">// who am I?</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-[hsl(var(--code-keyword))]">About</span> Me
            </h1>
          </div>

          {/* Bio Section */}
          <div className="mb-20 space-y-6">
            <div className="bg-card border border-border rounded-lg p-8">
              <p className="text-lg leading-relaxed text-[hsl(var(--muted-foreground))] mb-4">
                <span className="text-primary">const</span> <span className="text-[hsl(var(--code-keyword))]">developer</span> = &#123;
              </p>
              <div className="pl-8 space-y-2 text-[hsl(var(--muted-foreground))]">
                <p><span className="text-primary">name:</span> <span className="text-[hsl(var(--code-string))]">"Your Name"</span>,</p>
                <p><span className="text-primary">role:</span> <span className="text-[hsl(var(--code-string))]">"Full-stack Developer"</span>,</p>
                <p><span className="text-primary">location:</span> <span className="text-[hsl(var(--code-string))]">"Your City"</span>,</p>
                <p><span className="text-primary">passion:</span> <span className="text-[hsl(var(--code-string))]">"Building end-to-end solutions from database to UI"</span></p>
              </div>
              <p className="text-lg text-[hsl(var(--muted-foreground))] mt-4">&#125;;</p>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                I'm a passionate full-stack developer who loves building complete web applications from the ground up. 
                From designing databases and APIs to crafting responsive user interfaces, I handle every layer of the stack. 
                With a commitment to writing clean, maintainable code and architecting scalable systems, I create 
                digital experiences that are both powerful and delightful to use.
              </p>
            </div>
          </div>

          {/* What I Do Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-[hsl(var(--code-comment))]">//</span> What I Do
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <Code2 className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                <p className="text-[hsl(var(--muted-foreground))]">
                  Writing maintainable, scalable code following best practices and modern standards.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <Database className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Backend & APIs</h3>
                <p className="text-[hsl(var(--muted-foreground))]">
                  Building robust REST and GraphQL APIs with efficient database architecture.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <Palette className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                <p className="text-[hsl(var(--muted-foreground))]">
                  Crafting intuitive interfaces with attention to detail and user experience.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <Rocket className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Performance</h3>
                <p className="text-[hsl(var(--muted-foreground))]">
                  Optimizing applications for speed, accessibility, and best performance.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-[hsl(var(--code-comment))]">//</span> Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-primary font-semibold mb-4 text-lg">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-[hsl(var(--muted-foreground))] flex items-center gap-2">
                        <span className="text-primary">▹</span> {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
