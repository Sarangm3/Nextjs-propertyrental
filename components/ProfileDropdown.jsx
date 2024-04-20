import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  BookmarkCheck,
  Keyboard,
  LogOut,
  Settings,
  User,
  UserPlus,
} from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import profileDefault from '@/assets/images/profile.png';

const ProfileDropdown = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  const profileName = session?.user?.name;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <Button
            variant="outline"
            size="icon"
            className="flex rounded-full bg-gray-800 text-sm"
          >
            <span className="sr-only">Open user menu</span>
            <Image
              className="h-8 w-8 rounded-full"
              src={profileImage || profileDefault}
              alt=""
              width={40}
              height={40}
              priority={true}
            />
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-4 md:mr-8">
        <DropdownMenuLabel>
          {profileName || profileEmail ? (
            <div>Hello, {profileName}</div>
          ) : (
            <span>My Account</span>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <button
              onClick={() => router.push('/profile')}
              className="w-full flex justify-between"
            >
              <User className="mr-2 h-4 w-4" />
              <span> Your Profile </span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button
              onClick={() => router.push('/properties/saved')}
              className="w-full flex justify-between"
            >
              <BookmarkCheck className="mr-2 h-4 w-4" />
              <span>Saved Properties</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserPlus className="mr-2 h-4 w-4" />
            <span>Invite users</span>
            <DropdownMenuShortcut>⌘+I</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button
            onClick={() => signOut()}
            className="w-full flex justify-between m-0"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign Out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ProfileDropdown;
