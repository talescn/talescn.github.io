import React from 'react';
import { socialLinks } from '../data/content';
import * as LucideIcons from 'lucide-react';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => {
        // Dynamically get the icon component from Lucide
        const IconComponent = LucideIcons[link.icon as keyof typeof LucideIcons];
        
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-primary-300 hover:text-white dark:hover:bg-primary-300 dark:hover:text-white transition-all duration-300"
            aria-label={link.name}
          >
            {IconComponent && <IconComponent size={18} />}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;