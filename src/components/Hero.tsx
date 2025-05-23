import { ChevronDown, Palette, Brush, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Import Button
import { cn } from '@/lib/utils';

const Hero = () => {
  // Removed heroBackgroundImage

  return (
    <section
      id="home"
      // Removed style={{ backgroundImage: heroBackgroundImage }}
      className="min-h-screen flex items-center justify-center relative bg-background pt-20 pb-20" // Added bg-background and some padding
    >
      {/* Removed Overlay */}

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Icons */}
          <div className="absolute top-10 left-10 opacity-50 animate-pulse">
            <Palette size={48} className="text-primary/50" />
          </div>
          <div className="absolute top-1/4 right-10 opacity-50 animate-pulse animation-delay-500">
            <Brush size={40} className="text-primary/50" />
          </div>
           <div className="absolute bottom-1/4 left-1/4 opacity-30 animate-pulse animation-delay-1000">
            <Sparkles size={32} className="text-accent-foreground/30" />
          </div>


          <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-8 animate-fade-in">
            <span className="block text-foreground">MAKEUP</span> {/* Changed text color */}
            <span className="block text-primary">ARTISTRY</span> {/* Changed text color */}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
            Transforming faces into canvases of beauty. Professional makeup services for every occasion, from natural everyday looks to dramatic editorial styles.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="hover-lift">
              <a
                href="#portfolio"
              >
                VIEW PORTFOLIO
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-lift border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a
                href="#contact"
              >
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
