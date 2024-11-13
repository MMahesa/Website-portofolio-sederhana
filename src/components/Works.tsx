import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import Image from 'next/image';

// Improved project data structure with images
// Menyimpan data projek dalam array dengan struktur yang lebih terorganisir
const projects = [
  {
    id: 1,
    title: "Modern Website Design",
    category: "Design",
    description: "Clean and modern website design with focus on user experience.",
    image: "/api/placeholder/600/400"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Development",
    description: "Full-stack e-commerce solution with payment integration.",
    image: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "Brand Identity Package",
    category: "Branding",
    description: "Complete brand identity including logo, colors, and guidelines.",
    image: "/api/placeholder/600/400"
  },
  {
    id: 4,
    title: "Digital Marketing Campaign",
    category: "Marketing",
    description: "Comprehensive digital marketing strategy and execution.",
    image: "/api/placeholder/600/400"
  },
  {
    id: 5,
    title: "UI/UX Design System",
    category: "Design",
    description: "Comprehensive design system for digital products.",
    image: "/api/placeholder/600/400"
  },
  {
    id: 6,
    title: "Mobile App Development",
    category: "Development",
    description: "Cross-platform mobile application development.",
    image: "/api/placeholder/600/400"
  }
];

// Kategori untuk filter projek
const categories = ["Everything", "Design", "Development", "Branding", "Marketing"];

// TypeScript interfaces
interface CategoryLinkProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

// Komponen CategoryLink untuk menampilkan kategori filter
const CategoryLink: React.FC<CategoryLinkProps> = ({ text, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 
      ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
  >
    {text}
    {/* Garis bawah yang akan muncul ketika kategori aktif */}
    <span
      className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300
        ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
    />
  </button>
);

// Komponen ProjectCard untuk menampilkan masing-masing projek
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, category }) => (
  <div className="group relative bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    <div className="relative h-48 overflow-hidden">
      {/* Menggunakan komponen Image dari Next.js untuk menampilkan gambar projek */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transform transition-transform duration-500 group-hover:scale-110"
        priority={false}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        {/* Tombol untuk melihat projek yang lebih detail */}
        <button className="px-6 py-2 bg-white text-gray-900 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <Eye className="w-5 h-5" />
          <span>View Project</span>
        </button>
      </div>
      <div className="absolute top-4 right-4">
        {/* Menampilkan kategori projek di pojok kanan atas */}
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const RecentWorks: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Everything");

  // Filter projek berdasarkan kategori yang dipilih
  const filteredProjects =
    activeCategory === "Everything"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50" id="works">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header section */}
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-4">
            Recent Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects and creative solutions that help businesses grow and succeed in the digital world.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <CategoryLink
              key={category}
              text={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>

        {/* Grid of filtered projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
