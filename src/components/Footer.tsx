import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"> {/* Grid responsif yang lebih luas */}
          
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
            <p className="text-gray-400 text-sm">
              I am dedicated to providing the best service with a focus on quality, reliability, and customer satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">About</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
            <p className="text-gray-400 text-sm mb-2">Jl. Ahmad Dhani, Tanggerang, Indonesia</p>
            <p className="text-gray-400 text-sm mb-2">Phone: (021) 1234-5678</p>
            <p className="text-gray-400 text-sm">Email: mmahesaa1124@gmail.com</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <FontAwesomeIcon icon={faFacebook} className="text-3xl" /> {/* Ukuran ikon yang lebih besar */}
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Muhamad Mahesa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
