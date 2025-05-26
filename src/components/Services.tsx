
import { Sparkles, Heart, Camera, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'BRIDAL MAKEUP',
      description: 'Your special day deserves perfect makeup that lasts from ceremony to reception.',
      features: ['Trial session included', 'Long-lasting formula', 'Touch-up kit provided', 'Photography ready'],
    },
    {
      icon: Camera,
      title: 'PHOTOSHOOT MAKEUP',
      description: 'Professional makeup designed specifically for photography and video shoots.',
      features: ['Camera-ready techniques', 'Multiple look changes', 'HD makeup products', 'Collaboration with photographers'],
    },
    {
      icon: Star,
      title: 'SPECIAL EVENTS',
      description: 'Glamorous makeup for galas, parties, proms, and other special occasions.',
      features: ['Custom look design', 'Premium products', 'Long-wear guarantee', 'Style consultation'],
    },
    {
      icon: Sparkles,
      title: 'EVERYDAY GLAM',
      description: 'Learn professional techniques to enhance your daily beauty routine.',
      features: ['Personalized tutorial', 'Product recommendations', 'Technique training', 'Take-home guide'],
    }
  ];

  import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Services = () => {
  const servicesRef = useScrollAnimation();

  return (
    <section ref={servicesRef} id="services" className="py-20 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-wider mb-6 fade-in-on-scroll text-foreground">
            SERVICES
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 scale-in-on-scroll"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-in-left">
            Professional makeup services tailored to your needs and style. Pricing available upon consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-background p-8 hover-lift group rounded-lg shadow-md transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary text-primary-foreground mr-4 group-hover:bg-primary/90 transition-all duration-300 rounded group-hover:scale-110">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold tracking-wide text-foreground">{service.title}</h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary mr-3 flex-shrink-0 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-end">
                <a
                  href="#contact"
                  className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium tracking-wide rounded"
                >
                  INQUIRE NOW
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="max-w-2xl mx-auto p-8 bg-background border-2 border-primary rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-foreground">GROUP BOOKINGS AVAILABLE</h3>
            <p className="text-muted-foreground mb-6">
              Planning a wedding party or group event? I offer special packages for multiple clients.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-all duration-300 rounded"
            >
              GET GROUP QUOTE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

