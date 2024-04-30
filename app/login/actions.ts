'use server';

import { createClient } from '@/utils/supabase/server';
import { Provider } from '@supabase/supabase-js';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const loginWithEmail = async (email: string) => {
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: '/auth/confirm',
    },
  });

  if (error) {
    redirect('/login?message=Could not login with email');
  }
  revalidatePath('/', 'layout');
};

export const loginWithOauth = async (provider: Provider) => {
  const supabase = createClient();

  const baseURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.NEXT_PUBLIC_BASE_URL;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: baseURL + '/auth/callback',
    },
  });

  if (error) {
    redirect(`/login?message=Error signing in with ${provider}`);
  }
  return redirect(data.url);
};

export const signOut = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect('/');
};
