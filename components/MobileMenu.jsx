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
        <div className="md:hidden items-center mr-4 text-gray-400 border p-1.5 border-gray-600 rounded-md">
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
          <Link href="/" className="flex rounded-full">
            <Image className="h-10 w-auto" src={logo} priority={true} />
          </Link>
        </SheetClose>
        <div id="mobile-menu">
          <div className="space-y-1 pb-3 pt-2 mt-3">
            <SheetClose asChild>
              <Link
                href="/"
                className={`${
                  pathname == '/' ? 'text-gray-200' : ''
                } flex rounded-md  gap-2 py-1.5 my-2 hover:bg-gray-800 text-base font-medium`}
              >
                <div className="flex ml-2 justify-center items-center">
                  <VscHome size={16} />
                </div>
                <span>Home</span>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/properties"
                className={`${
                  pathname == '/properties' ? 'text-gray-200' : ''
                } flex rounded-md py-1.5 my-2 hover:bg-gray-800 text-base font-medium`}
              >
                <div className="flex ml-2 gap-2 justify-center items-center">
                  <BsBuilding size={14} />
                  <span> Properties </span>
                </div>
              </Link>
            </SheetClose>
            {session && (
              <SheetClose asChild>
                <Link
                  href="/properties/add"
                  className={`${
                    pathname == '/properties/add' ? 'text-gray-200' : ''
                  } flex gap-2 rounded-md py-1.5 my-2 hover:bg-gray-800 text-base font-medium`}
                >
                  <div className="flex ml-2 gap-2 justify-center items-center">
                    <BsBuildingAdd size={14} />
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
