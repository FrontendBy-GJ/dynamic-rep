import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarImage } from './ui/avatar';
import { blackOps } from './navbar';
import Link from 'next/link';
import { Button } from './ui/button';
import { createClient } from '@/utils/supabase/server';
import { signOut } from '@/app/login/actions';

export default async function Dropdown() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user?.id!)
    .single();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full">
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
      <DropdownMenuContent side="right" sideOffset={10} className="mt-5">
        <DropdownMenuLabel className="text-center">
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="space-y-3">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href={'/log'}>Log</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href={'/settings'}>Settings</Link>
          </DropdownMenuItem>
          <form action={signOut}>
            <DropdownMenuItem className="w-full" asChild>
              <Button className="cursor-pointer w-full">Sign Out</Button>
            </DropdownMenuItem>
          </form>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
