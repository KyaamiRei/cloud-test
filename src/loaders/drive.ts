import { account } from '@/lib/appwrite';
import { AppwriteException } from 'appwrite';
import { redirect, type LoaderFunction } from 'react-router';

export const driveLoader: LoaderFunction = async () => {
  try {
    const correntSession = await account.getSession({ sessionId: 'current' });
    const user = await account.get();

    return { correntSession, user };
  } catch (error) {
    if (error instanceof AppwriteException) {
      return redirect('/auth/login');
    }

    throw error;
  }
};
