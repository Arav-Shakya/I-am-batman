export type User = {
    email: string;
    firstName: string;
    isAdmin: boolean;
  };

export type JobForm = {
    cardTitle: string;
    date: string;
    description: string;
    isPremium: boolean;
    imageUrl: string | null;
  };
