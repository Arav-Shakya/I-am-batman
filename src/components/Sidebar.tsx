import React from 'react';
import {
    Home,
    Briefcase,
    Star,
    Users,
    User,
    Settings,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

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

const Sidebar: React.FC = () => {
    const pathname = usePathname();
    const { theme } = useTheme();

    return (
        <aside className={cn(
            "w-64 border-r border-gray-200 dark:border-gray-700 lg:block hidden",
            theme === 'dark' && "lg:bg-blue-950/70 lg:backdrop-blur-sm"
        )}>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
                    Dashboard
                </h2>
            </div>
            <nav className='flex flex-col gap-2 mx-4'>
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={cn(
                            'flex items-center px-4 py-1.5 rounded-md text-gray-700 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-blue-800',
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

export default Sidebar;
