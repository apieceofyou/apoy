import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Instagram, Twitter } from "lucide-react";
import heroImage from "@/assets/hero-craft.jpg";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  // Generate floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 8 + Math.random() * 12,
    size: 2 + Math.random() * 4,
  }));

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

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white/20 animate-float"
            style={{
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <h1 className="font-display text-7xl md:text-8xl lg:text-9xl text-white mb-6 animate-fade-in">
          apoy
        </h1>
        <p className="font-display text-2xl md:text-3xl text-white/90 mb-10 animate-slide-up underline underline-offset-8 decoration-1">
          a piece of you
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-4 md:gap-8 mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
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

        <p className="text-white/80 mb-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          A cultural manifesto where identity meets craft.
        </p>

        <Link 
          to="/subscribe" 
          className="inline-block text-sm uppercase tracking-widest text-white hover:text-white/80 transition-colors border-b border-white pb-1 mb-10 animate-slide-up"
          style={{ animationDelay: "0.5s" }}
        >
          Get notified when we launch
        </Link>

        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-slide-up" style={{ animationDelay: "0.6s" }}>
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
  );
};

export default Index;
