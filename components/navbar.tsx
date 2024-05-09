import { Black_Ops_One } from 'next/font/google';
import Link from 'next/link';
import Dropdown from './navDropdown';
import { Button } from './ui/button';
import Logo from './logo';
import { createClient } from '@/utils/supabase/server';
import ThemeDropdown from './themes';

export const blackOps = Black_Ops_One({ subsets: ['latin'], weight: '400' });

export default async function Navbar() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className={`h-16`}>
      <section className="max-w-7xl mx-auto px-4 md:px-6 xl:px-0 flex justify-between items-center h-full">
        <Link href={'/'} aria-label="DynamicRep">
          <h1 className={`${blackOps.className} text-2xl md:text-3xl`}>
            <span className="sr-only">DynamicRep</span>
            <Logo />
          </h1>
        </Link>

        <div className="flex items-center gap-6">
          <ThemeDropdown />
          {!user ? (
            <Link href={'/login'}>
              <Button size={'sm'}>Sign In</Button>
            </Link>
          ) : (
            <Dropdown />
          )}
        </div>
      </section>
    </nav>
  );
}
