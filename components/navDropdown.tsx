import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarImage } from './ui/avatar';
import { Link } from 'next-view-transitions';
import { Button } from './ui/button';
import { createClient } from '@/utils/supabase/server';
import { signOut } from '@/app/login/actions';
import { blackOps } from '@/lib/constants';
import { ChevronDownIcon } from 'lucide-react';

export default async function Dropdown() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user?.id!)
    .single();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-1 rounded-full flex flex-row-reverse gap-1 items-center group/trigger focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0">
        <ChevronDownIcon className="group-aria-expanded/trigger:rotate-180 duration-500 transition-transform" />
        {data?.image_url ? (
          <Avatar>
            <AvatarImage src={data?.image_url || ''} />
          </Avatar>
        ) : (
          <Avatar className="text-2xl uppercase">
            <div
              className={`${blackOps.className} flex justify-center items-center size-10 bg-muted text-foreground`}
            >
              {data?.email[0]}
            </div>
          </Avatar>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        sideOffset={10}
        align="end"
        className="w-52"
      >
        <DropdownMenuLabel className="text-center tracking-wider text-muted-foreground">
          {!data?.display_name ? data?.email : data.display_name}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={'/log'} className="block">
          <DropdownMenuItem className="py-4 cursor-pointer">
            Log
          </DropdownMenuItem>
        </Link>
        <Link href={'/log/workout'} className="block">
          <DropdownMenuItem className="py-4 cursor-pointer">
            Workout Plan
          </DropdownMenuItem>
        </Link>
        <Link href={'/log/stats'} className="block">
          <DropdownMenuItem className="py-4 cursor-pointer">
            Stats
          </DropdownMenuItem>
        </Link>
        <form action={signOut}>
          <DropdownMenuItem className="w-full" asChild>
            <Button className="cursor-pointer w-full transition">
              Sign Out
            </Button>
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
