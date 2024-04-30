import { Black_Ops_One } from 'next/font/google';
import Link from 'next/link';
import Dropdown from './navDropdown';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import Logo from './logo';
import { NotebookPen, LineChart } from 'lucide-react';
import { createClient } from '@/utils/supabase/server';
import ThemeDropdown from './themes';
import { signOut } from '@/app/login/actions';

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

        <div className="flex items-center gap-">
          <div className="hidden md:flex items-center gap-6 mr-6">
            {navLinks.map((item, idx) => (
              <Link key={idx} href={item.href} className="">
                <Button
                  size={'sm'}
                  variant={'link'}
                  className={cn(
                    'flex items-center gap-2 hover:no-underline p-2'
                  )}
                >
                  {item.link}
                  <item.icon aria-hidden="true" className="size-5" />
                </Button>
              </Link>
            ))}
            <ThemeDropdown />
          </div>
          {!user ? (
            <Link href={'/login'}>
              <Button size={'sm'}>Sign In</Button>
            </Link>
          ) : (
            <form action={signOut}>
              <Button size={'sm'} className="hidden md:block">
                Sign Out
              </Button>
            </form>
          )}

          <div className="block md:hidden">
            <Dropdown />
          </div>
        </div>
      </section>
    </nav>
  );
}

const navLinks = [
  { href: '/log', link: 'Log', icon: NotebookPen },
  { href: '/stats', link: 'Stats', icon: LineChart },
];
