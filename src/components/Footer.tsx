import { Instagram, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TermsDialog } from './TermsDialog';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Footer = () => {
  const footerRef = useScrollAnimation();

  return (
    <footer ref={footerRef} className="bg-neutral-900 text-neutral-300 dark:bg-neutral-900 dark:text-neutral-300 py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="fade-in-on-scroll">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Arav Makeover Logo" 
                className="w-10 h-10 filter brightness-0 invert"
              />
              <h3 className="text-2xl font-bold tracking-wider text-white dark:text-white">
                MAKEUP.ARTIST
              </h3>
            </div>
            <p className="text-neutral-400 dark:text-neutral-400 leading-relaxed">
              Transforming faces into canvases of beauty with professional makeup artistry and personalized service.
            </p>
          </div>

          <div className="fade-in-on-scroll" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-bold mb-4 text-white dark:text-white">QUICK LINKS</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map(item => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="block text-neutral-400 hover:text-white dark:text-neutral-400 dark:hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="fade-in-on-scroll" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-lg font-bold mb-4 text-white dark:text-white">CONNECT</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://instagram.com/makeupartist" // Replace with actual link
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 dark:bg-neutral-700 flex items-center justify-center hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors duration-300 rounded"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:hello@makeupartist.com" // Replace with actual email
                className="w-10 h-10 bg-neutral-800 dark:bg-neutral-700 flex items-center justify-center hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors duration-300 rounded"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-neutral-400 dark:text-neutral-400 text-sm">
              Follow for daily inspiration and behind-the-scenes content
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center pt-8 border-t border-neutral-700 dark:border-neutral-700 space-y-4 fade-in-on-scroll" style={{ animationDelay: '0.6s' }}>
            <p className="text-neutral-400 dark:text-neutral-400 text-sm text-center">
              © {new Date().getFullYear()} Makeup Artist. All rights reserved.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a 
                href="#privacy" 
                className="text-neutral-400 dark:text-neutral-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <span className="hidden sm:inline text-neutral-400 dark:text-neutral-400">|</span>
              <TermsDialog />
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;