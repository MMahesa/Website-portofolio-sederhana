import React, { useEffect } from 'react';
import { Briefcase, GraduationCap, Laptop, Rocket } from 'lucide-react';

const Experience = () => {
  // Effect untuk mengatur scroll padding
  useEffect(() => {
    // Menambahkan scroll-padding-top ke document.documentElement
    document.documentElement.style.scrollPaddingTop = '80px'; // Sesuaikan dengan tinggi navbar Anda
    
    return () => {
      // Cleanup saat component unmount
      document.documentElement.style.scrollPaddingTop = '0';
    };
  }, []);

  return (
    <section 
      className="text-slate-950 pt-24 pb-24" 
      id="experience"
    >
      <div className="container flex mx-auto px-6 mb-14 justify-center items-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg inline-block px-6 py-3 text-white">
          Experience
        </h1>
        <Rocket className="w-12 h-12 ml-4 text-purple-500" />
      </div>
      
      <div className="container mx-auto px-6 my-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education Column */}
        <div className="rounded-2xl bg-white shadow-lg p-8">
          <div className="relative">
            {/* Continuous vertical line that spans all items */}
            <div className="absolute left-5 top-0 w-0.5 h-full bg-gray-200" />
            
            <ExperienceItem
              Icon={GraduationCap}
              timePeriod="2019-present"
              title="Academic Degree"
              description="Pursued advanced studies in computer science with focus on artificial intelligence and machine learning."
              isLast={false}
            />
            <ExperienceItem
              Icon={Briefcase}
              timePeriod="2015-2019"
              title="Bachelor's Degree"
              description="Completed undergraduate studies in Software Engineering with honors, specializing in web development."
              isLast={false}
            />
            <ExperienceItem
              Icon={Laptop}
              timePeriod="2010-2015"
              title="High School Diploma"
              description="Graduated with distinction, participated in various programming competitions and tech clubs."
              isLast={true}
            />
          </div>
        </div>

        {/* Work Experience Column */}
        <div className="rounded-2xl bg-white shadow-lg p-8">
          <div className="relative">
            {/* Continuous vertical line that spans all items */}
            <div className="absolute left-5 top-0 w-0.5 h-full bg-gray-200" />
            
            <ExperienceItem
              Icon={Briefcase}
              timePeriod="2020-present"
              title="Senior Developer"
              description="Led development teams in creating enterprise-scale applications using modern web technologies."
              isLast={false}
            />
            <ExperienceItem
              Icon={Laptop}
              timePeriod="2017-2020"
              title="Full Stack Developer"
              description="Developed and maintained full-stack applications using React, Node.js, and various cloud services."
              isLast={false}
            />
            <ExperienceItem
              Icon={GraduationCap}
              timePeriod="2013-2017"
              title="Junior Developer"
              description="Started career journey with focus on front-end development and UI/UX design principles."
              isLast={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ExperienceItemProps {
  Icon: React.ElementType;
  timePeriod: string;
  title: string;
  description: string;
  isLast: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ Icon, timePeriod, title, description, isLast }) => {
  return (
    <div className="flex mb-8 group relative">
      <div className="relative mr-6 z-10">
        {/* Icon container with white background to cover the line */}
        <div className="p-2 rounded-lg bg-white ring-2 ring-blue-500 group-hover:ring-blue-600 transition-colors">
          <Icon className="w-6 h-6 text-blue-500 group-hover:text-blue-600" />
        </div>
        
        {/* Small decorative dot below icon */}
        {!isLast && (
          <div className="absolute -bottom-8 left-1/2 w-2 h-2 bg-blue-500 rounded-full -translate-x-1/2" />
        )}
      </div>
      
      <div className="flex-1">
        <span className="text-sm text-gray-600 mb-1 block">{timePeriod}</span>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Experience;