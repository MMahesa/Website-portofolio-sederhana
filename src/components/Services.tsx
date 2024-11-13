import React from 'react';
import Image from 'next/image';

const Services: React.FC = () => {
  return (
    <section className="service my-24" id="service">
      {/* Section Title */}
      <div className="container mx-auto text-center px-6 mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 box-border rounded-lg inline-block px-6 py-3 text-white shadow-lg relative">
          Services
        </h1>
        <i className="fa-solid fa-tools text-6xl text-black ml-4 absolute"></i>
      </div>

      {/* List of Services */}
      <div className="container mx-auto px-6 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card: App Development */}
          <ServiceCard
            bgColor="bg-gradient-to-br from-purple-600 to-indigo-500"
            title="App Development"
            description="Saya siap membantu Anda membuat aplikasi mobile dan web yang mudah digunakan dan efektif, dengan fokus pada desain dan kinerja terbaik."
            imgSrc="/assets/icons/appdev-icon.png"
            alt="App Development"
          />

          {/* Service Card: Web Development */}
          <ServiceCard
            bgColor="bg-gradient-to-br from-yellow-400 to-orange-400"
            title="Web Development"
            description="Saya akan membangun situs web responsif dan aman untuk Anda, memastikan kehadiran online Anda semakin kuat dan menarik."
            imgSrc="/assets/icons/webdev-icon.png"
            alt="Web Development"
          />

          {/* Service Card: API Development */}
          <ServiceCard
            bgColor="bg-gradient-to-br from-red-500 to-pink-500"
            title="API Development"
            description="Saya bisa mengembangkan API yang andal untuk memudahkan integrasi dan pertukaran data di aplikasi Anda."
            imgSrc="/assets/icons/apidev-icon.png"
            alt="API Development"
          />
        </div>
      </div>

      {/* Contact CTA */}
      <div className="container mx-auto px-6 flex justify-center mt-12">
        <h1 className="text-lg text-center">
          Looking for a custom job?{' '}
          <span className="text-blue-500 hover:text-blue-600">
            <a href="#contact" title="contact me">Click here</a> {/* Use #contact for scroll to contact section */}
          </span>{' '}
          to contact me! ♿👌
        </h1>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  bgColor: string;
  title: string;
  description: string;
  imgSrc: string;
  alt: string;
}

// Reusable Service Card component
const ServiceCard: React.FC<ServiceCardProps> = ({ bgColor, title, description, imgSrc, alt }) => {
  return (
    <div
      className={`${bgColor} text-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl flex flex-col items-center text-center`}
    >
      <Image 
        className="w-24 h-24 mb-6"
        src={imgSrc} 
        alt={alt} 
        width={96} 
        height={96} 
      />
      <h1 className="text-2xl font-semibold mb-3">{title}</h1>
      <p className="text-base">{description}</p>
    </div>
  );
};

export default Services;
