import { Mail, Phone, MapPin, Instagram, Facebook, MessageSquare } from 'lucide-react';
import CalendlyWidget from './CalendlyWidget';
import ContactInfo from './ContactInfo';
import SocialMediaLinks from './SocialMediaLinks';
import BookingInfo from './BookingInfo';
import ContactForm from './ContactForm';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const contactRef = useScrollAnimation();

  const contactMethods = [
    { icon: Mail, label: "Email", value: "hello@makeupartist.com", href: "mailto:hello@makeupartist.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, label: "Location", value: "New York City & Surrounding Areas" },
    { icon: MessageSquare, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/15551234567" },
  ];

  const socialMedia = [
    { icon: Instagram, label: "Instagram", value: "@makeupartist", href: "https://instagram.com/makeupartist" },
    { icon: Facebook, label: "Facebook", value: "/makeupartistfb", href: "https://facebook.com/makeupartistfb" },
  ];

  return (
    <section ref={contactRef} id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-wider mb-6 fade-in-on-scroll text-foreground">
            CONTACT
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 scale-in-on-scroll"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-in-left">
            Ready to transform your look? Let's discuss your makeup needs or book your session below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information & Form Column */}
          <div className="flex flex-col space-y-12">
            <div className="slide-in-left space-y-8">
              <ContactInfo contactMethods={contactMethods} />
              <SocialMediaLinks socialMedia={socialMedia} />
              <BookingInfo />
            </div>
            <div className="slide-in-right lg:slide-in-left">
              <ContactForm />
            </div>
          </div>

          {/* Calendly Widget Column */}
          <div className="slide-in-right">
            <h3 className="text-2xl font-bold mb-6 tracking-wide text-foreground">BOOK YOUR SESSION</h3>
            <div className="bg-muted p-4 sm:p-6 rounded-lg shadow-lg">
              <CalendlyWidget />
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              Use the calendar above to book your appointment directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;