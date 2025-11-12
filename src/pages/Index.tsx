import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users } from "lucide-react";
import heroImage from "@/assets/hero-craft.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-display text-6xl md:text-8xl lg:text-display-xl text-white mb-6 animate-fade-in">
            apoy
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 animate-slide-up font-serif italic">
            A Piece of You — A Cultural Manifesto
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Where identity meets craft. Where heritage becomes design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/manifesto">
                Explore the Manifesto
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/about">See Issue 1</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Manifesto Snapshot */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <blockquote className="pull-quote text-center mb-8">
              "Culture is not static. It is living, breathing, evolving — carried in our clothes, our music, our homes, and our identities."
            </blockquote>
            <div className="text-center">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/manifesto">
                  Read the Full Manifesto
                  <BookOpen className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Featured Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughtful editorial exploring fusion fashion, music, lifestyle, and design across cultures
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                tag: "Fashion",
                title: "Heritage Textiles Meet Modern Silhouettes",
                excerpt: "Exploring the art of fusion fashion with emerging designers",
                readTime: "8 min read"
              },
              {
                tag: "Music",
                title: "The Sound of Migration",
                excerpt: "How diaspora artists are reshaping contemporary music",
                readTime: "6 min read"
              },
              {
                tag: "Lifestyle",
                title: "Rituals Reimagined",
                excerpt: "Bringing traditional practices into modern living",
                readTime: "10 min read"
              }
            ].map((story, i) => (
              <article key={i} className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="aspect-[3/4] bg-muted mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-accent font-semibold">{story.tag}</span>
                  <h3 className="font-serif text-xl font-semibold group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{story.excerpt}</p>
                  <p className="text-xs text-muted-foreground">{story.readTime}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground italic">More stories coming in Issue 1</p>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <Users className="mx-auto mb-6" size={48} />
          <h2 className="font-display text-4xl md:text-5xl mb-6">Join the Movement</h2>
          <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            APOY is more than a magazine. It's a platform, a movement, a mirror of the world as it is — diverse, interconnected, and ever-evolving.
          </p>
          <Button size="lg" variant="secondary">
            Subscribe to APOY Circle
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
