import { Link, useNavigate } from 'react-router';

import { Button } from '@/components/ui/button';

import { ArrowLeft } from 'lucide-react';

export const RootError = () => {
  const navigate = useNavigate();

  return (
    <section className='flex min-h-screen items-start bg-background py-16 md:items-center'>
      <div className='mx-auto max-w-container grow px-4 md:px-10'>
        <div className='w-full max-w-container grow px-4 md:px-10'>
          <div className='space-y-6 md:space-y-6'>
            <div className='grid gap-3'>
              <span className='font-semibold text-primary'>404 Error</span>
              <h1 className='text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl'>Page not found</h1>
            </div>

            <p className='text-muted-foreground text-sm md:text-xl'>
              Sorry, we couldn't find the page you're looking for.
            </p>
          </div>

          <div className='flex flex-col-reverse gap-3 sm:flex-row'>
            <Button variant='outline' size='lg' onClick={() => navigate(-1)}>
              <ArrowLeft className='text-muted-foreground' />
              Go Back
            </Button>

            <Button size='lg' asChild>
              <Link to='/drive/home' viewTransition>
                Take me Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
