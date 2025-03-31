import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Home: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setShowAlert(true);
    setIsDialogOpen(false);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="text-white font-rubik min-h-screen">
      <section className="home flex items-center justify-center text-center min-h-screen" id="home">
        <div className="container z-1 0 mx-auto px-4">
          <div className="mb-6 flex justify-center">
            <div className="relative group">
              <Image
                className="w-48 h-48 bg-yellow-300 rounded-full mt-12 p-2 transition-transform duration-300 group-hover:scale-105"
                src="/images/nime.jpeg"
                alt="Face icon"
                width={192}
                height={192}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-full transition-all duration-300" />
            </div>
          </div>

          <h1 className="text-4xl font-medium text-white mt-5 animate-fadeIn">Muhamad Mahesa</h1>
          <h1 className="text-xl font-thin text-white mt-3">
            I&apos;m a Web Developer & Software Engineer
          </h1>

          <div className="flex justify-center gap-6 mt-4">
            <a href="mailto:mmahesaa1124@gmail.com" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email Me</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <FontAwesomeIcon icon={faPhone} />
              <span>Call Me</span>
            </a>
          </div>

          <div className="button mt-6">
            <button
              onClick={() => setIsDialogOpen(true)}
              className="bg-red-600 box-border rounded-full py-4 px-8 hover:bg-yellow-400 active:bg-red-800 focus:outline-none focus:ring focus:ring-red-500 hover:scale-105 hover:text-white transition-all duration-200"
            >
              Work with Me
            </button>
          </div>

          <div
            className="scroll-down text-lg font-thin mt-8 animate-bounce cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <h1>Scroll Down</h1>
            <FontAwesomeIcon icon={faArrowDownLong} className="mt-2" />
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-gray-900 text-white">
          <DialogHeader>
            <DialogTitle>Let&apos;s Work Together</DialogTitle>
            <DialogDescription className="text-gray-400">
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-2 rounded-md hover:bg-yellow-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        </DialogContent>
      </Dialog>

      {showAlert && (
        <Alert className="fixed bottom-4 right-4 bg-green-500 text-white">
          <AlertDescription>
            Thanks for reaching out! I&apos;ll get back to you soon.
          </AlertDescription>
        </Alert>
      )}
    </main>
  );
};

export default Home;