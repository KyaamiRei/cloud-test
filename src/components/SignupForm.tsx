import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2Icon } from 'lucide-react';
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useFetcher } from 'react-router';
import { toast } from 'sonner';
import { z } from 'zod';

import type { SubmitHandler } from 'react-hook-form';

import { handleAuthLogin } from '@/lib/auth';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from './ui/form';
import { Input } from './ui/input';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required').max(128, 'Name must be less than 128 charapters'),
  email: z.email('Please enter a valid email adress'),
  password: z.string().min(8, 'Password must be at least 8 charapters long.'),
});

export const SignupForm = ({ className, ...props }: React.ComponentProps<'div'>) => {
  const fetcher = useFetcher();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const isLoading = fetcher.state != 'idle';

  useEffect(() => {
    const error = fetcher.data?.error;

    if (error) {
      toast.error(error.message);
    }
  }, [fetcher.data]);

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = useCallback(
    (values) => {
      fetcher.submit(values, {
        method: 'POST',
        encType: 'application/json',
      });
    },
    [fetcher]
  );

  return (
    <div className={cn('flex flex-col gap-6 ', className)} {...props}>
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-xl'>Create an account</CardTitle>

          <CardDescription>Create account with your Goggle account</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-6 '>
              <div className='flex flex-col gap-4'>
                <Button type='button' variant='outline' className='w-full' onClick={handleAuthLogin}>
                  Login with Goggle
                </Button>
              </div>

              <div className='after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0  after:flex after:items-center after:border-t'>
                <span className='bg-card text-muted-foreground relative z-10 px-2'> Or continue with</span>
              </div>

              <div className='grid gap-6'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input type='text' placeholder='Your name' {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type='email' placeholder='john@example.com' {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type='password' placeholder='*************' {...field} className='tracking-wider' />
                      </FormControl>

                      <FormDescription>Must be at least 8 charapters.</FormDescription>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type='submit' className='w-full' disabled={isLoading}>
                  {isLoading && <Loader2Icon className='animate-spin' />}
                  Get started
                </Button>
              </div>

              <div className='text-center text-sm'>
                Already have account?{' '}
                <Link to='/auth/login' className='underline underline-offset-4' viewTransition>
                  Login
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className='text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4'>
        By clicking continue, you agree to our <a href='#'>Terms of Service</a> and <a href='#'>Privasy Policy</a>
      </div>
    </div>
  );
};
