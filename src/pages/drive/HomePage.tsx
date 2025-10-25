export const HomePage = () => {
  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold'>Welcome to Cloud Drive</h1>
        <p className='text-muted-foreground'>Your files are safe and accessible from anywhere</p>
      </div>

      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <div className='rounded-lg border p-6'>
          <h3 className='font-semibold'>Quick Access</h3>
          <p className='text-sm text-muted-foreground'>Access your recent files</p>
        </div>
        <div className='rounded-lg border p-6'>
          <h3 className='font-semibold'>Storage</h3>
          <p className='text-sm text-muted-foreground'>2.5 GB of 15 GB used</p>
        </div>
        <div className='rounded-lg border p-6'>
          <h3 className='font-semibold'>Recent Files</h3>
          <p className='text-sm text-muted-foreground'>View your latest uploads</p>
        </div>
      </div>
    </div>
  );
};
