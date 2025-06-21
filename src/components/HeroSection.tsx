import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import SocialLinks from './SocialLinks';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      heroRef.current.style.transform = `perspective(1000px) rotateY(${x * 2}deg) rotateX(${y * -2}deg)`;
    };
    
    const handleMouseLeave = () => {
      if (!heroRef.current) return;
      heroRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };
    
    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      hero.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
        hero.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center py-24 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-50 dark:opacity-20 z-0"></div>
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary-100 dark:bg-primary-900 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary-100 dark:bg-secondary-900 rounded-full filter blur-3xl opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-primary-300 font-medium mb-4 animate-in">Hello, I'm</p>
            <h1 className="mb-4 animate-in" style={{animationDelay: '0.1s'}}>
              Tales Noronha
              <span className="block text-2xl sm:text-3xl mt-2 text-neutral-600 dark:text-neutral-300 font-normal">
                Data Scientist & Analyst
              </span>
            </h1>
            
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 animate-in" style={{animationDelay: '0.2s'}}>
              Transforming raw data into meaningful insights and actionable strategies.
              Passionate about solving complex problems through data-driven approaches.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-in" style={{animationDelay: '0.3s'}}>
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#" className="btn-outline flex items-center justify-center">
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
            </div>
            
            <div className="animate-in" style={{animationDelay: '0.4s'}}>
              <SocialLinks />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div 
              ref={heroRef}
              className="w-full max-w-md relative transition-transform duration-300 ease-out"
              style={{transformStyle: 'preserve-3d'}}
            >
              <div className="relative w-full aspect-square bg-gradient-to-br from-primary-300 to-secondary-500 rounded-2xl p-1">
                <div className="absolute inset-[6px] bg-white dark:bg-neutral-800 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/5952647/pexels-photo-5952647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Tales Noronha" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="flex flex-col items-center text-neutral-500 dark:text-neutral-400 hover:text-primary-300 dark:hover:text-primary-300 transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;