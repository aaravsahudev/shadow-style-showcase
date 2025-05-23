
import { useState } from 'react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'ALL WORK' },
    { id: 'bridal', name: 'BRIDAL' },
    { id: 'editorial', name: 'EDITORIAL' },
    { id: 'evening', name: 'EVENING' },
    { id: 'natural', name: 'NATURAL' },
  ];

  const portfolioItems = [
    { id: 1, category: 'bridal', title: 'Elegant Bridal Look', description: 'Soft, romantic makeup for the perfect wedding day' },
    { id: 2, category: 'editorial', title: 'Fashion Editorial', description: 'Bold, dramatic makeup for magazine shoot' },
    { id: 3, category: 'evening', title: 'Glamorous Evening', description: 'Sophisticated look for special occasions' },
    { id: 4, category: 'natural', title: 'Natural Beauty', description: 'Enhancing natural features with subtle touches' },
    { id: 5, category: 'bridal', title: 'Classic Bride', description: 'Timeless elegance for the modern bride' },
    { id: 6, category: 'editorial', title: 'Avant-garde', description: 'Creative artistic expression through makeup' },
    { id: 7, category: 'evening', title: 'Red Carpet Ready', description: 'Glamorous makeup for high-profile events' },
    { id: 8, category: 'natural', title: 'Everyday Glow', description: 'Fresh, natural look for daily wear' },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-wider mb-6 animate-fade-in">
            <span className="text-black">PORTFOLIO</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            A collection of my finest work showcasing different styles and techniques
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
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
              className="group relative overflow-hidden bg-gray-200 aspect-square hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>

              {/* Placeholder for actual images */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <span className="text-gray-600 text-sm font-medium">{item.category.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-black text-white font-medium tracking-wide hover:bg-gray-800 transition-all duration-300 hover-lift"
          >
            BOOK YOUR SESSION
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
