"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import MobileSidebar from '@/components/MobileSidebar';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex h-screen">
            <Sidebar />
            <MobileSidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header toggleMenu={toggleMenu} />
                <main className="flex-1 p-4 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
