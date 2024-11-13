import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-slate-950 to-slate-900 text-white sticky top-0 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between py-6 px-6">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-semibold text-yellow-400">
          M <span className="text-white">Mahesa</span>
          <span className="text-red-500">
            <i className="ml-1 fa-solid fa-terminal"></i>
          </span>
        </h1>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-bars'} text-3xl transition-transform duration-300`}></i>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-slate-900 md:bg-transparent md:block md:static md:w-auto transition-all duration-500 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-2 p-6 md:p-0 text-lg md:text-xl">
            {['Home', 'About', 'Service', 'Experience', 'Works', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  className="block md:inline-block py-2 px-4 hover:text-yellow-400 hover:scale-110 transform transition-transform duration-300"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
    