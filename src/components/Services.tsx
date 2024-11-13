import React, { useEffect } from 'react';
import { Wrench, AppWindow, Globe2, Database } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    // Handle scroll to section when URL has hash
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#services') {
        const element = document.getElementById('services');
        if (element) {
          // Add a slight delay to ensure smooth scroll after page load
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100); // Menambahkan sedikit delay untuk smooth scroll
        }
      }
    };

    // Handle initial load
    handleHash();

    // Add listener for hash changes
    window.addEventListener('hashchange', handleHash); // Menambahkan event listener untuk hash change
    return () => window.removeEventListener('hashchange', handleHash); // Membersihkan listener saat komponen di-unmount
  }, []);

  return (
    <section className="py-24 scroll-mt-16" id="service">
      {/* Section Title */}
      <div className="container mx-auto text-center px-6 mb-12 relative">
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg inline-block px-6 py-3 text-white shadow-lg">
            Services {/* Judul bagian layanan */}
          </h1>
          <Wrench className="w-12 h-12 text-purple-500" /> {/* Ikon alat */}
        </div>
      </div>

      {/* List of Services */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Service Card: App Development */}
          <ServiceCard
            bgColor="from-purple-600 to-indigo-500" // Warna gradien untuk latar belakang
            title="App Development" // Judul layanan
            description="Saya siap membantu Anda membuat aplikasi mobile dan web yang mudah digunakan dan efektif, dengan fokus pada desain dan kinerja terbaik."
            Icon={AppWindow} // Ikon untuk aplikasi
          />

          {/* Service Card: Web Development */}
          <ServiceCard
            bgColor="from-yellow-400 to-orange-400" // Warna gradien untuk latar belakang
            title="Web Development" // Judul layanan
            description="Saya akan membangun situs web responsif dan aman untuk Anda, memastikan kehadiran online Anda semakin kuat dan menarik."
            Icon={Globe2} // Ikon untuk pengembangan web
          />

          {/* Service Card: API Development */}
          <ServiceCard
            bgColor="from-red-500 to-pink-500" // Warna gradien untuk latar belakang
            title="API Development" // Judul layanan
            description="Saya bisa mengembangkan API yang andal untuk memudahkan integrasi dan pertukaran data di aplikasi Anda."
            Icon={Database} // Ikon untuk pengembangan API
          />
        </div>
      </div>

      {/* Contact CTA */}
      <div className="container mx-auto px-6 flex justify-center mt-12">
        <div className="text-lg text-center">
          Looking for a custom job?{' '}
          <a
            href="#contact" // Tautan untuk bagian kontak
            className="text-blue-500 hover:text-blue-600 hover:underline font-medium"
            onClick={(e) => {
              e.preventDefault(); // Mencegah tautan default
              const contactSection = document.getElementById('contact'); // Mencari elemen bagian kontak
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Gulir ke bagian kontak dengan smooth scroll
              }
            }}
          >
            Click here
          </a>{' '}
          to contact me! 👋
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  bgColor: string; // Properti warna gradien untuk latar belakang
  title: string; // Judul layanan
  description: string; // Deskripsi layanan
  Icon: React.ElementType; // Komponen ikon yang digunakan
}

// Komponen untuk menampilkan kartu layanan
const ServiceCard: React.FC<ServiceCardProps> = ({ bgColor, title, description, Icon }) => {
  return (
    <div className={`bg-gradient-to-br ${bgColor} text-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl flex flex-col items-center text-center group`}>
      <div className="bg-white/20 p-4 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-12 h-12" /> {/* Menampilkan ikon yang diterima sebagai properti */}
      </div>
      <h2 className="text-2xl font-semibold mb-3">{title}</h2> {/* Judul layanan */}
      <p className="text-base leading-relaxed">{description}</p> {/* Deskripsi layanan */}
    </div>
  );
};

export default Services;
