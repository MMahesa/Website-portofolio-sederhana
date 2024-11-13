import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faLaptopCode, faRocket } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <section className="experience text-slate-950 text-2xl my-24" id="experience">
      <div className="container flex mx-auto px-6 my-14 justify-center">
        <h1 className="text-4xl font-bold  bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg inline-block px-6 py-3 text-white box-border">
          Experience
        </h1>
        <FontAwesomeIcon icon={faRocket} className="text-6xl ml-4 h-11" />
      </div>
      <div className="container mx-auto px-6 my-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* First Column */}
        <div className="experience-column box-border rounded-2xl bg-white shadow-small p-8">
          <ExperienceItem
            icon={faBriefcase}
            timePeriod="2019-present"
            title="Academic Degree"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, delectus?"
          />
          <ExperienceItem
            icon={faGraduationCap}
            timePeriod="2015-2019"
            title="Bachelor's Degree"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, delectus?"
          />
          <ExperienceItem
            icon={faLaptopCode}
            timePeriod="2010-2015"
            title="High School Diploma"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, delectus?"
          />
        </div>

        {/* Second Column */}
        <div className="experience-column box-border rounded-2xl bg-white shadow-small p-8">
          <ExperienceItem
            icon={faBriefcase}
            timePeriod="2020-present"
            title="Master's Degree"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, delectus?"
          />
          <ExperienceItem
            icon={faGraduationCap}
            timePeriod="2017-2020"
            title="Bachelor's Degree"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, delectus?"
          />
          <ExperienceItem
            icon={faLaptopCode}
            timePeriod="2013-2017"
            title="Associate's Degree"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, delectus?"
          />
        </div>
      </div>
    </section>
  );
};

interface ExperienceItem {
  icon: FontAwesomeIconProps['icon']
  timePeriod: string;
  title: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItem> = ({ icon, timePeriod, title, description }) => {
  return (
    <div className="experience-item flex mb-2">
      <div className="icon-container relative mr-4">
        <FontAwesomeIcon icon={icon} className="text-3xl text-cyan-500" />
        <span className="vertical-line"></span>
      </div>
      <div className="text-container">
        <p className="text-base">{timePeriod}</p>
        <p className="text-xl font-bold">{title}</p>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

export default Experience;
