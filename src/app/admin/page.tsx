"use client";

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { checkUserExists, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import PermissionDenied from '@/components/PermissionDenied';

const AdminPage: React.FC = () => {
    const { user } = useUser();
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

    useEffect(() => {
        const checkAdminStatus = async () => {
            if (user) {
                const userExists = await checkUserExists(user.emailAddresses[0].emailAddress);
                if (userExists) {
                    const userRef = doc(db, "User_List", user.emailAddresses[0].emailAddress);
                    const docSnap = await getDoc(userRef);
                    if (docSnap.exists()) {
                        const userData = docSnap.data();
                        setIsAdmin(userData.isAdmin);
                    } else {
                        setIsAdmin(false);
                    }
                } else {
                    setIsAdmin(false);
                }
            } else {
                setIsAdmin(false);
            }
        };
        checkAdminStatus();
    }, [user]);

    if (isAdmin === null) {
        return <div>Loading...</div>;
    }

    if (isAdmin) {
        return (
            <div>
                <h1>Admin Page</h1>
                <p>This is a blank admin page.</p>
            </div>
        );
    } else {
        return <PermissionDenied />;
    }
};

export default AdminPage;
