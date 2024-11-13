import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
  return (
    <main className="text-white font-rubik">
      {/* Home Section */}
      <section className="home flex items-center justify-center text-center" id="home">
        <div className="container z-10 mx-auto">

          {/* Profile Image */}
          <div className="mb-6 flex justify-center">
            <Image
              className="w-48 h-48 bg-yellow-300 rounded-full p-2" // Menambahkan gambar profil dengan border dan padding
              src="/images/face.png" // Sumber gambar profil
              alt="Face icon" // Alt text untuk gambar profil
              width={192} // Lebar gambar
              height={192} // Tinggi gambar
            />
          </div>

          {/* Profile Details */}
          <h1 className="text-4xl font-medium text-white mt-5">Muhamad Mahesa</h1> {/* Nama dengan ukuran font besar */}
          <h1 className="text-xl font-thin text-white mt-3">
            I&apos;m a Web Developer & Software Engineer {/* Deskripsi pekerjaan dengan ukuran font lebih kecil */}
          </h1>

          {/* Call to Action Button */}
          <div className="button mt-6">
            <a href="#" title="Work with Me" aria-label="Work with Me"> {/* Link untuk aksi kerja */}
              <button
                type="submit"
                title="Work with Me"
                className="bg-red-600 box-border rounded-full py-4 px-8 hover:bg-yellow-400 active:bg-red-800 focus:outline-none focus:ring focus:ring-red-500 hover:scale-105 hover:text-white transition-all duration-200"
                // Tombol yang memiliki efek hover dan fokus
              >
                Work with Me
              </button>
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="scroll-down text-lg font-thin mt-8 animate-bounce">
            <h1>Scroll Down</h1> {/* Instruksi untuk menggulir ke bawah */}
            <FontAwesomeIcon icon={faArrowDownLong} className="mt-2" /> {/* Ikon panah turun */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
