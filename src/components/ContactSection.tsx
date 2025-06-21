import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SocialLinks from './SocialLinks';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Thank you for your message! I\'ll get back to you soon.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-neutral-50 dark:bg-neutral-900">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-2">Get In <span className="text-primary-300">Touch</span></h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-soft h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg text-primary-300 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800 dark:text-white mb-1">Email</h4>
                    <a href="mailto:tales@example.com" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-300 dark:hover:text-primary-300 transition-colors">
                      tales@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg text-primary-300 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800 dark:text-white mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-300 dark:hover:text-primary-300 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg text-primary-300 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800 dark:text-white mb-1">Location</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      São Paulo, Brazil
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-neutral-800 dark:text-white mb-4">Follow Me</h4>
                <SocialLinks />
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-soft">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent resize-none"
                    placeholder="Let me know how I can help..."
                  ></textarea>
                </div>
                
                {submitMessage && (
                  <div className={`p-4 rounded-lg mb-6 ${
                    submitMessage.type === 'success' 
                      ? 'bg-success-50 text-success-700 dark:bg-success-700/20 dark:text-success-300' 
                      : 'bg-error-50 text-error-700 dark:bg-error-700/20 dark:text-error-300'
                  }`}>
                    {submitMessage.text}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <Send size={18} className="mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;