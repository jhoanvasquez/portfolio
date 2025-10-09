import Navigation from "@/components/Navigation";
import TypingAnimation from "@/components/TypingAnimation";
import AnimatedTerminal from "@/components/AnimatedTerminal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      
      {/* Gradient Background Effect */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{ background: "var(--gradient-radial)" }}
      />
      
      <main className="container mx-auto px-6 pt-32 pb-20 relative">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="mb-20 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[hsl(var(--code-comment))] mb-4 animate-fade-in">
                Hi all. I am
              </p>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
                Jhoan Vasquez
              </h1>
              <div className="text-2xl md:text-3xl mb-8 flex items-center gap-3 animate-fade-in min-h-[48px]">
                <span className="text-primary">›</span>
                <TypingAnimation 
                  text="Full-stack Engineer" 
                  speed={80}
                  className="text-[hsl(var(--code-keyword))]"
                />
              </div>
            
            <div className="space-y-4 text-[hsl(var(--muted-foreground))] animate-fade-in">
              <p className="text-[hsl(var(--code-comment))]">/**I'm passionate about creating robust and scalable full-stack solutions tailored to their business needs.*/</p>
              <p className="text-[hsl(var(--code-comment))]">// find my profile on Github:</p>
              <p>
                <span className="text-[hsl(var(--code-keyword))]">const</span>{" "}
                <span className="text-[hsl(var(--code-string))]">githubLink</span> ={" "}
                <a 
                  href="https://github.com/jhoanvasquez" 
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "https://github.com/jhoanvasquez"
                </a>
              </p>
            </div>

              <div className="mt-12 flex gap-4 animate-fade-in">
                <Link to="/projects">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    View My Work
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    About Me
                  </Button>
                </Link>
              </div>
            </div>

            {/* Animated Terminal */}
            <div className="animate-fade-in lg:mt-0 mt-8">
              <AnimatedTerminal />
            </div>
          </div>

          {/* Visual Element - Code Block */}
          <div className="bg-card border border-border rounded-lg p-8 mb-12 animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-[#fbbf24]"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <pre className="text-sm leading-relaxed">
              <code>
                <span className="text-[hsl(var(--code-keyword))]">function</span>{" "}
                <span className="text-[#fbbf24]">buildAwesomeThings</span>() &#123;{"\n"}
                {"  "}<span className="text-[hsl(var(--code-keyword))]">const</span> skills = [
                <span className="text-[hsl(var(--code-string))]">'Java'</span>,{" "}
                <span className="text-[hsl(var(--code-string))]">'Python'</span>,{" "}
                <span className="text-[hsl(var(--code-string))]">'TypeScript'</span>,{" "}
                <span className="text-[hsl(var(--code-string))]">'React'</span>,{" "}
                <span className="text-[hsl(var(--code-string))]">'Angular'</span>];{"\n"}
                {"  "}<span className="text-[hsl(var(--code-keyword))]">return</span> skills.map(skill {'=>'} {"\n"}
                {"    "}<span className="text-[hsl(var(--code-string))]">`Building with $&#123;skill&#125;`</span>{"\n"}
                {"  "});{"\n"}
                &#125;
              </code>
            </pre>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 border-t border-[hsl(var(--nav-border))] bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[hsl(var(--code-comment))]">find me in:</p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/jhoanvasquez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[hsl(var(--muted-foreground))] hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[hsl(var(--muted-foreground))] hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:jhoan0498@gmail.com"
                className="text-[hsl(var(--muted-foreground))] hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in:nth-child(2) {
          animation-delay: 0.1s;
        }
        
        .animate-fade-in:nth-child(3) {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default Index;
