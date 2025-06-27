import React, { useState } from 'react';
import { skills } from '../data/content';
import { useTranslation } from 'react-i18next';

const SkillIcon: React.FC<{ skill: any }> = ({ skill }) => {
  const getSkillIcon = (skillName: string) => {
    switch (skillName.toLowerCase()) {
      case 'python':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8">
            <path fill="#3776ab" d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
          </svg>
        );
      case 'sql':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8">
            <path fill="#336791" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 16.568C16.327 17.81 14.27 18.5 12 18.5s-4.327-.69-5.568-1.932C5.19 15.327 4.5 13.27 4.5 11s.69-4.327 1.932-5.568C7.673 4.19 9.73 3.5 12 3.5s4.327.69 5.568 1.932C18.81 6.673 19.5 8.73 19.5 11s-.69 4.327-1.932 5.568z"/>
            <path fill="#336791" d="M12 5c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
          </svg>
        );
      case 'nosql':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8">
            <path fill="#4DB33D" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
          </svg>
        );
      case 'machine learning':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8">
            <path fill="#FF6B6B" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            <circle fill="#4ECDC4" cx="12" cy="12" r="3"/>
          </svg>
        );
      case 'data visualization':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8">
            <path fill="#FF9500" d="M3 13h2v8H3v-8zm4-6h2v14H7V7zm4-6h2v20h-2V1zm4 8h2v12h-2V9zm4-4h2v16h-2V5z"/>
          </svg>
        );
      case 'statistical analysis':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8">
            <path fill="#8E44AD" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/>
          </svg>
        );
      case 'deep learning':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8">
            <path fill="#E74C3C" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            <circle fill="#3498DB" cx="12" cy="12" r="4"/>
            <circle fill="#F39C12" cx="12" cy="12" r="2"/>
          </svg>
        );
      case 'natural language processing':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8">
            <path fill="#2ECC71" d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        );
      case 'computer vision':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8">
            <path fill="#9B59B6" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
          </svg>
        );
      case 'pandas':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8">
            <path fill="#150458" d="M16.922 0h2.623v18.104h-2.623zm-4.126 12.94h2.623v2.57h-2.623zm0-7.037h2.623v5.446h-2.623zm-4.125 1.388h2.623v12.663h-2.623zm-4.125 4.836h2.623v5.25h-2.623zm0-11.111h2.623v2.847h-2.623z"/>
          </svg>
        );
      case 'power bi':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8">
            <path fill="#F2C811" d="M1.5 3v18l21-9-21-9z"/>
            <path fill="#FFAA44" d="M22.5 12L1.5 3v18l21-9z"/>
          </svg>
        );
      case 'git':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8">
            <path fill="#F1502F" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
          </svg>
        );
      case 'github':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8">
            <path fill="#181717" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'docker':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8">
            <path fill="#0db7ed" d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.033-1.01.099-.663-1.998-2.639-2.676-2.639-2.676-.464-.212-.981.146-.981.146s.194.793.194 1.877c0 1.084-.194 2.676-.194 2.676s.517.358.981.146c0 0 1.976-.678 2.639-2.676.334.066.672.099 1.01.099 1.282 0 1.889-.459 1.954-.51a.556.556 0 000-.671"/>
          </svg>
        );
      default:
        return (
          <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
            <span className="text-primary-300 font-bold text-sm">{skillName.charAt(0).toUpperCase()}</span>
          </div>
        );
    }
  };

  return (
    <div className="flex items-center justify-center mb-3">
      {getSkillIcon(skill.name)}
    </div>
  );
};

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
          {filteredSkills.map((skill) => (
            <div 
              key={skill.name}
              className="flex flex-col items-center p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-soft hover:shadow-soft-lg transition-all duration-300"
            >
              <SkillIcon skill={skill} />
              <h3 className="text-center font-medium text-sm">{t(skill.name)}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;