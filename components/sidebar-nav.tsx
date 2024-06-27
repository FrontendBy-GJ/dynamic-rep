'use client';

import { Link } from 'next-view-transitions';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { blackOps } from '@/lib/constants';

export default function SidebarNav({
  sidebarLinks,
}: {
  sidebarLinks: {
    title: string;
    href: string;
  }[];
}) {
  const pathname = usePathname();

  return (
    <menu className="flex items-center border-b">
      {sidebarLinks.map((link) => (
        <li
          key={link.title}
          className={cn(
            'h-11 text-lg',
            'border-t first:border-l first:border-r last:border-l last:border-r',
            'hover:bg-foreground hover:text-background',
            pathname === link.href && 'bg-foreground text-background'
          )}
        >
          <Link
            href={link.href}
            className={`${blackOps.className} px-6 h-full flex items-center`}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </menu>
  );
}
