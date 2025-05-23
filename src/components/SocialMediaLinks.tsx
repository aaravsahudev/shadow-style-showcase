
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialMediaLink {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

interface SocialMediaLinksProps {
  socialMedia: SocialMediaLink[];
}

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({ socialMedia }) => {
  return (
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
  );
};

export default SocialMediaLinks;
