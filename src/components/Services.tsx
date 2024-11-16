import React, { useEffect, useState } from 'react';
import { Wrench, AppWindow, Globe2, Database, Code2, Cloud, Shield, ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  bgColor: string;           
  title: string;            
  description: string;
  Icon: React.ElementType;
  features: string[];        
}

// Define the ServiceCard component with the interface
const ServiceCard: React.FC<ServiceCardProps> = ({ bgColor, title, description, Icon, features }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-gradient-to-br ${bgColor} text-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl group relative overflow-hidden h-full`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Pattern - Adjusted for better mobile visibility */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:16px_16px] sm:bg-[length:20px_20px]" />
      </div>

      <div className="relative">
        {/* Icon Container - Responsive sizing */}
        <div className="bg-white/20 p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg md:rounded-xl mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm w-fit">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
        </div>

        {/* Content - Improved text sizing for mobile */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 md:mb-3">{title}</h2>
        <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 md:mb-6">{description}</p>

        {/* Features List - Better spacing for mobile */}
        <ul className="space-y-1.5 sm:space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`flex items-center gap-1.5 sm:gap-2 text-xs md:text-sm transform-gpu transition-all duration-300 ${
                isHovered ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


const Services = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);

      const element = document.getElementById('services');
      if (element) {
        const position = element.getBoundingClientRect();
        const threshold = window.innerHeight * 0.2;
        if (position.top < window.innerHeight - threshold) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      category: 'development',
      title: "App Development",
      description: "Create stunning mobile and web applications with cutting-edge technology and user-centric design principles.",
      Icon: AppWindow,
      bgColor: "from-purple-600 to-indigo-500",
      features: ["Native & Cross-platform", "UI/UX Design", "Performance Optimization"]
    },
    {
      category: 'development',
      title: "Web Development",
      description: "Build responsive and dynamic websites that engage users and drive results for your business.",
      Icon: Globe2,
      bgColor: "from-yellow-400 to-orange-400",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading"]
    },
    {
      category: 'backend',
      title: "API Development",
      description: "Design and implement robust APIs that power your applications with reliable data integration.",
      Icon: Database,
      bgColor: "from-red-500 to-pink-500",
      features: ["RESTful & GraphQL", "Authentication", "Documentation"]
    },
    {
      category: 'development',
      title: "Code Review",
      description: "Get expert review and optimization suggestions for your existing codebase.",
      Icon: Code2,
      bgColor: "from-green-500 to-teal-500",
      features: ["Best Practices", "Security Check", "Performance Tips"]
    },
    {
      category: 'infrastructure',
      title: "Cloud Solutions",
      description: "Deploy and manage your applications in the cloud with optimal performance and scaling.",
      Icon: Cloud,
      bgColor: "from-blue-400 to-cyan-500",
      features: ["AWS & Azure", "Auto-scaling", "Monitoring"]
    },
    {
      category: 'security',
      title: "Security Services",
      description: "Protect your applications and data with comprehensive security measures.",
      Icon: Shield,
      bgColor: "from-violet-500 to-purple-500",
      features: ["Penetration Testing", "Security Audit", "Encryption"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'development', name: 'Development' },
    { id: 'backend', name: 'Backend' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'security', name: 'Security' }
  ];

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(service => service.category === activeTab);

  return (
    <section className="py-8 sm:py-16 md:py-24 scroll-mt-16 bg-gradient-to-b from-gray-50 to-white relative" id="services">
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Section Title - Improved mobile spacing */}
      <div className="container mx-auto text-center px-3 sm:px-4 md:px-6 mb-8 sm:mb-12 md:mb-16">
        <div className="transform-gpu translate-y-0 opacity-100 transition duration-700 ease-out">
          <div className="relative inline-block">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-white shadow-lg">
              Services
            </h1>
            <div className="absolute -right-6 sm:-right-8 md:-right-16 top-1 sm:top-2 md:top-4 animate-bounce">
              <Wrench className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Category Tabs - Improved mobile scrolling */}
        <div className="mt-6 sm:mt-8 md:mt-12 overflow-x-auto scrollbar-hide pb-2 sm:pb-4 md:pb-0 -mx-3 px-3 sm:mx-0 md:px-0">
          <div className="flex whitespace-nowrap md:flex-wrap justify-start md:justify-center gap-2 sm:gap-3 md:gap-4 min-w-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-base transition-all duration-300 flex-shrink-0 ${
                  activeTab === category.id
                    ? 'bg-blue-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid - Adjusted grid columns for mobile */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {filteredServices.map((service, index) => (
            <div
              key={service.title}
              className={`transform-gpu transition-all duration-700 ease-out ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA - Better mobile spacing */}
      <div className={`container mx-auto px-3 sm:px-4 md:px-6 mt-8 sm:mt-12 md:mt-16 transform-gpu transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 max-w-4xl mx-auto text-center text-white shadow-xl">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">Ready to Start Your Project?</h3>
          <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6">Let&apos;s discuss how I can help bring your ideas to life!</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-white text-blue-500 px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-blue-50 transition-colors duration-300"
          >
            Contact Me
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;