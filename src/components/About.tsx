import React from 'react';
import Image from 'next/image'; // Import komponen gambar untuk optimisasi
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faAddressCard, faPenRuler, faCode, faLightbulb, faComments, faFlask, faMugHot, faThumbsUp, faTrophy, faHandshake, faBug, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

//! Komponen ProgressBar dengan ikon dan warna khusus untuk setiap jenis skill
interface ProgressBarProps {
  label: string;
  value: string;
  color: string;
  icon: FontAwesomeIconProps['icon'];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, color, icon }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <FontAwesomeIcon icon={icon} className="text-yellow-400" /> {/* #* Ikon untuk skill */}
      <span className="text-lg font-medium dark:text-gray-300">{label}</span> {/* #* Label skill */}
    </div>
    <div className="w-1/2 bg-gray-300 rounded-full h-4"> {/* Bar skill */}
      <div className={`${color} rounded-full h-4`} style={{ width: value }}></div> {/* #* Level skill (nilai persentase) */}
    </div>
  </div>
);

//! Komponen ProgressItem untuk menampilkan statistik pribadi
interface ProgressItemProps {
  icon: FontAwesomeIconProps['icon'];
  value: string;
  label: string;
  count: number; 
}

const ProgressItem: React.FC<ProgressItemProps> = ({ icon, value, label, count }) => (
  <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300"> {/* #* Animasi hover untuk efek interaktif */}
    <FontAwesomeIcon icon={icon} className="text-4xl text-yellow-400" /> {/* #* Ikon statistik */}
    <div>
      <h2 className="text-2xl font-bold dark:text-slate-900">{value}</h2> {/* #* Nilai utama statistik */}
      <p className="text-lg font-bold text-gray-600 dark:text-gray-400">{label}</p> {/* #* Label statistik */}
      <p className="text-sm font-medium text-gray-400 dark:text-gray-400">{count}</p> {/* #* Counter detail */}
    </div>
  </div>
);

//! Komponen utama About untuk menampilkan profil pribadi
const About = () => (
  <section className="about bg-gray-50 dark:bg-gray-900 py-20" id="about"> {/* #* Section utama untuk halaman About */}
    <div className="container mx-auto px-6 mb-10 text-center md:text-left">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white inline-block px-6 py-3 rounded-md bg-red-600 relative">
        About Me
        <FontAwesomeIcon icon={faAddressCard} className="text-6xl text-slate-900 dark:text-gray-300 absolute top-0 -right-20" /> {/* #* Ikon judul About */}
      </h1>
    </div>

    <div className="container mx-auto px-6 flex flex-col md:flex-row gap-10 items-center md:items-start">
      <Image
        className="rounded-full shadow-lg bg-gray-400" // #! Styling gambar profil
        src="/images/face.png"
        alt="Face"
        width={192}
        height={192}
        priority
      />
      <div className="bg-white dark:bg-gray-800 box-border shadow-lg rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-medium leading-8 dark:text-gray-300">
            Hello, I&apos;m Muhammad Mahesa, a web developer and software engineer from Jakarta. I&apos;ve worked on various projects, focusing on efficient, quality digital solutions with clean code and high performance. Let&apos;s build something great together!
          </h2>
          <a href="#" title="My CV"> {/* #? Tombol untuk mengunduh CV */}
            <button className="shadow-md bg-red-600 text-white text-lg rounded-full py-4 px-8 mt-6 hover:bg-yellow-400 hover:scale-105 transition-transform duration-300">
              Download CV
            </button>
          </a>
        </div>

        <div className="space-y-6">
          {/* #* Progress bar untuk setiap skill */}
          <ProgressBar label="Design" value="50%" color="bg-red-600" icon={faPenRuler} />
          <ProgressBar label="Development" value="75%" color="bg-blue-500" icon={faCode} />
          <ProgressBar label="Problem Solving" value="35%" color="bg-violet-600" icon={faLightbulb} />
          <ProgressBar label="Communication" value="47%" color="bg-yellow-400" icon={faComments} />
        </div>
      </div>
    </div>

    <div className="container mx-auto px-6 my-14 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-14">
      {/* #* Statistik tambahan */}
      <ProgressItem icon={faFlask} value="235" label="Projects" count={209} />
      <ProgressItem icon={faMugHot} value="1,124" label="Cups of Coffee" count={1350} />
      <ProgressItem icon={faThumbsUp} value="897" label="Happy Users" count={345} />
      <ProgressItem icon={faTrophy} value="2" label="Awards" count={5} />
      <ProgressItem icon={faCode} value="400,000+" label="Lines of Code" count={129459} />
      <ProgressItem icon={faCalendarAlt} value="2" label="Experience" count={3} />
      <ProgressItem icon={faHandshake} value="30+" label="Collaborations" count={150} />
      <ProgressItem icon={faBug} value="400+" label="Bugs Fixed" count={400} />
    </div>
  </section>
);

export default About;
