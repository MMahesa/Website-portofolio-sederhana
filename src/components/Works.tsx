import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const projects = [
  { id: 1, title: "Project 1", category: "Design", description: "A design project." },
  { id: 2, title: "Project 2", category: "Development", description: "A development project." },
  { id: 3, title: "Project 3", category: "Branding", description: "A branding project." },
  { id: 4, title: "Project 4", category: "Marketing", description: "A marketing project." },
  { id: 5, title: "Project 5", category: "Design", description: "Another design project." },
  { id: 6, title: "Project 6", category: "Development", description: "Another development project." },
];

const categories = ["Everything", "Design", "Development", "Branding", "Marketing"];

const RecentWorks = () => {
  const [activeCategory, setActiveCategory] = useState("Everything");
  interface CategoryLink {
    href: string;
    title: string;
    text: string;
    isActive: boolean;
    onClick: () => void;
  }
  const CategoryLink: React.FC <CategoryLink> = ({ href, title, text, isActive, onClick }) => (
    <a
      href={href}
      title={title}
      onClick={onClick}
      className={`relative inline-block text-gray-700 hover:text-red-600 transition-all duration-300 cursor-pointer ${
        isActive ? "text-red-600" : ""
      }`}
    >
      {text}
      <span
        className={`absolute -bottom-2 left-0 w-0 h-1 bg-red-600 transition-all duration-300 ${
          isActive ? "w-full" : "hover:w-full"
        }`}
      ></span>
    </a>
  );
  
  const filteredProjects =
  activeCategory === "Everything"
  ? projects
  : projects.filter((project) => project.category === activeCategory);
  
  return (
    <section className="works text-slate-950 text-2xl my-24" id="works">
      {/* Container for Title */}
      <div className="container flex flex-col items-center mx-auto px-6 my-14">
        <div className="flex items-center mb-8">
          <h1 className="text-4xl font-bold  bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg inline-block px-6 py-3 text-white box-border shadow-lg">
            Recent Works
          </h1>
          <FontAwesomeIcon icon={faFolderOpen} className="text-6xl text-slate-900 ml-4" />
        </div>

        {/* Links for Categories */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {categories.map((category) => (
            <CategoryLink
              key={category}
              href="#"
              title={category}
              text={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>



        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CategoryLink {
  href: string;
  title: string;
  text: string;
  isActive: string;
  onClick: () => void;
}

const CategoryLink: React.FC <CategoryLink> = ({ href, title, text, isActive, onClick }) => (
  <a
    href={href}
    title={title}
    onClick={onClick}
    className={`relative inline-block text-gray-700 hover:text-red-600 transition-all duration-300 cursor-pointer ${
      isActive ? "text-red-600" : ""
    }`}
  >
    {text}
    <span
      className={`absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all duration-300 ${
        isActive ? "w-full" : "hover:w-full"
      }`}
    ></span>
  </a>
);

interface ProjectCard {
  title: string;
  description: string;
}

const ProjectCard: React.FC <ProjectCard> = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  </div>
);

export default RecentWorks;