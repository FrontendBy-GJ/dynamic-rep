import { LiaDumbbellSolid } from 'react-icons/lia';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { bebasNeue } from '@/lib/constants';

type FeaturesCardProps = {
  focus: string;
  title: string;
  info: string;
  children: ReactNode;
};

export default function FeaturesCard({
  focus,
  title,
  info,
  children,
}: FeaturesCardProps) {
  return (
    <div className="flex-1 max-w-3xl w-full mx-auto ring ring-foreground">
      <div className="text-background bg-foreground px-4 lg:px-6 py-4">
        <div className="flex items-center gap-2">
          <LiaDumbbellSolid aria-hidden="true" className="size-10" />
          <p className="text-lg font-medium">{focus}</p>
        </div>

        <h2
          className={cn(
            bebasNeue.className,
            'text-3xl font-semibold xl:text-4xl text-balance my-2'
          )}
        >
          {title}
        </h2>
      </div>
      <div className="px-4 py-4 md:py-6 lg:px-6">
        <p className="md:max-w- text-pretty">{info}</p>

        {children}
      </div>
    </div>
  );
}
