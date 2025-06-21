import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experiences, education } from '../data/content';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-2">Experience & <span className="text-primary-300">Education</span></h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            My professional journey and academic background.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg text-primary-300 mr-4">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            
            <div className="space-y-8 relative">
              {/* Vertical timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-100 dark:bg-primary-900/30"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-8 h-8 bg-white dark:bg-neutral-800 border-4 border-primary-300 rounded-full z-10"></div>
                  
                  <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-soft hover:shadow-soft-lg transition-all duration-300">
                    <div className="flex justify-between flex-wrap mb-2">
                      <h4 className="text-xl font-semibold text-neutral-800 dark:text-white">{exp.title}</h4>
                      <span className="text-sm font-medium px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-300 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-primary-300 font-medium mb-3">{exp.company}</p>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="text-xs font-medium px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg text-primary-300 mr-4">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-8 relative">
              {/* Vertical timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-100 dark:bg-primary-900/30"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-8 h-8 bg-white dark:bg-neutral-800 border-4 border-primary-300 rounded-full z-10"></div>
                  
                  <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-soft hover:shadow-soft-lg transition-all duration-300">
                    <div className="flex justify-between flex-wrap mb-2">
                      <h4 className="text-xl font-semibold text-neutral-800 dark:text-white">{edu.degree}</h4>
                      <span className="text-sm font-medium px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-300 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-primary-300 font-medium mb-3">{edu.institution}</p>
                    {edu.description && (
                      <p className="text-neutral-600 dark:text-neutral-300">{edu.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;