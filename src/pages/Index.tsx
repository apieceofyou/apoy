import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="font-display text-7xl md:text-8xl lg:text-9xl text-foreground mb-8">
          apoy
        </h1>
        <p className="font-serif italic text-xl md:text-2xl text-muted-foreground mb-4">
          A Piece of You
        </p>
        <p className="text-4xl md:text-5xl font-light text-foreground mb-12">
          Coming Soon
        </p>
        <p className="text-muted-foreground mb-8">
          A cultural manifesto where identity meets craft.
        </p>
        <Link 
          to="/subscribe" 
          className="inline-block text-sm uppercase tracking-widest text-primary hover:text-primary/80 transition-colors border-b border-primary pb-1"
        >
          Get notified when we launch
        </Link>
      </div>
    </div>
  );
};

export default Index;
