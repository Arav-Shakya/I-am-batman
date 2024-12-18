import React from 'react';
import HeaderAdmin from '@/components/client/header-admin';
import SidebarAdmin from '@/components/sidebar-admin';

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    return (
        <div className="flex h-screen">
            <SidebarAdmin />
            <div className="flex-1 flex flex-col overflow-hidden">
                <HeaderAdmin />
                <main className="flex-1 p-4 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
