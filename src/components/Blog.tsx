import React, { useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';

// Definisi tipe untuk data blog
interface BlogPost {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

// Data blog posts untuk ditampilkan di halaman
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

// Definisi tipe props untuk BlogCard
interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

// Komponen BlogCard untuk menampilkan informasi masing-masing blog post
const BlogCard: React.FC<BlogCardProps> = ({ title, description, imageUrl, date }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Gambar blog post */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="group-hover:scale-105 transition-transform duration-500"
        />
        {/* Efek overlay saat hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Konten blog post */}
      <div className="p-6">
        {/* Tanggal dengan icon */}
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-4 h-4 text-blue-500" />
          <span className="text-sm text-gray-500">{date}</span>
        </div>

        {/* Judul blog post */}
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Deskripsi blog post */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tombol Read More dengan animasi hover */}
        <div className="flex items-center text-blue-500 font-medium text-sm group/button cursor-pointer">
          <span className="group-hover/button:mr-2 transition-all duration-300">Read More</span>
          <ArrowRight className="w-4 h-4 opacity-0 group-hover/button:opacity-100 -ml-4 group-hover/button:ml-0 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

// Komponen utama BlogSection untuk menampilkan seluruh daftar blog
const BlogSection: React.FC = () => {
  // Effect untuk mengatur scroll padding saat berpindah ke bagian blog
  useEffect(() => {
    document.documentElement.style.scrollPaddingTop = '80px'; // Mengatur padding atas saat scrolling
    return () => {
      document.documentElement.style.scrollPaddingTop = '0'; // Mengembalikan nilai saat komponen dibersihkan
    };
  }, []);

  return (
    <section className="pt-24 pb-24 bg-gray-50" id="blog">
      <div className="container mx-auto px-6">
        {/* Header Blog Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-purple-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg inline-block px-6 py-3 text-white">
              Latest Blog Posts
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay updated with the latest insights and articles in web development, design, and tech.
          </p>
        </div>

        {/* Grid untuk menampilkan daftar blog post */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapping setiap post ke komponen BlogCard */}
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="opacity-0 animate-fade-up"
              style={{
                animationDelay: `${index * 200}ms`, // Animasi dengan delay yang berbeda-beda
                animationFillMode: 'forwards'
              }}
            >
              <BlogCard
                title={post.title}
                description={post.description}
                imageUrl={post.imageUrl}
                date={post.date}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Styling global untuk animasi fade-up */}
      <style jsx global>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-up {
          animation: fade-up 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default BlogSection;
