'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useForm, FieldErrors, UseFormRegister } from 'react-hook-form';
import { LoaderCircle, Mail } from 'lucide-react';
import { loginWithEmail } from './actions';
import OAuthButtons from './oauth-btns';

type LoginFormContentProps = {
  errors: FieldErrors<{
    email: string;
  }>;
  register: UseFormRegister<{
    email: string;
  }>;
  isSubmitting: boolean;
};
function LoginFormContent({
  errors,
  register,
  isSubmitting,
}: LoginFormContentProps) {
  return (
    <>
      <div className={cn('relative', errors.email && 'text-red-500')}>
        <Input
          disabled={isSubmitting}
          type="email"
          placeholder="johndoe@email.com"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
              message: 'Invalid email address',
            },
          })}
        />
        <p className="absolute -bottom-5 text-xs">{errors.email?.message}</p>
      </div>
      <Button
        type="submit"
        className="w-full mt-6 flex gap-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          <>
            <Mail /> Sign in with Email
          </>
        )}
      </Button>
    </>
  );
}

export default function LoginForm({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (formData: { email: string }) => {
    await loginWithEmail(formData.email);
  };

  if (isSubmitSuccessful) {
    return (
      <p className="text-center max-w-md md:max-w-sm mx-auto">
        A magic link has been sent to your email. Please check your inbox and
        click on the link to continue. Note that the link will open in a new
        tab. You can close this page.
      </p>
    );
  }

  return (
    <div className="px-6 md:px-10 max-w-md min-w-96 w-full lg:max-w-lg space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Create an account</h2>
        <p className="text-lg text-muted-foreground">
          Enter your email below to create your account
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginFormContent
          errors={errors}
          register={register}
          isSubmitting={isSubmitting}
        />
      </form>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <OAuthButtons />

      {searchParams.message && (
        <p className="text-center text-red-500">{searchParams.message}</p>
      )}
    </div>
  );
}
