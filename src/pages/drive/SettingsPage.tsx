export const SettingsPage = () => {
  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold'>Settings</h1>
        <p className='text-muted-foreground'>Manage your account settings</p>
      </div>

      <div className='space-y-4'>
        <div className='rounded-lg border p-6'>
          <h3 className='font-semibold'>Account</h3>
          <p className='text-sm text-muted-foreground'>Manage your account information</p>
        </div>
        <div className='rounded-lg border p-6'>
          <h3 className='font-semibold'>Security</h3>
          <p className='text-sm text-muted-foreground'>Change password and security settings</p>
        </div>
        <div className='rounded-lg border p-6'>
          <h3 className='font-semibold'>Storage</h3>
          <p className='text-sm text-muted-foreground'>Manage your storage and files</p>
        </div>
      </div>
    </div>
  );
};
