import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  GraduationCap,
  Laptop,
  Rocket,
  ChevronRight,
  Share2,
  Download,
  Eye,
  ThumbsUp,
  LucideIcon
} from 'lucide-react';
import {
  Alert,
  AlertDescription,
  AlertTitle
} from '@/components/ui/alert';

interface ExperienceItem {
  id: string;
  Icon: LucideIcon;
  timePeriod: string;
  title: string;
  description: string;
  details: string[];
  skills: string[];
}

interface ExperienceItemProps extends ExperienceItem {
  isLast: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  onShare: () => void;
  onDownload: () => void;
  likes: number;
  onLike: () => void;
}

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'work'>('education');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [likes, setLikes] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    // Add scroll padding for smooth scrolling on mobile
    document.documentElement.style.scrollPaddingTop = '80px';
    return () => {
      document.documentElement.style.scrollPaddingTop = '0';
    };
  }, []);

  const handleShare = (title: string): void => {
    setAlertMessage(`Shared ${title} experience!`);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleDownload = (title: string): void => {
    setAlertMessage(`Downloaded ${title} certificate!`);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleLike = (id: string): void => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const educationData: ExperienceItem[] = [
    {
      id: 'edu1',
      Icon: GraduationCap,
      timePeriod: "2015 - 2018",
      title: "Junior High School",
      description: "Studied foundational knowledge and self-development through academic and extracurricular activities.",
      details: [
        "Learned basic subjects such as Mathematics, Indonesian Language, and Science.",
        "Active in extracurricular activities.",
        "Participated in quiz competitions.",
        "Developed communication and teamwork skills."
      ],
      skills: ["Critical Thinking", "Data Analysis", "Research"]
    },
    {
      id: 'edu2',
      Icon: Briefcase,
      timePeriod: "2018 - 2021",
      title: "Senior High School",
      description: "Gained a deeper understanding of science and prepared for higher education.",
      details: [
        "Advanced understanding of Mathematics and Physics.",
        "Active in OSIS (student council) and social activities.",
        "Mentored younger students.",
        "Participated in intensive computer studies program."
      ],
      skills: ["Programming", "Leadership", "Problem Solving"]
    },
    {
      id: 'edu3',
      Icon: Laptop,
      timePeriod: "2024 - Present",
      title: "Informatics Engineering Student",
      description: "Studied programming, advanced mathematics, and system development for a career in technology.",
      details: [
        "Enrolled in advanced courses in programming and algorithms.",
        "Active in study groups and collaborative projects.",
        "Member of a programming community.",
        "Participated in university-level coding competitions."
      ],
      skills: ["Mathematics", "Public Speaking", "Leadership"]
    }
  ];

  const workData: ExperienceItem[] = [
    {
      id: 'work3',
      Icon: GraduationCap,
      timePeriod: "2021",
      title: "School Technology Project Team Member",
      description: "Collaborated in a school project team to build a simple application.",
      details: [
        "Developed a web-based application for school needs.",
        "Handled and fixed application bugs.",
        "Worked with other team members to complete tasks.",
        "Performed regular code reviews."
      ],
      skills: ["Frontend Development", "Debugging", "Collaboration"]
    },
    {
      id: 'work2',
      Icon: Laptop,
      timePeriod: "2021 - 2023",
      title: "Freelance Developer",
      description: "Freelance developer experience in various projects.",
      details: [
        "Built simple applications for e-commerce purposes.",
        "Improved system performance and ensured smooth operation.",
        "Documented the project development process.",
        "Collaborated with clients to achieve project goals."
      ],
      skills: ["Full Stack Development", "DevOps", "Documentation"]
    },
    {
      id: 'work1',
      Icon: Briefcase,
      timePeriod: "2024 - Present",
      title: "Software & Web Developer at PT Buah Bibir Indonesia",
      description: "Developing and optimizing software and web applications for business solutions.",
      details: [
        "Building and maintaining scalable web applications.",
        "Developing software solutions to enhance business processes.",
        "Ensuring application security and performance optimization.",
        "Collaborating with designers and developers to improve user experience.",
        "Conducting code reviews and implementing best practices."
      ],
      skills: ["Software Development", "Web Development", "Performance Optimization", "Code Review", "UI/UX Collaboration"]
    }

  ];



  return (
    <section className="text-slate-950 pt-24 pb-24 min-h-screen bg-gradient-to-b from-white to-blue-50" id="experience">
      {showAlert && (
        <div className="fixed top-4 right-4 z-50 sm:top-8 sm:right-8">
          <Alert>
            <AlertTitle>Notification</AlertTitle>
            <AlertDescription>{alertMessage}</AlertDescription>
          </Alert>
        </div>
      )}

      <div className="container flex mx-auto px-6 mb-14 justify-center items-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg inline-block px-6 py-3 text-white shadow-lg transform">
          Experience
        </h1>
        <Rocket className="w-12 h-12 ml-4 text-purple-500 animate-bounce" />
      </div>

      <div className="container mx-auto px-6 mb-8">
        <div className="flex justify-center space-x-4 flex-wrap">
          <button
            onClick={() => setActiveTab('education')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 mb-4 sm:mb-0 ${activeTab === 'education'
              ? 'bg-blue-500 text-white shadow-lg scale-105'
              : 'bg-white text-blue-500 hover:bg-blue-50'
              }`}
          >
            <div className="flex items-center">
              <GraduationCap className="w-5 h-5 mr-2" />
              Education
            </div>
          </button>
          <button
            onClick={() => setActiveTab('work')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 mb-4 sm:mb-0 ${activeTab === 'work'
              ? 'bg-purple-500 text-white shadow-lg scale-105'
              : 'bg-white text-purple-500 hover:bg-purple-50'
              }`}
          >
            <div className="flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Work Experience
            </div>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-white shadow-lg p-8 sm:p-12">
            <div className="relative">


              {(activeTab === 'education' ? educationData : workData).map((item, index) => (
                <ExperienceItemComponent
                  key={item.id}
                  {...item}
                  isLast={index === (activeTab === 'education' ? educationData : workData).length - 1}
                  isExpanded={expandedItem === item.id}
                  onToggle={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                  onShare={() => handleShare(item.title)}
                  onDownload={() => handleDownload(item.title)}
                  likes={likes[item.id] || 0}
                  onLike={() => handleLike(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceItemComponent: React.FC<ExperienceItemProps> = ({
  Icon,
  timePeriod,
  title,
  description,
  details,
  skills,
  isExpanded,
  onToggle,
  onShare,
  onDownload,
  likes,
  onLike
}) => {
  return (
    <div className="group relative">
      <div className={`flex flex-col sm:flex-row mb-8 p-4 rounded-lg transition-all duration-300 ${isExpanded ? 'bg-blue-50' : 'hover:bg-gray-50'
        }`}>
        <div className="relative mr-6 z-10 mb-4 sm:mb-0">
          <div className={`p-3 rounded-lg bg-white ring-2 transition-all duration-300 ${isExpanded ? 'ring-purple-500 shadow-lg' : 'ring-blue-500 group-hover:ring-purple-500'
            }`}>
            <Icon className={`w-6 h-6 transition-colors duration-300 ${isExpanded ? 'text-purple-500' : 'text-blue-500 group-hover:text-purple-500'
              }`} />
          </div>

        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between flex-col sm:flex-row">
            <div>
              <span className="text-sm text-gray-600 mb-1 block">{timePeriod}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                {title}
                <ChevronRight className={`w-5 h-5 ml-2 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''
                  }`} />
              </h3>
            </div>
            <div className="flex space-x-2 mt-4 sm:mt-0">
              <button
                onClick={(e: React.MouseEvent) => { e.stopPropagation(); onShare(); }}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Share2 className="w-5 h-5 text-gray-500" />
              </button>
              <button
                onClick={(e: React.MouseEvent) => { e.stopPropagation(); onDownload(); }}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Download className="w-5 h-5 text-gray-500" />
              </button>
              <button
                onClick={(e: React.MouseEvent) => { e.stopPropagation(); onLike(); }}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors flex items-center"
              >
                <ThumbsUp className="w-5 h-5 text-gray-500 mr-1" />
                <span className="text-sm text-gray-500">{likes}</span>
              </button>
            </div>
          </div>

          <p className="text-base text-gray-700 mb-4">{description}</p>

          <div
            onClick={onToggle}
            className="cursor-pointer flex items-center text-blue-500 hover:text-blue-600 font-medium"
          >
            <Eye className="w-4 h-4 mr-2" />
            {isExpanded ? 'Show less' : 'Show more'}
          </div>

          {isExpanded && (
            <div className="mt-4 space-y-4 animate-fadeIn">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Key Achievements</h4>
                <ul className="list-disc list-inside space-y-2">
                  {details.map((detail, index) => (
                    <li key={index} className="text-gray-700">{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;