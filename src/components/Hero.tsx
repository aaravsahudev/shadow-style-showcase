import { ChevronDown, Palette, Brush, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = heroRef.current?.querySelectorAll('.fade-in-on-scroll, .slide-in-left, .slide-in-right, .scale-in-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-background pt-20 pb-20"
    >
      {/* Removed Overlay */}

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Icons with scroll animations */}
          <div className="absolute top-10 left-10 opacity-50 animate-pulse scale-in-on-scroll">
            <Palette size={64} className="text-primary/50 rotate-[-15deg]" />
          </div>
          <div className="absolute top-1/4 right-10 opacity-50 animate-pulse scale-in-on-scroll">
            <Brush size={56} className="text-primary/50 rotate-12" />
          </div>
          <div className="absolute bottom-1/4 left-1/4 opacity-30 animate-pulse scale-in-on-scroll">
            <Sparkles size={48} className="text-accent-foreground/30" />
          </div>
          <div className="absolute top-1/3 left-20 opacity-40 animate-pulse scale-in-on-scroll">
            <Brush size={40} className="text-primary/40 rotate-45" />
          </div>
          <div className="absolute bottom-1/3 right-20 opacity-30 animate-pulse scale-in-on-scroll">
            <Palette size={52} className="text-primary/30 rotate-[25deg]" />
          </div>
          <div className="absolute top-2/3 right-1/4 opacity-40 animate-pulse scale-in-on-scroll">
            <Sparkles size={36} className="text-accent-foreground/40" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-wider mb-8 fade-in-on-scroll">
            <span className="block text-foreground typing-text text-[2rem] sm:text-[3rem] md:text-[4rem]">WELCOME TO</span>
            <span className="block text-primary typing-text text-[2rem] sm:text-[3rem] md:text-[4rem]" style={{ animationDelay: "3s" }}>ARAV MAKEOVER</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed slide-in-left px-4">
            Transforming faces into canvases of beauty. Professional makeup artistry for weddings, events, photoshoots, and special occasions. Your vision, our expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center slide-in-right">
            <Button asChild size="lg" className="hover-lift transition-all duration-300 hover:scale-110">
              <a href="#portfolio">
                VIEW PORTFOLIO
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-lift border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
              <a href="#contact">
                BOOK SESSION
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300"> {/* Adjusted color for better visibility */}
          <ChevronDown size={32} />
        </a>
      </div>

      {/* Keeping existing small decorative elements, ensuring they are visible */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-primary/70 rounded-full animate-fade-in z-0" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-10 w-3 h-3 border border-primary/70 animate-fade-in z-0" style={{ animationDelay: '1.2s' }}></div>
    </section>
  );
};

export default Hero;