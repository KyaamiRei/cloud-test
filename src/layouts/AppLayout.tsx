import {
  LogOutIcon,
  MenuIcon,
  SearchIcon,
  UploadIcon,
  FolderIcon,
  HomeIcon,
  SettingsIcon,
} from 'lucide-react';
import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { account } from '@/lib/appwrite';

export const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      navigate('/auth/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const navigationItems = [
    { name: 'Home', href: '/drive/home', icon: HomeIcon },
    { name: 'Files', href: '/drive/files', icon: FolderIcon },
    { name: 'Upload', href: '/drive/upload', icon: UploadIcon },
    { name: 'Settings', href: '/drive/settings', icon: SettingsIcon },
  ];

  return (
    <div className='flex h-screen bg-background'>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 z-40 bg-black/50 lg:hidden'
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className='flex h-full flex-col'>
          {/* Header */}
          <div className='flex h-16 items-center justify-between px-6 border-b border-border'>
            <Link to='/drive/home' className='flex items-center gap-2 font-semibold'>
              <div className='flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground'>
                C
              </div>
              Cloud
            </Link>
            <Button
              variant='ghost'
              size='sm'
              className='lg:hidden'
              onClick={() => setSidebarOpen(false)}
            >
              <MenuIcon className='size-4' />
            </Button>
          </div>

          {/* Search */}
          <div className='p-4'>
            <div className='relative'>
              <SearchIcon className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />
              <Input placeholder='Search files...' className='pl-10' />
            </div>
          </div>

          {/* Navigation */}
          <nav className='flex-1 px-4 pb-4'>
            <ul className='space-y-2'>
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className='flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground'
                  >
                    <item.icon className='size-4' />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* User section */}
          <div className='border-t border-border p-4'>
            <div className='flex items-center gap-3'>
              <div className='flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium'>
                U
              </div>
              <div className='flex-1 min-w-0'>
                <p className='text-sm font-medium truncate'>User Name</p>
                <p className='text-xs text-muted-foreground truncate'>user@example.com</p>
              </div>
              <Button
                variant='ghost'
                size='sm'
                onClick={handleLogout}
                className='text-muted-foreground hover:text-foreground'
              >
                <LogOutIcon className='size-4' />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className='flex flex-1 flex-col overflow-hidden'>
        {/* Top bar */}
        <header className='flex h-16 items-center gap-4 border-b border-border bg-background px-4 lg:px-6'>
          <Button
            variant='ghost'
            size='sm'
            className='lg:hidden'
            onClick={() => setSidebarOpen(true)}
          >
            <MenuIcon className='size-4' />
          </Button>

          <div className='flex flex-1 items-center gap-4'>
            <h1 className='text-lg font-semibold'>Drive</h1>
          </div>

          <div className='flex items-center gap-4'>
            <Button variant='outline' size='sm'>
              <UploadIcon className='size-4 mr-2' />
              Upload
            </Button>
          </div>
        </header>

        {/* Page content */}
        <main className='flex-1 overflow-auto p-4 lg:p-6'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
