"use client";

import { SignInButton, SignedOut, SignedIn, useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect } from 'react';
import { addUserToList, checkUserExists } from '@/lib/firebase';
import { User } from '@/lib/types';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome</h1>
      <SignedOut>
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Link href="/dashboard">
          <Button>Go to Dashboard</Button>
        </Link>
        <AddUserToFirestore />
      </SignedIn>
    </div>
  );
}

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
