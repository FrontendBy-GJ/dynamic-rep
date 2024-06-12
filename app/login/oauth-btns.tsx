'use client';

import React from 'react';
import { Provider } from '@supabase/supabase-js';
import { FaGithub } from 'react-icons/fa';
import { loginWithOauth } from './actions';
import withLoading, { WithLoadingProps } from '@/components/withLoading';
import LoadingButton from '@/components/loading-button';

const Button = withLoading(LoadingButton);

type OAuthPoviders = {
  name: Provider;
  displayName: string;
  icon?: JSX.Element;
};

export default function OAuthButtons() {
  const providers: OAuthPoviders[] = [
    {
      name: 'github',
      displayName: 'Github',
      icon: <FaGithub className="size-6" />,
    },
  ];

  return (
    <>
      {providers.map((provider) => (
        <Button
          key={provider.name}
          onClick={async () => await loginWithOauth(provider.name)}
          className="flex items-center gap-2 w-full"
        >
          {provider.icon}
          {provider.displayName}
        </Button>
      ))}
    </>
  );
}
