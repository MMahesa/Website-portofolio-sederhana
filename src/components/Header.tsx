import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Menyimpan status menu hamburger (terbuka/tertutup)
  const [scrolled, setScrolled] = useState(false); // Menyimpan status scroll untuk efek latar belakang
  const [activeSection, setActiveSection] = useState('home'); // Menyimpan section aktif untuk navigasi

  // Effect untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Jika scroll lebih dari 50px, aktifkan efek latar belakang
    };

    window.addEventListener('scroll', handleScroll); // Menambahkan event listener untuk scroll
    return () => window.removeEventListener('scroll', handleScroll); // Menghapus event listener saat komponen dibersihkan
  }, []);

  // Fungsi untuk scroll ke section tertentu
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId); // Mendapatkan element berdasarkan id
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Melakukan scroll ke elemen dengan efek smooth
      setIsOpen(false); // Menutup menu hamburger setelah scroll
      setActiveSection(sectionId); // Menandai section yang sedang aktif
    }
  };

  // Daftar item navigasi
  const navItems = [
    { id: 'home', icon: '🏠' }, 
    { id: 'about', icon: '👤' },
    { id: 'service', icon: '⚡' },
    { id: 'experience', icon: '💼' },
    { id: 'works', icon: '🎨' },
    { id: 'blog', icon: '📝' },
    { id: 'contact', icon: '📧' }
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-lg py-2' // Jika scroll, ubah background dengan blur dan shadow
          : 'bg-gradient-to-r from-slate-950 to-slate-900 py-6' // Background gradient saat tidak di-scroll
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        
        {/* Logo dengan animasi */}
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            M
          </span>
          <span className="text-white hover:text-yellow-100 transition-colors duration-300">
            Mahesa
          </span>
          <span className="text-red-500 inline-block hover:scale-110 transition-transform duration-300 ml-1">
            <span className="animate-pulse">{"</>"}</span> {/* Animasi untuk logo */}
          </span>
        </h1>

        {/* Menu Hamburger untuk tampilan mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)} // Toggle status menu
            className="relative w-10 h-10 focus:outline-none group"
            aria-label="Toggle Menu"
          >
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                {/* Ikon menu hamburger yang berubah saat dibuka */}
                <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? 'rotate-[42deg] translate-x-px' : ''}`} />
                <div className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? '-rotate-[42deg] -translate-x-px' : ''}`} />
              </div>
            </div>
          </button>
        </div>

        {/* Menu Navigasi */}
        <nav className={`
          ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 md:opacity-100'} 
          absolute top-full left-0 w-full md:relative md:top-0 md:w-auto 
          bg-slate-900/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none
          transition-all duration-300 ease-in-out overflow-hidden md:overflow-visible
          md:block md:max-h-screen
        `}>
          <ul className="flex flex-col md:flex-row items-center gap-2 p-6 md:p-0">
            {navItems.map(({ id, icon }) => (
              <li key={id} className="w-full md:w-auto">
                <button
                  onClick={() => scrollToSection(id)} // Scroll ke section sesuai id
                  className={`
                    group w-full md:w-auto px-4 py-2 text-lg
                    flex items-center justify-center md:justify-start gap-2
                    hover:bg-slate-800/50 md:hover:bg-transparent rounded-lg
                    transition-all duration-300 ease-in-out
                    ${activeSection === id ? 'text-yellow-400' : 'text-white hover:text-yellow-400'} 
                    // Menandai item aktif dengan warna kuning
                  `}
                >
                  <span className="inline-block group-hover:scale-110 transition-transform duration-300">
                    {icon} {/* Menampilkan ikon */}
                  </span>
                  <span className="capitalize group-hover:translate-x-1 transition-transform duration-300">
                    {id} {/* Menampilkan nama section */}
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
