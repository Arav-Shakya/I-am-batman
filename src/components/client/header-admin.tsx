"use client";

import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const HeaderAdmin: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'system'>('light');

    useEffect(() => {
        setMounted(true);
        if (theme) {

            setCurrentTheme(theme)
        }
    }, [theme]);

    const toggleTheme = () => {
        if (currentTheme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <header className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 p-4 flex justify-end">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {mounted && (currentTheme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />)}
            </Button>
        </header>
    );
};

export default HeaderAdmin;
