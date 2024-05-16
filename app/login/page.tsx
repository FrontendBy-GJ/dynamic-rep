import Image from 'next/image';
import manPosing from '/public/man-posing.webp';
import { Link } from 'next-view-transitions';
import Logo from '@/components/logo';
import LoginForm from './login-form';
import { blackOps } from '@/lib/constants';

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="min-h-screen flex">
        <div className="hidden md:block flex-1 h-screen">
          <Image
            src={manPosing}
            alt="Man posing"
            priority
            className="h-full w-full object-cover"
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col flex-1 gap-10 mt-[30vh] items-center">
          <Link href={'/'} className={`${blackOps.className} text-5xl`}>
            <span className="sr-only">DynamicRep</span>
            <Logo />
          </Link>

          <LoginForm searchParams={searchParams} />
        </div>
      </div>
    </div>
  );
}
