import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    // TODO: Integrate with backend/newsletter service
    toast.success("Welcome to the apoy circle! Check your inbox for confirmation.");
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-display text-5xl md:text-7xl text-primary mb-6">
              Join the apoy circle
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Be part of our cultural movement. Get exclusive access to stories, events, and community.
            </p>
          </div>
        </section>

        {/* Subscription Plans */}
        <section className="py-16 px-6 lg:px-12">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Free Plan */}
              <div className="border-2 border-border rounded-lg p-8 bg-background hover:shadow-lg transition-shadow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Launch Access</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-display text-primary">Free</span>
                    <span className="text-foreground/60">for now</span>
                  </div>
                  <p className="text-foreground/70">
                    Join us at launch and be part of the founding community
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-0.5" size={20} />
                    <span>Early access to all Issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-0.5" size={20} />
                    <span>Monthly newsletter with curated stories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-0.5" size={20} />
                    <span>Community event invites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-0.5" size={20} />
                    <span>Behind-the-scenes content</span>
                  </li>
                </ul>

                <form onSubmit={handleSubscribe} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                  />
                  <Button type="submit" className="w-full" size="lg">
                    Join Free Now
                  </Button>
                </form>
              </div>

              {/* Premium Plan (Coming Soon) */}
              <div className="border-2 border-primary rounded-lg p-8 bg-primary/5 hover:shadow-lg transition-shadow relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold">
                  Coming Soon
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Inner Circle</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-display text-primary">$9</span>
                    <span className="text-foreground/60">/month</span>
                  </div>
                  <p className="text-foreground/70">
                    Premium access with exclusive perks and deeper community engagement
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-0.5" size={20} />
                    <span>Everything in Launch Access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-0.5" size={20} />
                    <span>Exclusive digital & print editions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-0.5" size={20} />
                    <span>Priority access to events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-0.5" size={20} />
                    <span>Members-only workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-0.5" size={20} />
                    <span>Contributor opportunities</span>
                  </li>
                </ul>

                <Button className="w-full" size="lg" disabled>
                  Launching Soon
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Subscribe Section */}
        <section className="py-16 px-6 lg:px-12 bg-muted">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Why Join the Circle?
            </h2>
            <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
              apoy is more than a magazine—it's a movement celebrating Filipino-American identity, 
              creativity, and community. Your subscription supports independent storytelling and 
              connects you with a network of creators and changemakers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="font-semibold text-lg mb-2">Support Independent Media</h3>
                <p className="text-foreground/70">
                  Help us continue creating authentic, meaningful content that represents our community.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Connect & Collaborate</h3>
                <p className="text-foreground/70">
                  Join a vibrant community of creators, artists, and storytellers shaping culture.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Early Access</h3>
                <p className="text-foreground/70">
                  Be the first to experience new Issues, events, and exclusive content.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Subscribe;
