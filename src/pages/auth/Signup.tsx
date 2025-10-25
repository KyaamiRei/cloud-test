import { Link } from 'react-router';

import { SignupForm } from '@/components/SignupForm';

export const Signup = () => {
  return (
    <div className='bg-muted flex min-h-svh flex-col items-center justify-center gap-6  p-6 md:p-10'>
      <div className='flex w-full max-w-sm flex-col gap-6'>
        <Link to='/' className='flex items-center gap-2 self-center font-medium' viewTransition>
          {/* <div className='flex size-6 items-center justify-center'>Image</div> */}
          Cloud
        </Link>

        <SignupForm />
      </div>
    </div>
  );
};
