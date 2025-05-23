
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-8 animate-fade-in">
            <span className="block text-black">MAKEUP</span>
            <span className="block text-gray-400">ARTISTRY</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
            Transforming faces into canvases of beauty. Professional makeup services for every occasion, from natural everyday looks to dramatic editorial styles.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-black text-white font-medium tracking-wide hover:bg-gray-800 transition-all duration-300 hover-lift"
            >
              VIEW PORTFOLIO
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-black text-black font-medium tracking-wide hover:bg-black hover:text-white transition-all duration-300 hover-lift"
            >
              BOOK SESSION
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-black transition-colors duration-300">
          <ChevronDown size={32} />
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-black rounded-full animate-fade-in" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-20 w-3 h-3 border border-black animate-fade-in" style={{ animationDelay: '1.2s' }}></div>
      <div className="absolute bottom-40 left-20 w-1 h-20 bg-gray-300 animate-fade-in" style={{ animationDelay: '1.4s' }}></div>
    </section>
  );
};

export default Hero;
