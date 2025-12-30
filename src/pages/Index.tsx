import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Instagram, Twitter } from "lucide-react";
import heroImage from "@/assets/hero-craft.jpg";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Wait for writing animation to complete, then fade out
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Show content slightly before loading disappears for smooth transition
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2800);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  useEffect(() => {
    const targetDate = new Date("2026-02-09T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Loading Screen */}
      <div 
        className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-700 ${
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "#5B2228" }}
      >
        <div className="text-center animate-scale-in">
          <h1 className="font-display text-6xl md:text-8xl text-white mb-4">
            apoy
          </h1>
          <p 
            className="font-display text-xl md:text-2xl text-white/80 animate-fade-in"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            a piece of you
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div 
        className={`min-h-screen relative flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
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
          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl text-white mb-6 animate-fade-in">
            apoy
          </h1>
          <p className="font-display text-2xl md:text-3xl text-white/90 mb-10 animate-slide-up">
            a piece of you
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 md:gap-8 mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl md:text-5xl font-light text-white tabular-nums">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-widest text-white/70 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/80 mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            A cultural manifesto where identity meets craft.
          </p>

          <Link 
            to="/subscribe" 
            className="inline-block text-sm uppercase tracking-widest text-white hover:text-white/80 transition-colors border-b border-white pb-1 mb-10 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            Get notified when we launch
          </Link>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Follow us on Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
