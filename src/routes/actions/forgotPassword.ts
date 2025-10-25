import { AppwriteException } from 'appwrite';

import type { ActionFunction } from 'react-router';

import { account } from '@/lib/appwrite';
import type { ForgotPasswordForm } from '@/types/all-types';

export const forgotPasswordAction: ActionFunction = async ({ request }) => {
  const data = (await request.json()) as ForgotPasswordForm;

  try {
    await account.createRecovery(data.email, `${window.location.origin}/auth/reset-password`);

    return { ok: true };
  } catch (err) {
    if (err instanceof AppwriteException) {
      return { ok: false, error: err };
    }
    throw err;
  }
};
