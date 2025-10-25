export const FilesPage = () => {
  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold'>Files</h1>
        <p className='text-muted-foreground'>Manage your files and folders</p>
      </div>

      <div className='rounded-lg border p-6'>
        <p className='text-center text-muted-foreground'>No files uploaded yet</p>
      </div>
    </div>
  );
};
