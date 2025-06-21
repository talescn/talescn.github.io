import React from 'react';
import { Lightbulb, Code, LineChart, Trophy } from 'lucide-react';
import { aboutMe } from '../data/content';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-soft hover:shadow-soft-lg transition-all duration-300 border-t-4 border-primary-300">
    <div className="flex items-center mb-4">
      <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg text-primary-300">
        {icon}
      </div>
      <h3 className="ml-4 text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-neutral-600 dark:text-neutral-300">{description}</p>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section bg-neutral-50 dark:bg-neutral-900">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-2">About <span className="text-primary-300">Me</span></h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Get to know my background, skills, and what drives me as a data professional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-300 to-secondary-500 rounded-xl opacity-30 blur-lg"></div>
              <div className="relative overflow-hidden rounded-xl shadow-soft">
                <img 
                  src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Tales Noronha working with data" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-lg text-primary-300 font-medium mb-4">Who I Am</p>
            <h3 className="text-3xl font-bold mb-6">
              A Passionate <span className="text-primary-300">Data Scientist</span> & Analytical Thinker
            </h3>
            
            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
              {aboutMe.intro}
            </p>
            
            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
              {aboutMe.description}
            </p>
            
            <p className="text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed">
              {aboutMe.mission}
            </p>
            
            <a href="#contact" className="btn-primary">
              Let's Connect
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Lightbulb size={24} />}
            title="Problem Solver"
            description="I approach complex data challenges with creativity and analytical thinking to find innovative solutions."
          />
          <FeatureCard 
            icon={<Code size={24} />}
            title="Technical Expert"
            description="Proficient in Python, R, SQL, and various data science tools and libraries for effective data manipulation."
          />
          <FeatureCard 
            icon={<LineChart size={24} />}
            title="Data Storyteller"
            description="I transform complex data into clear, compelling visualizations and narratives that drive decision-making."
          />
          <FeatureCard 
            icon={<Trophy size={24} />}
            title="Continuous Learner"
            description="Always expanding my knowledge in the rapidly evolving field of data science and machine learning."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;