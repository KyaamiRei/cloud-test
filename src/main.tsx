import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { Toaster } from 'sonner';

import { ThemeProvider } from './components/ThemeProvider';
import { router } from '@/routes';
import '@/index.css';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <RouterProvider router={router} />
    <Toaster richColors />
  </ThemeProvider>
);
