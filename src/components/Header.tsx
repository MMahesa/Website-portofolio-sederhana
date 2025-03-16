import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId : string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: 'home', icon: '🏠' },
    { id: 'about', icon: '👤' },
    { id: 'services', icon: '⚡' },
    { id: 'experience', icon: '💼' },
    { id: 'works', icon: '🎨' },
    { id: 'blog', icon: '📝' },
    { id: 'contact', icon: '📧' }
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-gradient-to-r from-slate-950 to-slate-900 py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-6">
        {/* Logo dengan animasi */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          <span className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            Ar
          </span>
          <span className="text-white hover:text-yellow-100 transition-colors duration-300">
            zeaa
          </span>
          <span className="text-red-500 inline-block hover:scale-110 transition-transform duration-300 ml-1">
            <span className="animate-pulse">{"</>"}</span>
          </span>
        </h1>

        {/* Menu Hamburger - hanya tampil di mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-10 h-10 focus:outline-none group"
            aria-label="Toggle Menu"
          >
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? 'rotate-[42deg] translate-x-px' : ''}`} />
                <div className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? '-rotate-[42deg] -translate-x-px' : ''}`} />
              </div>
            </div>
          </button>
        </div>

        {/* Menu Navigasi */}
        <nav className={`
          ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 lg:opacity-100'} 
          absolute top-full left-0 w-full lg:relative lg:top-0 lg:w-auto 
          bg-slate-900/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none
          transition-all duration-300 ease-in-out overflow-hidden lg:overflow-visible
          lg:block lg:max-h-screen
        `}>
          <ul className="flex flex-col lg:flex-row items-center gap-2 p-6 lg:p-0">
            {navItems.map(({ id, icon }) => (
              <li key={id} className="w-full lg:w-auto">
                <button
                  onClick={() => scrollToSection(id)}
                  className={`
                    group w-full lg:w-auto px-3 lg:px-4 py-2 text-base lg:text-lg
                    flex items-center justify-center lg:justify-start gap-2
                    hover:bg-slate-800/50 lg:hover:bg-transparent rounded-lg
                    transition-all duration-300 ease-in-out
                    ${activeSection === id ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}
                  `}
                >
                  <span className="inline-block group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </span>
                  <span className="capitalize group-hover:translate-x-1 transition-transform duration-300">
                    {id}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;