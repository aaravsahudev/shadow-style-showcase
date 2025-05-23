
import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';

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
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-wider mb-6 animate-fade-in">
            <span className="text-black">CONTACT</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Ready to transform your look? Let's discuss your makeup needs and create something beautiful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-bold mb-6 tracking-wide">GET IN TOUCH</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="mr-4 text-black" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">hello@makeupartist.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="mr-4 text-black" size={20} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="mr-4 text-black" size={20} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">New York City & Surrounding Areas</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Instagram className="mr-4 text-black" size={20} />
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-gray-600">@makeupartist</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8">
              <h4 className="text-xl font-bold mb-4">BOOKING INFORMATION</h4>
              <div className="space-y-3 text-sm text-gray-600">
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
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    SERVICE TYPE *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300"
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
                  <label htmlFor="date" className="block text-sm font-medium mb-2">
                    PREFERRED DATE
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300"
                  placeholder="Tell me about your vision, event details, or any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 px-8 font-medium tracking-wide hover:bg-gray-800 transition-all duration-300 flex items-center justify-center hover-lift"
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
