import React from 'react';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development",
    description:
      "Explore the latest trends and technologies that are shaping the future of web development.",
    imageUrl: "/images/webdesign.jpg",
    date: "September 10, 2024",
  },
  {
    id: 2,
    title: "Designing for the Modern Web",
    description:
      "Learn about the key principles for designing websites that are both beautiful and functional.",
    imageUrl: "/images/webcode.jpg",
    date: "August 22, 2024",
  },
  {
    id: 3,
    title: "Building Scalable Applications",
    description:
      "A guide to building scalable web applications that can handle growing traffic and users.",
    imageUrl: "/images/app.jpg",
    date: "July 18, 2024",
  },
];

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, imageUrl, date }) => {
  return (
    <div className="blog-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill 
          style={{ objectFit: 'cover' }} 
          className="transform hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <p className="text-gray-500 text-xs">{date}</p>
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  return (
    <section className="blog-section text-slate-950 text-2xl my-24" id="blog">
      <div className="container mx-auto px-6 my-14">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold  bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg inline-block px-6 py-3 text-white box-border shadow-lg">
            Latest Blog Posts
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            Stay updated with the latest insights and articles in web development, design, and tech.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
