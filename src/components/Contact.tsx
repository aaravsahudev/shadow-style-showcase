
import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Send, Calendar, Facebook, MessageSquare } from 'lucide-react'; // Updated import
import { toast } from 'sonner'; // Using sonner for toasts as per App.tsx
import { cn } from '@/lib/utils';
// Note: Replaced Whatsapp with MessageSquare as Whatsapp is not a direct export from lucide-react.

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    // For now, just show a toast
    toast.success('Message Sent!', {
      description: 'Thank you for reaching out. I will get back to you soon.',
    });
    setFormData({ name: '', email: '', service: '', date: '', message: '' }); // Clear form
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    { icon: Mail, label: "Email", value: "hello@makeupartist.com", href: "mailto:hello@makeupartist.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, label: "Location", value: "New York City & Surrounding Areas" },
    { icon: MessageSquare, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/15551234567" }, // Replaced Whatsapp icon
    { icon: Calendar, label: "Schedule", value: "Book a Consultation", href: "#" }, // Replace # with actual booking link
  ];

  const socialMedia = [
    { icon: Instagram, label: "Instagram", value: "@makeupartist", href: "https://instagram.com/makeupartist" }, // Replace with actual link
    { icon: Facebook, label: "Facebook", value: "/makeupartistfb", href: "https://facebook.com/makeupartistfb" }, // Replace with actual link
  ];


  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-wider mb-6 animate-fade-in text-foreground">
            CONTACT
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Ready to transform your look? Let's discuss your makeup needs and create something beautiful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-bold mb-6 tracking-wide text-foreground">GET IN TOUCH</h3>
              <div className="space-y-6">
                {contactMethods.map(method => (
                  <div key={method.label} className="flex items-center">
                    <method.icon className="mr-4 text-primary" size={20} />
                    <div>
                      <p className="font-medium text-foreground">{method.label}</p>
                      {method.href ? (
                        <a href={method.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 tracking-wide text-foreground">FOLLOW US</h3>
              <div className="space-y-6">
                {socialMedia.map(social => (
                   <div key={social.label} className="flex items-center">
                    <social.icon className="mr-4 text-primary" size={20} />
                    <div>
                      <p className="font-medium text-foreground">{social.label}</p>
                      <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        {social.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-foreground">BOOKING INFORMATION</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• 48-hour notice required for bookings</p>
                <p>• Travel fees apply for locations over 30 miles</p>
                <p>• Deposit required to secure your date</p>
                <p>• Bridal trials recommended 2-3 months before wedding</p>
                <p>• Group bookings receive special pricing</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input bg-background text-foreground focus:border-primary focus:ring-primary focus:outline-none transition-colors duration-300 rounded-md"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input bg-background text-foreground focus:border-primary focus:ring-primary focus:outline-none transition-colors duration-300 rounded-md"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2 text-foreground">
                    SERVICE TYPE *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input bg-background text-foreground focus:border-primary focus:ring-primary focus:outline-none transition-colors duration-300 rounded-md"
                  >
                    <option value="">Select a service</option>
                    <option value="bridal">Bridal Makeup</option>
                    <option value="photoshoot">Photoshoot Makeup</option>
                    <option value="event">Special Event</option>
                    <option value="everyday">Everyday Glam</option>
                    <option value="group">Group Booking</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-2 text-foreground">
                    PREFERRED DATE
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input bg-background text-foreground focus:border-primary focus:ring-primary focus:outline-none transition-colors duration-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-input bg-background text-foreground focus:border-primary focus:ring-primary focus:outline-none transition-colors duration-300 rounded-md"
                  placeholder="Tell me about your vision, event details, or any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 px-8 font-medium tracking-wide hover:bg-primary/90 transition-all duration-300 flex items-center justify-center hover-lift rounded-md"
              >
                <Send size={20} className="mr-2" />
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
