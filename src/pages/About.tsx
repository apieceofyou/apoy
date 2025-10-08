import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import aboutImage from "@/assets/about-flatlay.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl lg:text-display-md text-primary mb-6">
              About APOY
            </h1>
            <p className="text-xl text-muted-foreground">
              A Cultural Manifesto and Editorial Platform
            </p>
          </div>

          {/* Featured Image */}
          <div className="max-w-5xl mx-auto mb-16 animate-reveal">
            <img 
              src={aboutImage} 
              alt="APOY Magazine Editorial" 
              className="w-full h-auto shadow-editorial"
            />
          </div>

          {/* Main Content */}
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Mission */}
            <section className="animate-slide-up">
              <h2 className="font-serif text-3xl font-bold mb-6">About APOY</h2>
              <p className="text-lg leading-relaxed mb-6">
                APOY (A Piece of You) is a cultural manifesto and editorial platform dedicated to 
                honoring and reimagining heritage through fashion, music, lifestyle, and design. We 
                publish thoughtful essays, powerful photo stories, and profiles of creators who fuse 
                tradition with the contemporary. Our work champions representation, invites conversation, 
                and builds a bridge from story to style.
              </p>
            </section>

            {/* Our Mission */}
            <section className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                To create a space where culture is celebrated as design — where traditions are honored 
                and reinterpreted, and where hybrid identities are given the space to tell their own stories.
              </p>
            </section>

            {/* What We Publish */}
            <section className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6">What We Publish</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span>Long-form features and profiles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span>Visual editorials and photo essays</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span>Personal essays and diaspora voices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span>Cultural deep-dives on textiles, rituals, and sound</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span>Guides to incorporating heritage into modern living</span>
                </li>
              </ul>
            </section>

            {/* Who We Are For */}
            <section className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6">Who We Are For</h2>
              <p className="text-lg leading-relaxed">
                APOY is for creators and readers who live between worlds — people who see identity as 
                layered and dynamic, and who want to wear and tell their stories thoughtfully.
              </p>
            </section>

            {/* How We Work */}
            <section className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6">How We Work</h2>
              <p className="text-lg leading-relaxed">
                We partner with designers, artists, and cultural practitioners to ensure every feature 
                is respectful, sourced, and contextually accurate. Our editorial guidelines prioritize 
                consent, collaboration, and fair compensation whenever possible.
              </p>
            </section>

            {/* Press & Partnerships */}
            <section className="bg-secondary p-8 md:p-12 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6">Press & Partnerships</h2>
              <p className="text-lg leading-relaxed mb-6">
                Brands, institutions, and cultural organizations interested in partnerships or features 
                can download our media kit or contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Download className="mr-2" size={16} />
                  Download Media Kit
                </Button>
                <Button asChild>
                  <a href="mailto:partnerships@apoymagazine.com">
                    <Mail className="mr-2" size={16} />
                    Contact Partnerships
                  </a>
                </Button>
              </div>
            </section>

            {/* Team Section (Placeholder) */}
            <section className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <h2 className="font-serif text-3xl font-bold mb-6">The Team</h2>
              <p className="text-lg leading-relaxed mb-8">
                APOY is led by a team of cultural storytellers, designers, and advocates committed to 
                elevating underrepresented voices and celebrating heritage through contemporary design.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6">
                  <p className="font-semibold text-lg">Founder Name</p>
                  <p className="text-muted-foreground">Founder & Editor-in-Chief</p>
                </div>
                <div className="border-l-2 border-accent pl-6">
                  <p className="font-semibold text-lg">Creative Director Name</p>
                  <p className="text-muted-foreground">Creative Director</p>
                </div>
                <div className="border-l-2 border-accent pl-6">
                  <p className="font-semibold text-lg">Managing Editor Name</p>
                  <p className="text-muted-foreground">Managing Editor</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
