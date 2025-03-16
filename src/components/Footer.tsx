import React, { useState, useEffect } from 'react';
import { ChevronUp, Mail, MapPin, Phone, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  interface handleSubmit {
    e: () => void;
  }

  // Handle newsletter submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowThankYou(true);
    setEmail(''); // Reset email input setelah submit
    setTimeout(() => setShowThankYou(false), 3000); // Menghilangkan pesan "Thank You" setelah 3 detik
  };

  // Social media data dengan icons dari Lucide
  const socialMedia = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700', 
      url: 'https://web.facebook.com/muhamadmahesa.mahesa.1' 
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      bgColor: 'bg-sky-500',
      hoverColor: 'hover:bg-sky-600', 
      url: 'https://x.com/Zeanlyx196255' 
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      bgColor: 'bg-pink-600',
      hoverColor: 'hover:bg-pink-700', 
      url: 'https://www.instagram.com/vvwxyesa_/' 
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      bgColor: 'bg-blue-700',
      hoverColor: 'hover:bg-blue-800', 
      url: 'https://linkedin.com/in/m-mahesa-882918338'   
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-sky-500 to-violet-500 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Stay Updated</h3>
              <p className="text-white/80">Get the latest updates and exclusive offers</p>
            </div>
            <form onSubmit={handleSubmit} className="flex w-full md:w-96 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-l-lg focus:outline-none text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-gray-900 px-6 rounded-r-lg hover:bg-gray-800 transition-colors duration-300 flex items-center"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
          {showThankYou && (
            <div className="absolute top-0 right-0 m-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg animate-fade-in-down">
              Thanks for subscribing!
            </div>
          )}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold relative inline-block after:content-[''] after:absolute after:w-12 after:h-1 after:bg-gradient-to-r from-sky-500 to-violet-500 after:left-0 after:-bottom-2">
              About Me
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I am a passionate developer dedicated to creating innovative solutions with a focus on user experience and performance.
            </p>
            <div className="pt-4">
              <Image
                src="/images/leafylux.svg"
                alt="Company Logo"
                className="rounded-lg hover:opacity-80 transition-opacity duration-300"
                width={192}
                height={192}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold relative inline-block after:content-[''] after:absolute after:w-12 after:h-1 after:bg-gradient-to-r from-sky-500 to-violet-500 after:left-0 after:-bottom-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-sky-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-violet-500 rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold relative inline-block after:content-[''] after:absolute after:w-12 after:h-1 after:bg-gradient-to-r from-sky-500 to-violet-500 after:left-0 after:-bottom-2">
              Contact Me
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sky-500 mt-1" />
                <p className="text-gray-400">Jl. Pasir - Putih, Depok, Indonesia</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sky-500" />
                <p className="text-gray-400">(+62) 0898-9678-614 </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sky-500" />
                <p className="text-gray-400">zeze7x@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Social Media with New Icons */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold relative inline-block after:content-[''] after:absolute after:w-12 after:h-1 after:bg-gradient-to-r from-sky-500 to-violet-500 after:left-0 after:-bottom-2">
              Social Media
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialMedia.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`${social.bgColor} ${social.hoverColor} p-3 flex items-center justify-center gap-2 rounded-lg text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Arzeaa. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-sky-500 text-sm transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-8 bg-red-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-red-700 focus:outline-none ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;