import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/content';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <a href="#home" className="text-2xl font-bold text-primary-300">
          Tales<span className="text-neutral-800 dark:text-white">Noronha</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-neutral-700 dark:text-neutral-300 hover:text-primary-300 dark:hover:text-primary-300 font-medium transition-colors duration-200 hover-underline"
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle />
          <ThemeToggle />
          <a href="#contact" className="btn-primary">
            {t('Contact Me')}
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="text-neutral-800 dark:text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-neutral-900 z-40 flex flex-col pt-20 pb-6 px-6 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex-1">
          <ul className="space-y-6 text-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-xl font-medium text-neutral-800 dark:text-white hover:text-primary-300 dark:hover:text-primary-300 block py-2"
                  onClick={closeMenu}
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="btn-primary w-full"
            onClick={closeMenu}
          >
            {t('Contact Me')}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;