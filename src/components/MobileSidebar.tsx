import React from 'react';
import {
    Home,
    Briefcase,
    Star,
    Users,
    User,
    Settings,
    X,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

interface MobileSidebarProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

const navItems = [
    {
        label: 'New Jobs',
        icon: Home,
        href: '/dashboard',
    },
    {
        label: 'Dev Updates',
        icon: Briefcase,
        href: '/dashboard/dev-updates',
    },
    {
        label: 'Starred',
        icon: Star,
        href: '/dashboard/starred',
    },
    {
        label: 'Our Jobs',
        icon: Users,
        href: '/dashboard/our-jobs',
    },
    {
        label: 'Profile',
        icon: User,
        href: '/dashboard/profile',
    },
    {
        label: 'Settings',
        icon: Settings,
        href: '/dashboard/settings',
    },
];

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isMenuOpen, toggleMenu }) => {
    const pathname = usePathname();
    const { theme } = useTheme();

    return (
        <aside className={cn(
            "w-64 border-r border-gray-200 dark:border-gray-700 md:hidden",
            isMenuOpen ? "block" : "hidden",
            "fixed top-0 left-0 h-full z-50   transition-transform duration-300 bg-white dark:bg-gray-900",
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}>
            <div className="flex justify-between items-center p-4 ">
                <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
                    Dashboard
                </h2>
                <button onClick={toggleMenu}>
                    <X className="h-6 w-6  text-gray-700 dark:text-gray-100" />
                </button>
            </div>
            <nav className=' flex flex-col mx-4 gap-2'>
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        onClick={toggleMenu}
                        className={cn(
                            'flex rounded-md items-center px-4 py-1.5 text-gray-700 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-blue-800',
                            'transition-colors duration-200 relative',
                            theme === 'dark' && pathname === item.href && 'before:absolute before:inset-0 before:bg-blue-500/20 before:rounded-md'
                        )}
                    >
                        <item.icon className="w-5 h-5 mr-2" />
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default MobileSidebar;
