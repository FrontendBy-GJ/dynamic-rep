import Navbar from '@/components/navbar';
import SidebarNav from '@/components/sidebar-nav';
import React from 'react';
import { ViewTransitions } from 'next-view-transitions';
import { headers } from 'next/headers';

const sidebarNavLinks = [
  {
    title: 'Log',
    href: '/log',
  },
  {
    title: 'Workout',
    href: '/log/workout',
  },
  {
    title: 'Stats',
    href: '/log/stats',
  },
];

export default function LogLayout({ children }: { children: React.ReactNode }) {
  const headersList = headers();
  const currentPath = headersList.get('x-current-path') || '/';

  return (
    <ViewTransitions>
      <Navbar currentPath={currentPath} />
      <div className="px-4 lg:px-6 max-w-[100rem] mx-auto mt-6">
        <aside>
          <SidebarNav sidebarLinks={sidebarNavLinks} />
        </aside>
        {children}
      </div>
    </ViewTransitions>
  );
}
