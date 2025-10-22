import { createBrowserRouter } from 'react-router';

import { Login } from '@/pages/auth/Login';
import { RootError } from '@/pages/error/Root';

export const router = createBrowserRouter([
  {
    path: '/',
    ErrorBoundary: RootError,
  },
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        Component: Login,
      },
    ],
  },
]);
