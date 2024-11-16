import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  UserCircle,
  Ruler,
  Code,
  Lightbulb,
  MessageCircle,
  BeakerIcon,
  Coffee,
  ThumbsUp,
  Trophy,
  UserPlus,
  Bug,
  Calendar,
  Download,
  Mail,
  Globe
} from 'lucide-react';

interface ProgressBarProps {
  label: string;
  value: string;
  color: string;
  icon: React.ReactNode;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, color, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3">
        <div className={`p-3 rounded-full ${color} bg-opacity-20`}>
          {icon}
        </div>
        <span className="text-lg font-medium dark:text-gray-300">{label}</span>
      </div>
      <div className="relative w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: value }}
          transition={{ duration: 1, type: "spring" }}
          className={`${color} rounded-full h-full`}
        />
        {isHovered && (
          <div className="absolute -top-8 left-4 bg-gray-900 text-white px-2 py-1 rounded text-sm">
            {value}
          </div>
        )}
      </div>
    </div>
  );
};

interface ProgressItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  count: number;
}

const ProgressItem: React.FC<ProgressItemProps> = ({ icon, value, label, count }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4">
        <div className="p-4 rounded-full bg-yellow-400 bg-opacity-20">
          {icon}
        </div>
        <div>
          <motion.h2
            className="text-2xl font-bold dark:text-white"
            animate={{ scale: isHovered ? 1.1 : 1 }}
          >
            {value}
          </motion.h2>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-400">{label}</p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            className="h-1 bg-yellow-400 mt-2 rounded"
          />
          <p className="text-sm mt-2 text-gray-500">{count} total</p>
        </div>
      </div>
    </motion.div>
  );
};

const About: React.FC = () => {
  const [, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('skills');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 min-h-screen" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-6"
      >
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl font-bold text-gray-900 dark:text-white inline-block"
          >
            About Me
            <div className="inline-block ml-4">
              <UserCircle className="w-8 h-8 text-red-600" />
            </div>
          </motion.h1>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="md:w-1/3"
          >
            <div className="relative group">
              <div className="rounded-2xl shadow-xl w-full overflow-hidden">
                <Image
                  className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                  src="/images/saya2.png"
                  alt="Profile"
                  width={400}
                  height={400}
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                <div className="space-x-4">
                  <a href="#" className="text-white hover:text-yellow-400">
                    <Mail className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white hover:text-yellow-400">
                    <Globe className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Muhammad Mahesa</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Web Developer & Software Engineer</p>
              <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full flex items-center justify-center mx-auto gap-2 transform transition-transform hover:scale-105">
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </motion.div>
          </motion.div>

          <div className="md:w-2/3 space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-slate-200 leading-relaxed">
                  Hello, I&apos;m Muhammad Mahesa, a passionate web developer and software engineer from Jakarta.
                  With a keen eye for detail and a love for clean code, I specialize in creating efficient,
                  high-performance digital solutions that make a difference.
                </p>
              </div>


              <div className="mt-8 flex gap-4">
                <button
                  className={`px-6 py-2 rounded-full ${activeTab === 'skills' ? 'bg-red-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                  onClick={() => setActiveTab('skills')}
                >
                  Skills
                </button>
                <button
                  className={`px-6 py-2 rounded-full ${activeTab === 'stats' ? 'bg-red-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                  onClick={() => setActiveTab('stats')}
                >
                  Statistics
                </button>
              </div>

              {activeTab === 'skills' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 space-y-4"
                >
                  <ProgressBar label="Design" value="50%" color="bg-red-600" icon={<Ruler className="w-5 h-5 text-red-600" />} />
                  <ProgressBar label="Development" value="75%" color="bg-blue-500" icon={<Code className="w-5 h-5 text-blue-500" />} />
                  <ProgressBar label="Problem Solving" value="35%" color="bg-violet-600" icon={<Lightbulb className="w-5 h-5 text-violet-600" />} />
                  <ProgressBar label="Communication" value="47%" color="bg-yellow-400" icon={<MessageCircle className="w-5 h-5 text-yellow-400" />} />
                </motion.div>
              )}
            </div>

            {activeTab === 'stats' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                <ProgressItem icon={<BeakerIcon className="w-6 h-6 text-yellow-400" />} value="235" label="Projects" count={209} />
                <ProgressItem icon={<Coffee className="w-6 h-6 text-yellow-400" />} value="1,124" label="Cups of Coffee" count={1350} />
                <ProgressItem icon={<ThumbsUp className="w-6 h-6 text-yellow-400" />} value="897" label="Happy Users" count={345} />
                <ProgressItem icon={<Trophy className="w-6 h-6 text-yellow-400" />} value="2" label="Awards" count={5} />
                <ProgressItem icon={<Code className="w-6 h-6 text-yellow-400" />} value="400,000+" label="Lines of Code" count={129459} />
                <ProgressItem icon={<Calendar className="w-6 h-6 text-yellow-400" />} value="2" label="Experience" count={3} />
                <ProgressItem icon={<UserPlus className="w-6 h-6 text-yellow-400" />} value="30+" label="Collaborations" count={150} />
                <ProgressItem icon={<Bug className="w-6 h-6 text-yellow-400" />} value="400+" label="Bugs Fixed" count={400} />
              </motion.div>
            )}

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;