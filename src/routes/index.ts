import { createBrowserRouter } from 'react-router';

import { AppLayout } from '@/layouts/AppLayout';
import { ForgotPassword } from '@/pages/auth/ForgotPassword';
import { Login } from '@/pages/auth/Login';
import { ResetPassword } from '@/pages/auth/ResetPassword';
import { RootError } from '@/pages/error/Root';
import { Signup } from '@/pages/auth/Signup';
import { FilesPage } from '@/pages/drive/FilesPage';
import { HomePage } from '@/pages/drive/HomePage';
import { SettingsPage } from '@/pages/drive/SettingsPage';
import { forgotPasswordAction } from './actions/forgotPassword';
import { loginAction } from './actions/login';
import { resetPasswordAction } from './actions/resetPassword';
import { signupAction } from './actions/signup';
import { driveLoader } from '@/loaders/drive';

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
        action: loginAction,
      },
      {
        path: 'signup',
        Component: Signup,
        action: signupAction,
      },
      {
        path: 'forgoten-password',
        Component: ForgotPassword,
        action: forgotPasswordAction,
      },
      {
        path: 'reset-password',
        Component: ResetPassword,
        action: resetPasswordAction,
      },
    ],
  },
  {
    path: '/drive',
    Component: AppLayout,
    loader: driveLoader,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'home',
        Component: HomePage,
      },
      {
        path: 'my-drive',
        Component: FilesPage,
      },
      {
        path: 'recent',
        Component: SettingsPage,
      },
    ],
  },
]);
