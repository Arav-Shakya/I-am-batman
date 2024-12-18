"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { addData, uploadImage } from '@/lib/firebase';
import { JobForm } from '@/lib/types';
import { Plus } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';

const CreateJobList: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [cardTitle, setCardTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [isPremium, setIsPremium] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [uploadProgress, setUploadProgress] = useState<number | null>(null);
    const [isUploading, setIsUploading] = useState(false);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleNext = async () => {
        setIsUploading(true);
        setUploadProgress(0);
        let imageUrl = null;
        if (image) {
            try {
                imageUrl = await uploadImage(image, (progress) => {
                    setUploadProgress(progress);
                });
            } catch (error) {
                console.error("Error uploading image:", error);
                setIsUploading(false);
                return;
            }
        }
        const jobData: JobForm = {
            cardTitle,
            date,
            description,
            isPremium,
            imageUrl: imageUrl || null,
        };
        try {
            await addData('job_lists', jobData);
            setOpen(false);
            setCardTitle('');
            setDate('');
            setDescription('');
            setIsPremium(false);
            setImage(null);
            setImageUrl(null);
            setUploadProgress(null);
            setIsUploading(false);
        } catch (error) {
            console.error("Error adding job list:", error);
            setIsUploading(false);
        }
    };

    return (
        <div>
            <h1>Create Job List</h1>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button><Plus className="h-4 w-4 mr-2" />Create New Job List</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create New Job List</DialogTitle>
                        <DialogDescription>
                            Fill out the form below to create a new job list.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="cardTitle">Card Title</Label>
                            <Input
                                id="cardTitle"
                                value={cardTitle}
                                onChange={(e) => setCardTitle(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="date">Date</Label>
                            <Input
                                id="date"
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="isPremium"
                                checked={isPremium}
                                onCheckedChange={(checked) => setIsPremium(checked === true)}
                            />
                            <label
                                htmlFor="isPremium"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Is Premium
                            </label>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="image">Image</Label>
                            <Input
                                id="image"
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                            {imageUrl && <img src={imageUrl} alt="Uploaded Image" className="max-h-32" />}
                        </div>
                        {isUploading && uploadProgress !== null && (
                            <div className="mt-4">
                                <Progress value={uploadProgress} max={100} />
                                <p className="text-sm text-gray-500 mt-1">{uploadProgress.toFixed(0)}%</p>
                            </div>
                        )}
                    </div>
                    <div className="flex justify-end">
                        <Button className="w-full" onClick={handleNext} disabled={isUploading}>Next</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CreateJobList;
