import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from '@/routes';

import { ThemeProvider } from './components/ThemeProvider';
import { Toaster } from 'sonner';
import '@/index.css';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <RouterProvider router={router} />
    <Toaster richColors/>
  </ThemeProvider>
);
