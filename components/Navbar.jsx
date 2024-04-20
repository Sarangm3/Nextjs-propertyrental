'use client';
import Image from 'next/image';
import logo from '@/assets/images/logo-white.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { signIn, useSession, getProviders } from 'next-auth/react';
import UnreadMessageCount from '@/components/UnreadMessageCount';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/DarkMode';
import ProfileDropdown from '@/components/ProfileDropdown';
import MobileMenu from '@/components/MobileMenu';

const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const setAuthProvider = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setAuthProvider();
  }, []);
  const pathname = usePathname();
  return (
    <nav className="shadow-md bg-gray-900 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-14 items-center">
          <MobileMenu session={session} pathname={pathname} />
          <div className="flex flex-1 items-center md:items-stretch">
            {/* <!-- Logo --> */}
            <Link className="flex flex-shrink-0 items-center" href="/">
              <Image
                className="h-10 w-auto"
                src={logo}
                priority={true}
                alt="PropertyPulse"
              />

              <span className="hidden md:block text-white text-2xl font-semibold ml-2">
                PropertyRento
              </span>
            </Link>
            {/* <!-- Desktop Menu Hidden below md screens --> */}
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-2 text-gray-400">
                <Link
                  href="/"
                  className={` ${
                    pathname === '/' ? 'text-gray-200 font-semibold' : ''
                  }   hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                  Home
                </Link>
                <Link
                  href="/properties"
                  className={`${
                    pathname === '/properties'
                      ? 'text-gray-200 font-semibold'
                      : ''
                  }  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                  Properties
                </Link>
                {session && (
                  <Link
                    href="/properties/add"
                    className={`${
                      pathname === '/properties/add'
                        ? 'text-gray-200 font-semibold'
                        : ''
                    }  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                  >
                    Add Property
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* <!-- Right Side Menu (Logged Out) --> */}
          {!session && (
            <div className="md:ml-6">
              <div className="flex gap-4 items-center">
                <ModeToggle />
                {providers && (
                  <Button
                    onClick={() => signIn()}
                    className="w-full md:w-auto"
                    variant={'outline'}
                  >
                    Login or Register
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* <!-- Right Side Menu (Logged In) --> */}
          {session && (
            <div className="absolute inset-y-0 right-0 flex gap-4 items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              <ModeToggle />
              <Link href="/messages" className="relative group">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-400 p-1.5 text-black hover:text-gray-700 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
                <UnreadMessageCount session={session} />
              </Link>
              {/* <!-- Profile dropdown --> */}
              <div className="relative">
                <ProfileDropdown />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
