
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const heroBackgroundImage = "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2000')"; // Example image

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: heroBackgroundImage }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>

      <div className="container mx-auto px-6 text-center relative z-10"> {/* Ensure content is above overlay */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-8 animate-fade-in">
            {/* Ensuring text color contrasts with the new background and overlay */}
            <span className="block text-white">MAKEUP</span> 
            <span className="block text-slate-300 dark:text-slate-400">ARTISTRY</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
            Transforming faces into canvases of beauty. Professional makeup services for every occasion, from natural everyday looks to dramatic editorial styles.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-all duration-300 hover-lift rounded-md" // Added rounded-md
            >
              VIEW PORTFOLIO
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-primary text-primary font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift rounded-md bg-white/10 backdrop-blur-sm hover:bg-primary" // Added rounded-md and subtle background for better visibility
            >
              BOOK SESSION
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"> {/* Ensure chevron is above overlay */}
        <a href="#about" className="text-slate-300 hover:text-white transition-colors duration-300">
          <ChevronDown size={32} />
        </a>
      </div>

      {/* Decorative elements - might need color adjustments for visibility or can be removed if they clash */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-fade-in z-10" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-20 w-3 h-3 border border-primary animate-fade-in z-10"></div>
      <div className="absolute bottom-40 left-20 w-1 h-20 bg-muted/50 animate-fade-in z-10" style={{ animationDelay: '1.4s' }}></div>
    </section>
  );
};

export default Hero;
