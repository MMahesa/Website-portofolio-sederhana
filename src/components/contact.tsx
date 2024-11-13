import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact-section bg-gray-100 text-slate-950 text-2xl py-24" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold  bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg inline-block px-6 py-3 text-white box-border shadow-lg">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg mt-4">
          I&apos;d love to hear from you. Send me a message using the form below.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your Message"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className=" bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
