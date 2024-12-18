"use client";

import React from 'react';
import {
    Home,
    ListPlus,
    PlusSquare,
    Settings,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navItems = [
    {
        label: 'Dashboard',
        icon: Home,
        href: '/admin',
    },
    {
        label: 'Create Job list',
        icon: ListPlus,
        href: '/admin/create-job-list',
    },
    {
        label: 'Create updates',
        icon: PlusSquare,
        href: '/admin/create-updates',
    },
    {
        label: 'Settings',
        icon: Settings,
        href: '/admin/settings',
    },
];

const SidebarAdmin: React.FC = () => {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-gray-100 border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 hidden md:block">
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Admin Panel
                </h2>
            </div>
            <nav>
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={cn(
                            'flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700',
                            'transition-colors duration-200',
                            pathname === item.href && 'bg-gray-200 dark:bg-gray-700'
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

export default SidebarAdmin;
