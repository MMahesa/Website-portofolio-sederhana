//pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Rubik } from 'next/font/google';
import '../fontAwesome'; // Import Font Awesome configuration


// Konfigurasi Rubik
const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Pilih weight yang diinginkan
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={rubik.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
