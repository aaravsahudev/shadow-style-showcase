
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactMethod {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

interface ContactInfoProps {
  contactMethods: ContactMethod[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({ contactMethods }) => {
  return (
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
  );
};

export default ContactInfo;
