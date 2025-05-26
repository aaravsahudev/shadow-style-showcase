
import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const portfolioRef = useRef<HTMLElement>(null);

  const categories = [
    { id: 'all', name: 'ALL WORK' },
    { id: 'bridal', name: 'BRIDAL' },
    { id: 'editorial', name: 'EDITORIAL' },
    { id: 'evening', name: 'EVENING' },
    { id: 'natural', name: 'NATURAL' },
  ];

  const portfolioItems = [
    { id: 1, category: 'bridal', title: 'Elegant Bridal Look', description: 'Soft, romantic makeup for the perfect wedding day', image: '/placeholder.svg' },
    { id: 2, category: 'editorial', title: 'Fashion Editorial', description: 'Bold, dramatic makeup for magazine shoot', image: '/placeholder.svg' },
    { id: 3, category: 'evening', title: 'Glamorous Evening', description: 'Sophisticated look for special occasions', image: '/placeholder.svg' },
    { id: 4, category: 'natural', title: 'Natural Beauty', description: 'Enhancing natural features with subtle touches', image: '/placeholder.svg' },
    { id: 5, category: 'bridal', title: 'Classic Bride', description: 'Timeless elegance for the modern bride', image: '/placeholder.svg' },
    { id: 6, category: 'editorial', title: 'Avant-garde', description: 'Creative artistic expression through makeup', image: '/placeholder.svg' },
    { id: 7, category: 'evening', title: 'Red Carpet Ready', description: 'Glamorous makeup for high-profile events', image: '/placeholder.svg' },
    { id: 8, category: 'natural', title: 'Everyday Glow', description: 'Fresh, natural look for daily wear', image: '/placeholder.svg' },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  // Scroll animation observer
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

    const elements = portfolioRef.current?.querySelectorAll('.fade-in-on-scroll, .slide-in-left, .slide-in-right, .scale-in-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selectedCategory]);

  const openImage = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeImage();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <section ref={portfolioRef} id="portfolio" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-wider mb-6 fade-in-on-scroll">
            <span className="text-black">PORTFOLIO</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-8 scale-in-on-scroll"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto slide-in-left">
            A collection of my finest work showcasing different styles and techniques
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-on-scroll">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 text-sm font-medium tracking-wide transition-all duration-500 hover:scale-110 ${
                selectedCategory === category.id
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-gray-100 text-black hover:bg-gray-200 hover:shadow-md'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openImage(item.id)}
              className={`portfolio-item group relative overflow-hidden bg-gray-200 aspect-square cursor-pointer scale-in-on-scroll ${
                selectedImage === item.id ? 'selected' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="portfolio-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                  <div className="mt-3 text-xs bg-white/20 px-2 py-1 rounded inline-block">
                    {item.category.toUpperCase()}
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-95 group-hover:scale-100"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-on-scroll">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-black text-white font-medium tracking-wide hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            BOOK YOUR SESSION
          </a>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <>
          <div 
            className={`image-backdrop ${selectedImage ? 'active' : ''}`}
            onClick={closeImage}
          ></div>
          <div className={`image-forward ${selectedImage ? 'active' : ''}`}>
            <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl">
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
              >
                <X size={20} />
              </button>
              {(() => {
                const item = portfolioItems.find(p => p.id === selectedImage);
                return item ? (
                  <>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-auto max-h-[70vh] object-contain"
                    />
                    <div className="p-6 bg-white">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                      <span className="bg-black text-white px-3 py-1 text-sm rounded">
                        {item.category.toUpperCase()}
                      </span>
                    </div>
                  </>
                ) : null;
              })()}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Portfolio;
