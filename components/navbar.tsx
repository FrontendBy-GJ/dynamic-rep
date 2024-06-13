import { Link } from 'next-view-transitions';
import Dropdown from './navDropdown';
import { Button } from './ui/button';
import Logo from './logo';
import { createClient } from '@/utils/supabase/server';
import ThemeDropdown from './themes';
import { blackOps } from '@/lib/constants';
import { Dumbbell, NotebookPen } from 'lucide-react';
import { signOut } from '@/app/login/actions';

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

        <div className="flex items-center gap-4">
          <ThemeDropdown />
          {!user ? (
            <Link href={'/login'}>
              <Button
                size={'sm'}
                className="shadow-xl active:scale-95 active:translate-y-0.5 active:shadow-none"
              >
                Sign In
              </Button>
            </Link>
          ) : (
            <>
              <menu className="hidden md:flex md:items-center md:gap-4">
                <li>
                  <Button variant={'link'} size={'sm'}>
                    <Link href={'/log'} className="flex items-center gap-2">
                      Log
                      <NotebookPen aria-hidden="true" />
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button variant={'link'} size={'sm'}>
                    <Link
                      href={'/log/workout'}
                      className="flex items-center gap-2"
                    >
                      Workout Plan
                      <Dumbbell aria-hidden="true" />
                    </Link>
                  </Button>
                </li>
                <li>
                  <form action={signOut}>
                    <Button
                      size={'sm'}
                      className="shadow-xl active:scale-95 active:translate-y-0.5 active:shadow-none"
                    >
                      Sign out
                    </Button>
                  </form>
                </li>
              </menu>
              <div className="md:hidden">
                <Dropdown />
              </div>
            </>
          )}
        </div>
      </section>
    </nav>
  );
}
