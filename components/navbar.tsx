'use client';

import { Black_Ops_One } from 'next/font/google';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const blackOps = Black_Ops_One({ subsets: ['latin'], weight: '400' });

export default function Navbar() {
  const pathname = usePathname();

  if (pathname === '/sign-in') return null;

  return (
    <nav className={`h-16`}>
      <section className="max-w-7xl mx-auto px-6 md:px-4 lg:px-0 flex justify-between items-center h-full">
        <Link href={'/'}>
          <h1 className={`${blackOps.className} text-xl md:text-3xl`}>
            DynamicRep
          </h1>
        </Link>
        <Link href={'/sign-in'}>
          <Button size={'sm'}>Start Tracking</Button>
        </Link>
      </section>
    </nav>
  );
}
