import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2Icon, ArrowLeftIcon } from 'lucide-react';
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useFetcher } from 'react-router';
import { toast } from 'sonner';
import { z } from 'zod';

import type { SubmitHandler } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';

const formSchema = z.object({
  email: z.email('Please enter a valid email address'),
});

export const ForgotPasswordForm = ({ className, ...props }: React.ComponentProps<'div'>) => {
  const fetcher = useFetcher();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const isLoading = fetcher.state != 'idle';

  useEffect(() => {
    if (!fetcher.data) return;

    if (fetcher.data.ok) {
      toast.success('Password reset email sent! Check your inbox.');
      form.reset();
    } else {
      toast.error(fetcher.data.error ?? 'Somethin went wrong');
    }
  }, [fetcher.data, form]);

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
          <CardTitle className='text-xl'>Forgot Password</CardTitle>
          <CardDescription>Enter your email to reset your password</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-6 '>
              <div className='grid gap-6'>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type='email' placeholder='Enter your email' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type='submit' className='w-full' disabled={isLoading}>
                  {isLoading && <Loader2Icon className='animate-spin' />}
                  Send Reset Email
                </Button>
              </div>

              <div className='text-center text-sm'>
                <Button variant='link' asChild>
                  <Link to='/auth/login' className='underline underline-offset-4' viewTransition>
                    <ArrowLeftIcon />
                    Back to Login
                  </Link>
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
