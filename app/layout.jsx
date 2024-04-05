import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import '@/assets/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalProvider } from '@/context/GlobalContext';

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental,find rentals,find property',
};

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang="en">
          <head>
            <link rel="shortcut icon" href="/favicon.ico" />
          </head>
          <body>
            <Navbar />
            <div>{children}</div>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  );
};

export default MainLayout;
