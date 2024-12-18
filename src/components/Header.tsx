import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';
import { UserButton, SignedIn } from '@clerk/nextjs';

interface HeaderProps {
    toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {

    return (
        <header className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 p-4 flex justify-between lg:justify-end">
            <div className="lg:hidden">
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                    <Menu className="h-5 w-5" />
                </Button>
            </div>
            <div className="flex items-center gap-2">
                <ModeToggle />
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </header>
    );
};

export default Header;
