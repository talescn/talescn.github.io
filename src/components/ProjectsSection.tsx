import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '../data/content';
import { useTranslation } from 'react-i18next';

const ProjectsSection: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { t } = useTranslation();

  const categories = [
    { id: 'all', label: t('All') },
    { id: 'data', label: t('Data') },
    { id: 'ai', label: t('AI') },
    { id: 'web', label: t('Web') },
    { id: 'automation', label: t('Automation') },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section bg-neutral-50 dark:bg-neutral-900">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-2">{t('My')} <span className="text-primary-300">{t('Projects')}</span></h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            {t('A showcase of my data science projects, analyses, and visualizations.')}
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-soft group hover:shadow-soft-lg transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-between items-center">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-white">
                  {t(project.title)}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3">
                  {t(project.description)}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.githubUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-300 hover:text-primary-400 font-medium transition-colors"
                >
                  {t('View Details')}
                  <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn-primary">
            {t('View All Projects')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;