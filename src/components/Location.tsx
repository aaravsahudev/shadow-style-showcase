
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
