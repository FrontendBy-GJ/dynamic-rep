import Link from 'next/link';
import { Button } from './ui/button';

export default function Cta() {
  return (
    <div className="p-4 md:p-8 flex flex-col lg:flex-row lg:items-center gap-10 min-[1440px]:gap-11 py-14 md:py-20">
      <div className="space-y-5 lg:flex-1">
        <h3 className="text-3xl font-semibold xl:text-4xl">
          Achieve Your Fitness Goals Today
        </h3>
        <p className="max-w-lg md:max-w-xl text-pretty text-sm lg:text-base">
          Track your workouts, set rep goals, and make progress with our
          exercise logger.
        </p>
        <Button asChild>
          <Link href={'/sign-in'}>Get Started</Link>
        </Button>
      </div>
      <div className="aspect-video lg:flex-1">
        <div className="h-full w-full bg-slate-600" />
      </div>
    </div>
  );
}
