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
              className="w-48 h-48 bg-yellow-300 rounded-full p-2"
              src="/images/face.png"
              alt="Face icon"
              width={192}
              height={192}
            />
          </div>

          {/* Profile Details */}
          <h1 className="text-4xl font-medium text-white mt-5">Muhamad Mahesa</h1>
          <h1 className="text-xl font-thin text-white mt-3">
            I&apos;m a Web Developer & Software Engineer
          </h1>

          {/* Call to Action Button */}
          <div className="button mt-6">
            <a href="#" title="Work with Me" aria-label="Work with Me">
              <button
                type="submit"
                title="Work with Me"
                className="bg-red-600 box-border rounded-full py-4 px-8 hover:bg-red-700 active:bg-red-800 focus:outline-none focus:ring focus:ring-red-500 hover:scale-110 hover:text-white transition-all duration-300 ease-in"
              >
                Work with Me
              </button>
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="scroll-down text-lg font-thin mt-8 animate-bounce">
            <h1>Scroll Down</h1>
            <FontAwesomeIcon icon={faArrowDownLong} className="mt-2" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
