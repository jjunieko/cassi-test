import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import HeaderSubmenu from './HeaderSubmenu';
import { Menu } from 'lucide-react';
import Logo from '@/app/utils/Logo';
import { MobileMenuIcon } from './modules/MobileMenuIcon';
import { SearchBar } from './modules/SearchBar';
import { SocialIcons } from './modules/SocialIcons';
import { UserAccess } from './modules/UserAccess';

export default function Header() {
    return (
        <>
            <header className="w-full bg-white border-b border-gray-200 px-20">
                <div className="grid grid-cols-4 items-center h-[84px] w-full">
                    <Logo />
                    <MobileMenuIcon />
                    <SearchBar />
                    <SocialIcons />
                    <UserAccess />
                </div>
            </header>
            <HeaderSubmenu />
        </>
    );
}