
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Location = () => {
  const locationRef = useScrollAnimation();

  const locationInfo = [
    {
      icon: MapPin,
      title: "STUDIO LOCATION",
      details: [
        "123 Beauty Street",
        "Downtown District",
        "New York, NY 10001"
      ]
    },
    {
      icon: Clock,
      title: "WORKING HOURS",
      details: [
        "Monday - Friday: 9:00 AM - 7:00 PM",
        "Saturday: 10:00 AM - 6:00 PM",
        "Sunday: By Appointment Only"
      ]
    },
    {
      icon: Phone,
      title: "CONTACT INFO",
      details: [
        "Phone: +1 (555) 123-4567",
        "WhatsApp: +1 (555) 123-4567",
        "Emergency: +1 (555) 987-6543"
      ]
    },
    {
      icon: Mail,
      title: "EMAIL US",
      details: [
        "Bookings: hello@aravmakeover.com",
        "General: info@aravmakeover.com",
        "Collaboration: work@aravmakeover.com"
      ]
    }
  ];

  return (
    <section ref={locationRef} id="location" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-wider mb-6 fade-in-on-scroll text-black">
            LOCATION
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-8 scale-in-on-scroll"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto slide-in-left">
            Visit our studio or we can come to you. Find us at our convenient location in the heart of the city.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Location Information */}
          <div className="space-y-8">
            {locationInfo.map((info, index) => (
              <div
                key={info.title}
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-black slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  <info.icon className="mr-3 text-black" size={24} />
                  <h3 className="text-xl font-bold text-black">{info.title}</h3>
                </div>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="slide-in-right">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-4 text-gray-500" />
                <p className="text-gray-600 font-medium">Interactive Map</p>
                <p className="text-gray-500 text-sm">Google Maps integration coming soon</p>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="mt-8 space-y-4">
              <div className="bg-black text-white p-6 rounded-lg">
                <h4 className="font-bold mb-2">ON-LOCATION SERVICES</h4>
                <p className="text-sm">We also provide makeup services at your preferred location within a 50-mile radius.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="font-bold mb-2 text-black">PARKING AVAILABLE</h4>
                <p className="text-sm text-gray-700">Free parking available in our building's garage. Street parking also available.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location = () => {
  const locationRef = useScrollAnimation();

  const galleryImages = [
    {
      id: 1,
      src: "/placeholder.svg",
      alt: "Makeup Studio Interior 1",
      title: "Professional Studio Setup"
    },
    {
      id: 2,
      src: "/placeholder.svg",
      alt: "Makeup Studio Interior 2",
      title: "Premium Makeup Station"
    },
    {
      id: 3,
      src: "/placeholder.svg",
      alt: "Makeup Studio Interior 3",
      title: "Comfortable Client Area"
    },
    {
      id: 4,
      src: "/placeholder.svg",
      alt: "Makeup Studio Interior 4",
      title: "Professional Lighting Setup"
    },
    {
      id: 5,
      src: "/placeholder.svg",
      alt: "Makeup Studio Interior 5",
      title: "Luxury Treatment Room"
    },
    {
      id: 6,
      src: "/placeholder.svg",
      alt: "Makeup Studio Interior 6",
      title: "VIP Consultation Area"
    }
  ];

  return (
    <section ref={locationRef} id="location" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Location Info */}
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            OUR LOCATION
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit our professional makeup studio for the ultimate beauty experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Studio Details */}
          <div className="space-y-8 slide-in-left">
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Studio Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground">Address</h4>
                    <p className="text-muted-foreground">
                      123 Beauty Lane, Fashion District<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground">Studio Hours</h4>
                    <div className="text-muted-foreground">
                      <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                      <p>Sunday: 10:00 AM - 6:00 PM</p>
                      <p className="text-sm mt-2 text-primary">*By appointment only</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground">Contact</h4>
                    <p className="text-muted-foreground">
                      +91 98765 43210<br />
                      info@aravmakeover.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Studio Gallery */}
          <div className="slide-in-right">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Studio Gallery</h3>
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((image, index) => (
                <div 
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg aspect-square hover-lift scale-in-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-sm font-medium text-center px-4">
                      {image.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 fade-in-on-scroll">
          <div className="bg-muted rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Find Us</h3>
            <div className="aspect-video bg-neutral-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground text-center">
                Interactive map will be integrated here<br />
                <span className="text-sm">Google Maps embed coming soon</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
