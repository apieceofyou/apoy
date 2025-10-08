import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import manifestoImage from "@/assets/manifesto-portrait.jpg";

const Manifesto = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Split Layout */}
      <section className="min-h-screen pt-20 flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
            {/* Left: Image */}
            <div className="order-2 lg:order-1 animate-reveal">
              <div className="aspect-[3/4] overflow-hidden shadow-lift">
                <img 
                  src={manifestoImage} 
                  alt="APOY Cultural Manifesto" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Manifesto Text */}
            <div className="order-1 lg:order-2 space-y-6 animate-fade-in">
              <h1 className="font-display text-5xl md:text-6xl lg:text-display-md text-primary mb-8">
                The Manifesto
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  <strong>Dear Reader,</strong>
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Welcome to the very first issue of <em>A Piece of You.</em>
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  APOY was born from a simple truth: culture is not static. It is living, breathing, 
                  evolving — carried in our clothes, our music, our homes, and our identities. Every thread, 
                  every rhythm, every ritual is a piece of who we are.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  But for too long, representation has been fragmented. A fashion magazine here, a music 
                  feature there, a lifestyle blog somewhere else — each telling pieces of the story, but 
                  rarely weaving them together. APOY exists to change that.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  We are <em>the cultural revolution magazine.</em> A home where every culture is honored, 
                  every story is celebrated, and where fusion — the blending of heritage and modernity, 
                  tradition and innovation — is recognized as the heartbeat of our generation.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  In these pages, you will find:
                </p>

                <ul className="list-disc pl-6 space-y-2 mb-6 text-lg">
                  <li><strong>Fashion</strong> that honors roots and reimagines them.</li>
                  <li><strong>Music</strong> that carries the sound of migration and fusion.</li>
                  <li><strong>Lifestyle & Decor</strong> that bring global traditions into everyday living.</li>
                  <li><strong>Stories & Voices</strong> that remind us identity is layered, complex, and beautiful.</li>
                </ul>

                <p className="text-lg leading-relaxed mb-6">
                  This first issue is our beginning, but it is also a declaration: APOY is more than a 
                  magazine. It is a platform, a movement, a mirror of the world as it is — diverse, 
                  interconnected, and ever-evolving.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  As you turn each page, I invite you to see yourself reflected here. Because no matter 
                  where you come from, you carry culture with you. And here, at APOY, we honor every 
                  piece of you.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  <strong>With love and revolution,</strong><br />
                  <span className="font-display text-2xl">Founder Name</span><br />
                  <span className="text-sm text-muted-foreground">Founder & Editor-in-Chief, A Piece of You</span>
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Join the Movement
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editor's Note Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">Editor's Note</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                When I started APOY, I wanted one thing: a place where stories of heritage could sit 
                proudly next to experimental design. I wanted a magazine that didn't force culture into 
                a single cage but allowed it to live, breathe, and mix — because our generation's 
                identity is hybrid and beautiful.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                This issue is an invitation. Read, listen, question, and share. If APOY reflects a 
                piece of you, tell us about it. Join the movement.
              </p>

              <p className="text-lg leading-relaxed">
                — <span className="font-display text-2xl">Founder Name</span>, Founder & Editor-in-Chief
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Manifesto;
