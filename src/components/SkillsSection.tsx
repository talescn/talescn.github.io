import React, { useState } from 'react';
import { skills } from '../data/content';
import { useTranslation } from 'react-i18next';
import * as LucideIcons from 'lucide-react';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { t } = useTranslation();
  
  const categories = [
    { id: 'all', label: t('All Skills') },
    { id: 'programming', label: t('Programming') },
    { id: 'data', label: t('Data Science') },
    { id: 'tools', label: t('Tools & Libraries') },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-2">{t('My')} <span className="text-primary-300">{t('Skills')}</span></h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            {t('A comprehensive overview of my technical and professional capabilities.')}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary-300 text-white'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill) => {
            const IconComponent = LucideIcons[skill.icon as keyof typeof LucideIcons];
            return (
              <div 
                key={skill.name}
                className="flex flex-col items-center p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-soft hover:shadow-soft-lg transition-all duration-300"
              >
                {IconComponent && (
                  <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-full text-primary-300 mb-3">
                    <IconComponent size={24} />
                  </div>
                )}
                <h3 className="text-center font-medium text-sm">{t(skill.name)}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;