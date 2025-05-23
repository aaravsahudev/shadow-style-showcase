
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
// Assuming Input and Button components from shadcn/ui might be used or custom ones.
// For simplicity, using standard HTML inputs and button styled with Tailwind.

const ContactForm: React.FC = () => {
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
    toast.success('Message Sent!', {
      description: 'Thank you for reaching out. I will get back to you soon.',
    });
    setFormData({ name: '', email: '', service: '', date: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 tracking-wide text-foreground">SEND A MESSAGE</h3>
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
  );
};

export default ContactForm;
