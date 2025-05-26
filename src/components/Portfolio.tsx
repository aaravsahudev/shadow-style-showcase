
import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const portfolioRef = useScrollAnimation();

  const categories = [
    { id: 'all', name: 'ALL WORK' },
    { id: 'bridal', name: 'BRIDAL' },
    { id: 'editorial', name: 'EDITORIAL' },
    { id: 'evening', name: 'EVENING' },
    { id: 'natural', name: 'NATURAL' },
  ];

  const services = [
    { 
      title: 'BRIDAL MAKEUP', 
      description: 'Perfect for your special day with long-lasting, photo-ready looks',
      features: ['Trial session included', 'Touch-up kit provided', 'On-location service', 'Hair styling available']
    },
    { 
      title: 'EDITORIAL MAKEUP', 
      description: 'Creative and artistic looks for photoshoots and fashion work',
      features: ['Creative consultation', 'Multiple looks', 'Professional collaboration', 'Portfolio development']
    },
    { 
      title: 'EVENING MAKEUP', 
      description: 'Glamorous looks for special events and occasions',
      features: ['Red carpet ready', 'Long-wearing formula', 'Event styling', 'Photo-perfect finish']
    },
    { 
      title: 'NATURAL MAKEUP', 
      description: 'Enhance your natural beauty with subtle, everyday looks',
      features: ['Skin enhancement', 'Natural glow', 'Daily wear techniques', 'Product recommendations']
    }
  ];

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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-gray-50 p-8 border-l-4 border-black hover:shadow-lg transition-all duration-300 scale-in-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
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

      
    </section>
  );
};

export default Portfolio;
