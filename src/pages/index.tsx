//pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Service from '../components/Services';
import Experience from '@/components/Experience';
import Works from '@/components/Works'
import BlogSection from '@/components/Blog';
import ContactSection from '@/components/contact';
import Footer from '@/components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


const IndexPage: React.FC = () => {
  return (
    <div className="font-rubik bg-gradient-to-r bg-slate-100 min-h-screen">
      <Head>
        <title>MMahesa.com</title>
        <meta
          name="description"
          content="Portfolio website of Muhamad Mahesa, Web Developer & Software Engineer."
        />
      </Head>

      <Header />
      <Home />
      <About />
      <Service/>
      <Experience/>
      <Works/>
      <BlogSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default IndexPage;
