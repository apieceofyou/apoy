import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Issues", href: "/issues", soon: true },
    { label: "Journal", href: "/journal", soon: true },
    { label: "Manifesto", href: "/manifesto" },
    { label: "Community", href: "/community", soon: true },
    { label: "Collaborate", href: "/collaborate", soon: true },
    { label: "About", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="font-display text-3xl md:text-4xl text-primary hover:opacity-80 transition-opacity">
            APOY
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm tracking-wide uppercase transition-colors link-underline ${
                  location.pathname === item.href
                    ? "text-primary font-medium"
                    : "text-foreground/70 hover:text-foreground"
                } ${item.soon ? "pointer-events-none opacity-50" : ""}`}
              >
                {item.label}
                {item.soon && <span className="ml-1 text-xs normal-case">(Soon)</span>}
              </Link>
            ))}
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Subscribe
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm tracking-wide uppercase transition-colors ${
                    location.pathname === item.href
                      ? "text-primary font-medium"
                      : "text-foreground/70 hover:text-foreground"
                  } ${item.soon ? "pointer-events-none opacity-50" : ""}`}
                >
                  {item.label}
                  {item.soon && <span className="ml-1 text-xs normal-case">(Soon)</span>}
                </Link>
              ))}
              <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-2">
                Subscribe
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
