'user client';

import { SunMoon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

import { Button } from './ui/button';
import { useTheme } from 'next-themes';

export default function ThemeDropdown() {
  const { themes, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="rounded-full">
        <Button size={'icon'} variant={'ghost'} name="Theme">
          <SunMoon aria-hidden="true" className="size-8" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" sideOffset={10} align="end">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme}
            className="capitalize py-3 cursor-pointer"
            onClick={() => setTheme(theme)}
          >
            {theme}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
