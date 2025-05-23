
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-8 animate-fade-in">
            <span className="block text-foreground">MAKEUP</span>
            <span className="block text-muted-foreground">ARTISTRY</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
            Transforming faces into canvases of beauty. Professional makeup services for every occasion, from natural everyday looks to dramatic editorial styles.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-all duration-300 hover-lift"
            >
              VIEW PORTFOLIO
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-primary text-primary font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
            >
              BOOK SESSION
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
          <ChevronDown size={32} />
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-fade-in" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-20 w-3 h-3 border border-primary animate-fade-in" style={{ animationDelay: '1.2s' }}></div>
      <div className="absolute bottom-40 left-20 w-1 h-20 bg-muted animate-fade-in" style={{ animationDelay: '1.4s' }}></div>
    </section>
  );
};

export default Hero;

