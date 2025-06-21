import React from 'react';
import { socialLinks } from '../data/content';
import { ExternalLink, Heart } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-800 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-300 mb-4">
              Tales<span className="text-neutral-800 dark:text-white">Noronha</span>
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Data scientist, analyst, and problem solver. Turning data into actionable insights.
            </p>
            <SocialLinks />
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-300 dark:hover:text-primary-300 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-300 dark:hover:text-primary-300 transition-colors duration-200">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-300 dark:hover:text-primary-300 transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-300 dark:hover:text-primary-300 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-white">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-300 dark:hover:text-primary-300 transition-colors duration-200 inline-flex items-center">
                  Blog <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-300 dark:hover:text-primary-300 transition-colors duration-200 inline-flex items-center">
                  Resume <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-300 dark:hover:text-primary-300 transition-colors duration-200 inline-flex items-center">
                  Data Science Resources <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              &copy; {currentYear} Tales Noronha. All rights reserved.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-2 md:mt-0 flex items-center">
              Built with <Heart size={14} className="mx-1 text-primary-300" /> and modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;