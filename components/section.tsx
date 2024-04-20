import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

type SectionProps = {
  focus: string;
  title: string;
  paragraph: string;
  center?: boolean;
  children: React.ReactNode;
};
export default function Section({
  focus,
  title,
  paragraph,
  center,
  children,
}: SectionProps) {
  return (
    <section
      className={cn(
        'grid auto-rows-max gap-10 md:gap-6 md:grid-cols-2 py-20 md:py-14 lg:py-28 items-center',
        center && 'md:grid-cols-1 place-items-center text-center'
      )}
    >
      <div className="space-y-4 p-4 md:p-8">
        <p className="text-lg font-medium">{focus}</p>
        <h2
          className={cn(
            'text-3xl font-semibold xl:text-4xl',
            center && 'md:max-w-2xl mx-auto'
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            'max-w-lg text-pretty text-sm lg:text-base',
            center && 'mx-auto max-w-3xl md:px-8'
          )}
        >
          {paragraph}
        </p>
        {center ? null : children}
        {center ? null : (
          <Button asChild variant={'link'} className="p-0">
            <Link
              tabIndex={0}
              href={'/sign-in'}
              className="flex items-center gap-2"
            >
              Sign up
              <FaChevronRight aria-hidden="true" />
            </Link>
          </Button>
        )}
      </div>
      {center && children}
      {center ? null : (
        <div className="h-[24rem] md:h-96 lg:h-[600px] w-full self-start md:self-center">
          <div className="h-full w-full bg-slate-600" />
        </div>
      )}
      {center && (
        <Button asChild variant={'link'} className="self-start">
          <Link
            tabIndex={0}
            href={'/sign-in'}
            className="flex items-center gap-2"
          >
            Sign up
            <FaChevronRight aria-hidden="true" />
          </Link>
        </Button>
      )}
    </section>
  );
}
