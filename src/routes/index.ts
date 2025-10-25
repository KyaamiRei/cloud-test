import { createBrowserRouter } from 'react-router';

import { ForgotPassword } from '@/pages/auth/ForgotPassword';
import { Login } from '@/pages/auth/Login';
import { ResetPassword } from '@/pages/auth/ResetPassword';
import { RootError } from '@/pages/error/Root';
import { Signup } from '@/pages/auth/Signup';
import { forgotPasswordAction } from './actions/forgotPassword';
import { loginAction } from './actions/login';
import { resetPasswordAction } from './actions/resetPassword';
import { signupAction } from './actions/signup';

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
    Component: AppLayout
  },
]);
