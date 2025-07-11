import React from 'react';
import { TrendingUp } from 'lucide-react';
import { aboutMe } from '../data/content';
import { useTranslation } from 'react-i18next';

interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ emoji, title, description }) => (
  <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-soft hover:shadow-soft-lg transition-all duration-300 border-t-4 border-primary-300">
    <div className="flex items-center mb-4">
      <div className="text-3xl mr-4">
        {emoji}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-neutral-600 dark:text-neutral-300">{description}</p>
  </div>
);

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section bg-neutral-50 dark:bg-neutral-900">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-2">{t('About')} <span className="text-primary-300">{t('About Me').split(' ')[1]}</span></h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            {t('Get to know my background, skills, and what drives me as a data professional.')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          {/* New "My Data Journey" section */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-soft border-l-4 border-primary-300 mb-12">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg text-primary-300 mr-4">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-2xl font-bold">
                {t('My Data Journey')}
              </h3>
            </div>
            
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
              {t('journeyDescription')}
            </p>
            
            <a href="#projects" className="btn-primary">
              {t('View My Projects')}
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard 
            emoji="🔍"
            title={t('Problem Solver')}
            description={t('I approach technical and analytical challenges with creativity and structured thinking, seeking practical and innovative solutions that add real value to business.')}
          />
          <FeatureCard 
            emoji="🔧"
            title={t('Real Solutions Builder')}
            description={t('I integrate technical knowledge with real business demands, offering data solutions and simple automations that save time and effort.')}
          />
          <FeatureCard 
            emoji="📊"
            title={t('Data Storyteller')}
            description={t('I transform raw data into clear and objective visualizations, connecting analyses to real contexts — whether for internal reports, academic presentations or strategic insights.')}
          />
          <FeatureCard 
            emoji="🚀"
            title={t('Continuous Learner')}
            description={t('Dedicated student in the data field, I am always seeking new knowledge, currently focused on artificial intelligence, data modeling and distributed solutions with Docker.')}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;