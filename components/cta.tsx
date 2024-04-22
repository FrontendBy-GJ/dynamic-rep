import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import manHoldingDBs from '/public/man-holding-dumbbells.jpeg';

export default function Cta() {
  return (
    <div className="p-4 md:p-8 flex flex-col lg:flex-row lg:items-center gap-10 min-[1440px]:gap-11 py-14 md:py-20 lg:py-10 bg-secondary rounded">
      <div className="space-y-5 lg:flex-1">
        <h3 className="text-3xl font-semibold xl:text-4xl">
          Achieve Your Fitness Goals Today
        </h3>
        <p className="max-w-lg md:max-w-xl text-pretty text-sm lg:text-base">
          Track your workouts, set rep goals, and make progress with our
          exercise logger.
        </p>
        <Link href={'/sign-in'} className="block w-fit">
          <Button>Get Started</Button>
        </Link>
      </div>
      <div className="aspect-video lg:flex-1 shadow-xl rounded overflow-hidden">
        <Image
          src={manHoldingDBs}
          alt="Man holding dumbbells"
          width={5472}
          height={3648}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
