import React, { useState } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from './ui/sidebar';
import { Link, useLocation } from 'react-router';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { cn } from './../lib/utils';
import { FolderPlusIcon, Plus, UploadIcon } from 'lucide-react';
import { SIDEBAR_LINKS } from '@/constants';
import { NavUser } from './NavUser';
import { UploadFile } from './UploadFile';

export const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const { state } = useSidebar();
  const location = useLocation();

  const [openUpload, setOpenUpload] = useState(false);
  const [openCreateFolder, setOpenCreateFolder] = useState(false);

  return (
    <>
      <Sidebar {...props}>
        <SidebarHeader>
          <Link to='/drive/home'>Logo</Link>
        </SidebarHeader>

        <SidebarContent className='px-2 mt-3'>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button
                    size={state === 'collapsed' ? 'icon' : 'default'}
                    className={cn(state === 'collapsed' && 'size-8')}
                  >
                    <Plus />
                    {state === 'expanded' && 'New'}
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align='start' side='right' className='w-50 bg-muted'>
                  <DropdownMenuItem onClick={() => setOpenCreateFolder(true)}>
                    <FolderPlusIcon className='mr-2 size-4' />
                    Create Folder
                  </DropdownMenuItem>

                  <DropdownMenuItem onClick={() => setOpenUpload(true)}>
                    <UploadIcon className='mr-2 size-4' />
                    Upload File
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {SIDEBAR_LINKS.map((link) => (
                <SidebarMenuItem key={link.title}>
                  <SidebarMenuButton
                    tooltip={link.title}
                    isActive={location.pathname === link.url}
                    asChild
                  >
                    <Link to={link.url} className='flex items-center gap-2'>
                      {link.icon && <link.icon />}
                      <span>{link.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter>
          <NavUser />
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>

      <UploadFile open={openUpload} onOpenChange={setOpenUpload} />
    </>
  );
};
