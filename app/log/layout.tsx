import Navbar from '@/components/navbar';
import SidebarNav from '@/components/sidebar-nav';
import Link from 'next/link';
import React from 'react';

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
  return (
    <>
      <Navbar />
      <div className="px-4 md:px-6 xl:px-0 max-w-7xl mx-auto mt-6">
        <aside>
          <SidebarNav sidebarLinks={sidebarNavLinks} />
        </aside>
        {children}
      </div>
    </>
  );
}
