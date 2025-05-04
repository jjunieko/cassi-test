import HeaderSubmenu from './HeaderSubmenu';
import Logo from '@/app/utils/Logo';
import { MobileMenuIcon } from './modules/MobileMenuIcon';
import { SearchBar } from './modules/SearchBar';
import { SocialIcons } from './modules/SocialIcons';
import { UserAccess } from './modules/UserAccess';

export default function Header() {
    return (
      <>
        <header className="w-full bg-white border-b border-gray-200 px-6 sm:px-10 md:px-20">
          <div className="flex flex-wrap items-center justify-between gap-4 h-auto min-h-[84px] w-full">
            <Logo />
  
            {/* Mobile Menu */}
            <div className="block md:hidden ml-auto">
              <MobileMenuIcon />
            </div>
  
            {/* Search */}
            <div className="hidden md:block flex-shrink-0">
              <SearchBar />
            </div>
  
            {/* Social icons */}
            <div className="hidden md:block flex-shrink-0">
              <SocialIcons />
            </div>
  
            {/* User access */}
            <div className="hidden lg:block flex-shrink-0">
              <UserAccess />
            </div>
          </div>
        </header>
        <HeaderSubmenu />
      </>
    );
  }
  
