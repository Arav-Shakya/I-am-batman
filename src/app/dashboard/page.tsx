"use client";

import React, { useEffect } from 'react';
import { addUserToList, checkUserExists } from '@/lib/firebase';
import { useUser } from '@clerk/nextjs';
import { User } from '@/lib/types';

const DashboardPage: React.FC = () => {
    useEffect(() => {
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
            <AddUserToFirestore />
        </div>
    );
};

const AddUserToFirestore = () => {
    const { user } = useUser();

    useEffect(() => {
        const addUser = async () => {
            if (user) {
                const userExists = await checkUserExists(user.emailAddresses[0].emailAddress);
                if (!userExists) {
                    const newUser: User = {
                        email: user.emailAddresses[0].emailAddress,
                        firstName: user.firstName || '',
                        isAdmin: false,
                    };
                    addUserToList(newUser);
                }
            }
        };
        addUser();
    }, [user]);

    return null;
};

export default DashboardPage;
