import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { UploadIcon } from 'lucide-react';
import { Input } from './ui/input';
import { Progress } from './ui/progress';
import { Button } from './ui/button';

interface UploadFileProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const UploadFile = ({ open, onOpenChange }: UploadFileProps) => {
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const abortController = new AbortController();

  const location = useLocation();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-none rounded-none sm:rounded-lg sm:max-w-md'>
        <DialogHeader className='border-b pb-2 '>
          <DialogTitle className='flex items-center gap-2 text-lg font-semibold'>
            <UploadIcon /> Upload File
          </DialogTitle>

          <DialogDescription className=''>
            Select a file to upload to <span className='font-semibold'>Cloud</span>
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-4 py-4 '>
          <Input type='file' ref={fileInputRef} className='cursor-pointer' disabled={isUploading} />

          {progress > 0 && (
            <div className='space-y-1'>
              <div className='flex justify-between text-muted-foreground text-sm'>
                Uploading...
                <span>{Math.round(progress)}%</span>
              </div>

              <Progress value={progress} className='h-2 rounded-full transition-all duration-300' />
            </div>
          )}
        </div>

        <DialogFooter className='flex flex-col gap-2'>
          {!isUploading ? (
            <Button onClick={() => {}} className='w-full flex items-center gap-2'>
              Upload file
            </Button>
          ) : (
            <Button
              variant='secondary'
              size='sm'
              className='w-full flex items-center justify-center gap-2'
              onClick={() => {}}
            >
              Cancel upload
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
