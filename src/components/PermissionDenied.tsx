import React from 'react';
import { Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PermissionDeniedPage: React.FC = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white p-4">
            <Card className="w-full max-w-md text-center shadow-lg">
                <CardHeader className="pb-0">
                    <div className="flex justify-center mb-4">
                        <Lock className="w-16 h-16 text-red-500" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800">
                        Permission Denied
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 400 300"
                        className="w-full max-h-48 mx-auto"
                    >
                        <path
                            d="M200 50 L350 250 L50 250 Z"
                            fill="#F0F0F0"
                            stroke="#E0E0E0"
                            strokeWidth="2"
                        />
                        <circle
                            cx="200"
                            cy="150"
                            r="60"
                            fill="#FF6B6B"
                            fillOpacity="0.7"
                        />
                        <line
                            x1="170"
                            y1="120"
                            x2="230"
                            y2="180"
                            stroke="#FFFFFF"
                            strokeWidth="8"
                        />
                        <line
                            x1="230"
                            y1="120"
                            x2="170"
                            y2="180"
                            stroke="#FFFFFF"
                            strokeWidth="8"
                        />
                    </svg>
                    <p className="text-gray-600">
                        You do not have the necessary permissions to access this page.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Button variant="outline" onClick={() => window.history.back()}>
                            Go Back
                        </Button>
                        <Button onClick={() => window.location.href = '/'}>
                            Go to Home
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default PermissionDeniedPage;