import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { path: "/", label: "_hello" },
    { path: "/about", label: "_about-me" },
    { path: "/projects", label: "_projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[hsl(var(--nav-border))] bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-[hsl(var(--code-comment))] hover:text-foreground transition-colors text-sm"
          >
            your-name
          </Link>
          
          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors relative ${
                  location.pathname === link.path
                    ? "text-foreground after:absolute after:bottom-[-17px] after:left-0 after:right-0 after:h-[2px] after:bg-primary"
                    : "text-[hsl(var(--code-comment))] hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
