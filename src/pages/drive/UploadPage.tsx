export const UploadPage = () => {
  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold'>Upload Files</h1>
        <p className='text-muted-foreground'>Upload your files to the cloud</p>
      </div>

      <div className='rounded-lg border-2 border-dashed border-muted-foreground/25 p-12 text-center'>
        <p className='text-muted-foreground'>Drag and drop files here or click to browse</p>
      </div>
    </div>
  );
};
