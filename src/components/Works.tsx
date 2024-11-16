import React, { useState } from 'react';
import { Eye, Grid, List, Search, X } from 'lucide-react';
import Image from 'next/image';

// Define interfaces for type safety
interface ProjectStats {
  views: number;
  likes: number;
  completion: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  stats: ProjectStats;
}

// Improved project data structure with proper typing
const projects: Project[] = [
  {
    id: 1,
    title: "Modern Website Design",
    category: "Design",
    description: "Clean and modern website design with focus on user experience.",
    image: "/images/webdisgn.jpg",
    stats: {
      views: 1200,
      likes: 340,
      completion: "100%"
    }
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Development",
    description: "Full-stack e-commerce solution with payment integration.",
    image: "/images/e-commerce.jpg",
    stats: {
      views: 890,
      likes: 220,
      completion: "95%"
    }
  },
  {
    id: 3,
    title: "Brand Identity Package",
    category: "Branding",
    description: "Complete brand identity including logo, colors, and guidelines.",
    image: "/images/brand.jpg",
    stats: {
      views: 750,
      likes: 180,
      completion: "100%"
    }
  },
  {
    id: 4,
    title: "Digital Marketing Campaign",
    category: "Marketing",
    description: "Comprehensive digital marketing strategy and execution.",
    image: "/images/digital-marketing.jpg",
    stats: {
      views: 980,
      likes: 290,
      completion: "85%"
    }
  },
  {
    id: 5,
    title: "UI/UX Design System",
    category: "Design",
    description: "Comprehensive design system for digital products.",
    image: "/images/ui-ux.jpg",
    stats: {
      views: 1500,
      likes: 420,
      completion: "100%"
    }
  },
  {
    id: 6,
    title: "Mobile App Development",
    category: "Development",
    description: "Cross-platform mobile application development.",
    image: "/images/mobiledev.jpg",
    stats: {
      views: 670,
      likes: 150,
      completion: "90%"
    }
  }
];

const categories = ["Everything", "Design", "Development", "Branding", "Marketing"] as const;
type Category = (typeof categories)[number];

interface CategoryLinkProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const CategoryLink: React.FC<CategoryLinkProps> = ({ text, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`relative px-6 py-3 text-lg font-medium transition-all duration-300 rounded-full
      ${isActive ? 'text-white bg-blue-600 shadow-lg' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`}
  >
    {text}
  </button>
);

interface ProjectCardProps {
  project: Project;
  viewMode: 'grid' | 'list';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, viewMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardClass = viewMode === 'grid' 
    ? 'w-full'
    : 'flex flex-col md:flex-row w-full gap-6';

  const imageClass = viewMode === 'grid'
    ? 'h-48'
    : 'h-48 md:h-64 md:w-1/2';

  return (
    <div
      className={`group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl ${cardClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative ${imageClass} overflow-hidden`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transform transition-transform duration-700 
            ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-500 flex items-center justify-center
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="px-6 py-3 bg-white text-gray-900 rounded-full flex items-center gap-2 transform transition-all duration-500 hover:bg-blue-600 hover:text-white">
            <Eye className="w-5 h-5" />
            <span>View Details</span>
          </button>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className={`p-6 flex flex-col justify-between ${viewMode === 'list' ? 'md:w-1/2' : ''}`}>
        <div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
        </div>
        
        <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              👁️ {project.stats.views}
            </span>
            <span className="flex items-center gap-1">
              ❤️ {project.stats.likes}
            </span>
          </div>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
            {project.stats.completion}
          </span>
        </div>
      </div>
    </div>
  );
};

const RecentWorks: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Everything");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const filteredProjects = projects.filter(project => 
    (activeCategory === "Everything" || project.category === activeCategory) &&
    (project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     project.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="works">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-4">
            Recent Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects and creative solutions that help businesses grow and succeed in the digital world.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <CategoryLink
                key={category}
                text={category}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <div className={`relative transition-all duration-300 ${isSearchVisible ? 'w-64' : 'w-10'}`}>
              <input
                type="text"
                placeholder="Search projects..."
                className={`w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-blue-600 transition-all duration-300
                  ${isSearchVisible ? 'opacity-100' : 'opacity-0'}`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                onClick={() => setIsSearchVisible(!isSearchVisible)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
              >
                {isSearchVisible ? <X size={20} /> : <Search size={20} />}
              </button>
            </div>
            
            <div className="flex gap-2 bg-gray-100 p-1 rounded-full">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className={`grid gap-8 transition-all duration-300
          ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              viewMode={viewMode}
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentWorks;