
import React, { useEffect } from 'react';

const CalendlyWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      // Calendly might also add a specific class or ID to its elements that need cleanup
      // For simplicity, we're only removing the script tag here.
      // More robust cleanup might be needed depending on Calendly's behavior.
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget w-full" 
      data-url="https://calendly.com/aravs6531?background_color=1a1a1a&text_color=fefafa&primary_color=f0f0f0" // Adjusted primary_color for better visibility with dark/light themes
      style={{ minWidth: '320px', height: '700px' }}
    >
    </div>
  );
};

export default CalendlyWidget;
