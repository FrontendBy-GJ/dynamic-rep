import Image from 'next/image';
import manPosing from '/public/man-posing.jpeg';
import Link from 'next/link';
import { blackOps } from '@/components/navbar';
import Logo from '@/components/logo';
import LoginForm from './login-form';

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
            width={2730}
            height={4096}
            priority
            className="h-full w-full object-cover"
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
