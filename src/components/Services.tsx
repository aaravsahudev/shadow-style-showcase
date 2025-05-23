
import { Sparkles, Heart, Camera, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'BRIDAL MAKEUP',
      description: 'Your special day deserves perfect makeup that lasts from ceremony to reception.',
      features: ['Trial session included', 'Long-lasting formula', 'Touch-up kit provided', 'Photography ready'],
      price: 'Starting at $300'
    },
    {
      icon: Camera,
      title: 'PHOTOSHOOT MAKEUP',
      description: 'Professional makeup designed specifically for photography and video shoots.',
      features: ['Camera-ready techniques', 'Multiple look changes', 'HD makeup products', 'Collaboration with photographers'],
      price: 'Starting at $200'
    },
    {
      icon: Star,
      title: 'SPECIAL EVENTS',
      description: 'Glamorous makeup for galas, parties, proms, and other special occasions.',
      features: ['Custom look design', 'Premium products', 'Long-wear guarantee', 'Style consultation'],
      price: 'Starting at $150'
    },
    {
      icon: Sparkles,
      title: 'EVERYDAY GLAM',
      description: 'Learn professional techniques to enhance your daily beauty routine.',
      features: ['Personalized tutorial', 'Product recommendations', 'Technique training', 'Take-home guide'],
      price: 'Starting at $100'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-wider mb-6 animate-fade-in">
            <span className="text-black">SERVICES</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Professional makeup services tailored to your needs and style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white p-8 hover-lift group animate-fade-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-black text-white mr-4 group-hover:bg-gray-800 transition-colors duration-300">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold tracking-wide">{service.title}</h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-black mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-black">{service.price}</span>
                <a
                  href="#contact"
                  className="px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm font-medium tracking-wide"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="max-w-2xl mx-auto p-8 bg-white border-2 border-black">
            <h3 className="text-2xl font-bold mb-4">GROUP BOOKINGS AVAILABLE</h3>
            <p className="text-gray-600 mb-6">
              Planning a wedding party or group event? I offer special packages for multiple clients.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-black text-white font-medium tracking-wide hover:bg-gray-800 transition-all duration-300"
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
