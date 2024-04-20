import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/logo-white.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    //desktop
    <footer className="hidden md:block bg-gray-900 py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <Link href="/">
            <Image
              src={logo}
              priority={true}
              alt="Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        <div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            &copy; {currentYear} PropertyPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
