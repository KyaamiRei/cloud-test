import React, { useCallback } from 'react';
import { Button } from './ui/button';
import { account } from '@/lib/appwrite';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';

export const LogOutButton = () => {
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    try {
      await account.deleteSession({ sessionId: 'current' });

      toast.success('Sign out success');
      navigate('/', { viewTransition: true });
    } catch (err) {
      console.error(err);
      toast.error('Failed to sign out');
    }
  }, []);

  return (
    <Button color='secondary' onClick={handleLogout}>
      Sign out
    </Button>
  );
};
