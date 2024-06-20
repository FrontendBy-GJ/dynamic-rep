import { Link } from 'next-view-transitions';
import { Button } from './ui/button';
import { createClient } from '@/utils/supabase/server';
import { bebasNeue } from '@/lib/constants';

export default async function Cta() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div
      style={{
        backgroundImage: 'url(/man-holding-dumbbells.webp)',
      }}
      className="mt-10 md:mt-14 max-w-[100rem] mx-auto flex flex-col justify-center bg-cover bg-no-repeat h-[30rem] md:h-[25rem] xl:h-[34rem] md:bg-top lg:bg-[center_20%] relative"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-0"
      ></div>

      <div className="space-y-5 max-w-sm lg:max-w-lg ml-4 md:ml-8 text-balance relative">
        <h3 className="text-4xl font-semibold xl:text-5xl text-slate-50 [text-shadow:_2px_3px_10px_rgb(0_0_0_)]">
          Achieve Your Fitness Goals Today
        </h3>
        <p className="text-slate-50 [text-shadow:_2px_3px_10px_rgb(0_0_0_)]">
          Track your workouts, set rep goals, and make progress with our
          exercise logger.
        </p>
        <div className={bebasNeue.className}>
          {!user ? (
            <Link href={'/login'} className="block w-fit">
              <Button className="text-xl active:scale-95 transition tracking-wide">
                Get Started
              </Button>
            </Link>
          ) : (
            <Link href={'/log'} className="block w-fit">
              <Button className="text-xl active:scale-95 transition tracking-wide">
                Start Tracking
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
