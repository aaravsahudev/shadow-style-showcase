
import { Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold tracking-wider mb-4">
              MAKEUP.ARTIST
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Transforming faces into canvases of beauty with professional makeup artistry and personalized service.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-bold mb-4">QUICK LINKS</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors duration-300">
                About
              </a>
              <a href="#portfolio" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Portfolio
              </a>
              <a href="#services" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Services
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-lg font-bold mb-4">CONNECT</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Follow for daily inspiration and behind-the-scenes content
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Makeup Artist. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart size={16} className="mx-1 text-red-500" /> for beauty
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
