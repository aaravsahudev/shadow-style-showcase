
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Import Button

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
      <div className="space-y-3"> {/* Adjusted spacing for buttons */}
        {socialMedia.map(social => (
          <Button asChild variant="outline" key={social.label} className="w-full justify-start text-left h-auto py-3">
            <a href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <social.icon className="mr-3 text-primary flex-shrink-0" size={20} />
              <div className="flex flex-col">
                <span className="font-medium text-foreground">{social.label}</span>
                <span className="text-sm text-muted-foreground">{social.value}</span>
              </div>
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaLinks;
