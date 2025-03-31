import React, { useState } from 'react';
import { Send, Check, AlertCircle, Mail, User, MessageSquare } from 'lucide-react';
import { Alert, AlertDescription } from '../components/ui/alert';

// Mendefinisikan tipe data untuk Formulir
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Mendefinisikan tipe untuk error yang bisa muncul di setiap field
interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSection = () => {
  // State untuk menyimpan data formulir yang diisi oleh user
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  // State untuk menyimpan pesan error jika ada input yang tidak valid
  const [errors, setErrors] = useState<Errors>({});
  
  // State untuk menandai status pengiriman formulir (apakah sedang mengirim atau tidak)
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State untuk menampilkan status pengiriman (sukses atau error)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  //! Fungsi untuk validasi form sebelum dikirim
  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    
    // Validasi field 'name'
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    // Validasi field 'email'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Validasi field 'message'
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors); // Menyimpan error yang ditemukan di state errors
    return Object.keys(newErrors).length === 0; // Jika tidak ada error, return true
  };

  //! Fungsi untuk menangani perubahan input dan menghapus error saat user mulai mengetik
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value // Menyimpan data input ke dalam state formData
    }));
    
    // Jika ada error di field ini, hapus errornya
    if (errors[name as keyof Errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: '' // Menghapus error untuk field yang relevan
      }));
    }
  };

  //! Fungsi untuk menangani pengiriman formulir
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah refresh halaman saat form disubmit

    // Validasi form sebelum pengiriman
    if (!validateForm()) return;

    setIsSubmitting(true); // Menandakan bahwa pengiriman sedang berlangsung
    setSubmitStatus(null); // Reset status submit sebelumnya

    // Simulasi panggilan API untuk pengiriman formulir
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Delay untuk mensimulasikan pengiriman
      setSubmitStatus('success'); // Menandakan pengiriman berhasil
      setFormData({ name: '', email: '', message: '' }); // Reset formulir setelah berhasil dikirim
    } catch (error) {
      setSubmitStatus('error'); // Menandakan terjadi error saat pengiriman
    } finally {
      setIsSubmitting(false); // Menandakan bahwa pengiriman telah selesai
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-24 min-h-screen flex items-center" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 transform transition-all duration-500 hover:scale-105">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-4">
            Let&apos;s Connect
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Drop me a message below and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:shadow-2xl">
            {/* Menampilkan pesan jika pengiriman berhasil */}
            {submitStatus === 'success' && (
              <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
                <Check className="w-4 h-4" />
                <AlertDescription>
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </AlertDescription>
              </Alert>
            )}

            {/* Menampilkan pesan jika terjadi error saat pengiriman */}
            {submitStatus === 'error' && (
              <Alert className="mb-6 bg-red-50 text-red-800 border-red-200">
                <AlertCircle className="w-4 h-4" />
                <AlertDescription>
                  Oops! Something went wrong. Please try again.
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Input Name */}
              <div className="relative">
                <label htmlFor="name" className="flex items-center text-gray-700 text-sm font-medium mb-2">
                  <User className="w-4 h-4 mr-2" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Mahesa"
                  className={`w-full p-3 border rounded-lg bg-gray-50 transition-all duration-300 focus:ring-2 
                    ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p> // Menampilkan error jika ada
                )}
              </div>

              {/* Input Email */}
              <div className="relative">
                <label htmlFor="email" className="flex items-center text-gray-700 text-sm font-medium mb-2">
                  <Mail className="w-4 h-4 mr-2" />
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Mahesa@example.com"
                  className={`w-full p-3 border rounded-lg bg-gray-50 transition-all duration-300 focus:ring-2
                    ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p> // Menampilkan error jika ada
                )}
              </div>

              {/* Input Message */}
              <div className="relative">
                <label htmlFor="message" className="flex items-center text-gray-700 text-sm font-medium mb-2">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`w-full p-3 border rounded-lg bg-gray-50 transition-all duration-300 focus:ring-2
                    ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'}`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p> // Menampilkan error jika ada
                )}
              </div>

              {/* Tombol Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg
                  transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg
                  flex items-center justify-center space-x-2
                  ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:opacity-90'}`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" /> // Loading spinner
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Informasi tambahan atau bukti sosial */}
          <div className="mt-10 text-center text-gray-500 text-sm">
            <p>
              <span>Made with 💙 by Mahesa</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
