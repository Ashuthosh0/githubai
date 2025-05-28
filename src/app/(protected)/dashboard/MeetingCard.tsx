'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { uploadFile } from '@/lib/firebase';
import { DownloadCloud, Presentation, Upload } from 'lucide-react';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { api } from '@/trpc/react';
import UseProject from '@/hooks/use-project';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';


const MeetingCard = () => {
  const {project} = UseProject()
  const processMeeting = useMutation({ mutationFn : async(data : {meetingUrl : string , meetingId : string , projectId : string})=>{
    const {meetingUrl , meetingId, projectId} = data;
    const response = await axios.post('/api/process-meeting', {meetingUrl , meetingId, projectId})
    return response.data
  } })
  const router = useRouter();
  const [isUploading, setIsUploading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const uploadMeeting = api.project.uploadMeeting.useMutation()
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'audio/*': ['.mp3', '.wav', '.m4a'],
    },
    multiple: false,
    maxSize: 50_000_000, // 50MB
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length === 0) return;
      if(!project) return;

      setIsUploading(true);
      try {
        const file = acceptedFiles[0];
        if(!file) return 
        const downloadURL = await uploadFile(file as File, setProgress) as string;
        uploadMeeting.mutate({ 
          projectId : project.id,
          meetingUrl : downloadURL,
          name : file.name
        },{
          onSuccess : (meeting) =>{
            toast.success("Meeting uploaded successfully")

            router.push("/meetings")
            processMeeting.mutateAsync({meetingUrl : downloadURL, meetingId : meeting.id, projectId : project.id})
          },
          onError : () =>{
            toast.error("failed to upload meeting") 
          }
        })
      } catch (err) {
        console.error('Upload failed:', err);
      } finally {
        setIsUploading(false);
      }
    },
  });

  return (
    <Card
      className="col-span-2 flex flex-col items-center justify-center cursor-pointer p-10"
      {...getRootProps()}
    >
      <input className="hidden" {...getInputProps()} />
      {!isUploading ? (
        <>
          <Presentation className="h-10 w-10 animate-bounce" />
          <h3 className="mt-2 text-sm font-semibold text-gray-900">
            Create a new meeting
          </h3>
          <p className="mt-1 text-center text-sm text-gray-500">
            Analyse your meeting with GitHub AI.
            <br />
            Powered by AI.
          </p>
          <div className="mt-6">
            <Button type="button">
              <Upload className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              Upload meeting
            </Button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            className="size-20"
            styles={buildStyles({
              pathColor: '#2563eb',
              textColor: '#2563eb',
            })}
          />
          <p className="text-sm text-gray-500 text-center">
            Uploading your meeting...
          </p>
        </div>
      )}
    </Card>
  );
};

export default MeetingCard;
