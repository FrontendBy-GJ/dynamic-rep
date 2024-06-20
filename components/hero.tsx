import { bebasNeue } from '@/lib/constants';
import Link from 'next/link';
import { Button } from './ui/button';
import { createClient } from '@/utils/supabase/server';

export default async function Hero() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <section
      className="h-[90dvh] md:h-[80dvh] max-w-[100rem] mx-auto flex flex-col justify-center bg-center xl:bg-[center_30%] relative z-50"
      style={{
        backgroundImage: `url(/man-triceps.webp)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent -z-10"
      />
      <div className={`${bebasNeue.className} text-center text-pretty`}>
        <h2 className="text-4xl text-slate-50 md:text-6xl [text-shadow:_2px_3px_10px_rgb(0_0_0_)]">
          Maximize Your Progression
        </h2>
        <p className="text-xl md:text-2xl text-slate-50 md:tracking-wide mt-2 [text-shadow:_2px_3px_10px_rgb(0_0_0_)]">
          Achieve Your Fitness Goals with DynamicRep
        </p>

        <div className="mx-auto mt-6">
          {!user ? (
            <Link href={'/login'} className="">
              <Button className="text-xl active:scale-95 transition tracking-wide">
                Get Started
              </Button>
            </Link>
          ) : (
            <Link href={'/log'} className="">
              <Button className="text-xl active:scale-95 transition tracking-wide">
                Start Tracking
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
