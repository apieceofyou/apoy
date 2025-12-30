import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-craft.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
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
      
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <h1 className="font-display text-7xl md:text-8xl lg:text-9xl text-white mb-8 animate-fade-in">
          apoy
        </h1>
        <p className="font-serif italic text-xl md:text-2xl text-white/90 mb-4 animate-slide-up">
          A Piece of You
        </p>
        <p className="text-4xl md:text-5xl font-light text-white mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Coming Soon
        </p>
        <p className="text-white/80 mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          A cultural manifesto where identity meets craft.
        </p>
        <Link 
          to="/subscribe" 
          className="inline-block text-sm uppercase tracking-widest text-white hover:text-white/80 transition-colors border-b border-white pb-1 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          Get notified when we launch
        </Link>
      </div>
    </div>
  );
};

export default Index;
