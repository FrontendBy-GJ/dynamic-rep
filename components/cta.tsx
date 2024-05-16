import { Link } from 'next-view-transitions';
import { Button } from './ui/button';
import Image from 'next/image';
import manHoldingDBs from '/public/man-holding-dumbbells.webp';
import { createClient } from '@/utils/supabase/server';

export default async function Cta() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="p-4 md:p-8 flex flex-col md:flex-row lg:items-center gap-10 min-[1440px]:gap-11 py-14 md:py- lg:py-10 bg-muted rounded">
      <div className="space-y-5 md:flex-1">
        <h3 className="text-3xl font-semibold xl:text-4xl">
          Achieve Your Fitness Goals Today
        </h3>
        <p className="max-w-lg md:max-w-xl text-pretty text-sm lg:text-base">
          Track your workouts, set rep goals, and make progress with our
          exercise logger.
        </p>
        {!user ? (
          <Link href={'/login'} className="block w-fit">
            <Button>Get Started</Button>
          </Link>
        ) : (
          <Link href={'/log'} className="block w-fit">
            <Button>Start Tracking</Button>
          </Link>
        )}
      </div>
      <div className="aspect-video md:flex-1 shadow-xl rounded overflow-hidden">
        <Image
          src={manHoldingDBs}
          alt="Man holding dumbbells"
          className="object-cover w-full h-full"
          placeholder="blur"
        />
      </div>
    </div>
  );
}
