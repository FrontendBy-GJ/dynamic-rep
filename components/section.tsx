import { Bebas_Neue } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import { FaChevronRight } from 'react-icons/fa';
import Image, { StaticImageData } from 'next/image';
import { LiaDumbbellSolid } from 'react-icons/lia';
import { createClient } from '@/utils/supabase/server';

export const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });

type SectionProps = {
  focus?: string;
  title: string;
  paragraph: string;
  image?: StaticImageData;
  alt?: string;
  priority?: boolean;
  center?: boolean;
  children: React.ReactNode;
};
export default async function Section({
  focus,
  title,
  paragraph,
  image,
  alt,
  priority,
  center,
  children,
}: SectionProps) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <section
      className={cn(
        'grid auto-rows-max gap-10 md:gap-6 md:grid-cols-2 py-10 md:py-14 items-center',
        center && 'md:grid-cols-1 place-items-center text-center'
      )}
    >
      <div className="space-y-4 p-4 md:p-8">
        {focus && (
          <div className="flex items-center gap-2">
            <LiaDumbbellSolid aria-hidden="true" className="size-10" />
            <p className="text-lg font-medium">{focus}</p>
          </div>
        )}
        <h2
          className={cn(
            bebasNeue.className,
            'text-3xl font-semibold xl:text-4xl text-balance',
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
        {center ? null : !user ? (
          <Link href={'/login'}>
            <Button variant={'link'} className="flex items-center gap-2">
              Sign up
              <FaChevronRight aria-hidden="true" />
            </Button>
          </Link>
        ) : null}
      </div>
      {center && children}
      {center ? null : (
        <div className="h-[24rem] md:h-96 lg:h-[600px] w-full self-start md:self-center shadow-xl rounded overflow-hidden">
          <Image
            src={image!}
            alt={alt!}
            priority={priority}
            className="object-cover h-full w-full"
            placeholder="blur"
          />
        </div>
      )}
      {center &&
        (!user ? (
          <Link href={'/login'} className="self-start">
            <Button variant={'link'} className="flex items-center gap-2">
              Sign up
              <FaChevronRight aria-hidden="true" />
            </Button>
          </Link>
        ) : null)}
    </section>
  );
}
