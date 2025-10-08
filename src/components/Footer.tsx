import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    // TODO: Integrate with newsletter service
    toast.success("Thank you for subscribing! Check your inbox for confirmation.");
    setEmail("");
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4">Join the APOY Circle</h2>
          <p className="text-primary-foreground/80 mb-6">
            Get Issue drops, event invites, and behind-the-scenes access. Free for launch.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
            />
            <Button type="submit" variant="secondary" className="whitespace-nowrap">
              Join the Circle
            </Button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-display text-2xl mb-4">APOY</h3>
            <p className="text-sm text-primary-foreground/70">
              A Cultural Manifesto. Where identity meets craft.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/issues" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Issues
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/manifesto" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Manifesto
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/community" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/collaborate" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Collaborate
                </Link>
              </li>
              <li>
                <a href="mailto:hello@apoymagazine.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Follow</h4>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:hello@apoymagazine.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© 2025 APOY Magazine. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
