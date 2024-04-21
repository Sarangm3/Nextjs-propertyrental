import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import logo from '@/assets/images/logo-white.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { VscHome } from 'react-icons/vsc';
import { BsBuilding, BsBuildingAdd } from 'react-icons/bs';

const MobileMenu = ({ session, pathname }) => {
  const router = useRouter();

  return (
    <Sheet>
      <SheetTrigger>
        <div className="md:hidden bg-gray-900 items-center mr-4 text-gray-400 border p-1.5 border-gray-600 rounded-md">
          <svg
            className="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="p-4 w-2/3">
        <SheetClose asChild>
          <Link href="/" className="flex">
            <Image
              className="h-10 w-auto rounded-full bg-black"
              src={logo}
              priority={true}
            />
          </Link>
        </SheetClose>
        <div id="mobile-menu">
          <div className="space-y-1 pb-3 pt-2 mt-3">
            <SheetClose asChild>
              <Link
                href="/"
                className={`${
                  pathname == '/' ? 'dark:text-gray-200 font-semibold' : ''
                } flex rounded-md py-1.5 hover:bg-gray-200 dark:hover:bg-gray-800 text-base font-medium`}
              >
                <div className="flex ml-2 gap-2 justify-center items-center">
                  <div>
                    <VscHome size={15} />
                  </div>
                  <span>Home</span>
                </div>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/properties"
                className={`${
                  pathname == '/properties'
                    ? 'dark:text-gray-200 font-semibold'
                    : ''
                } flex rounded-md py-1.5 hover:bg-gray-200 dark:hover:bg-gray-800 text-base font-medium`}
              >
                <div className="flex ml-2 gap-2 justify-center items-center">
                  <div>
                    <BsBuilding size={13} />
                  </div>
                  <span> Properties </span>
                </div>
              </Link>
            </SheetClose>
            {session && (
              <SheetClose asChild>
                <Link
                  href="/properties/add"
                  className={`${
                    pathname == '/properties/add'
                      ? 'dark:text-gray-200 font-semibold'
                      : ''
                  } flex gap-2 rounded-md py-1.5 hover:bg-gray-200 dark:hover:bg-gray-800 text-base font-medium`}
                >
                  <div className="flex ml-2 gap-2 justify-center items-center">
                    <div>
                      <BsBuildingAdd size={13} />
                    </div>
                    <span> Add Property</span>
                  </div>
                </Link>
              </SheetClose>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
