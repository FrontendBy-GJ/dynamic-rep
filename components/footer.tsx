'use client';

import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { blackOps } from './navbar';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const date = new Date();
  const pathname = usePathname();

  if (pathname === '/sign-in') return null;

  return (
    <footer className={`py-10 text-center`}>
      <section className="max-w-7xl mx-auto">
        <div className="space-y-10 lg:flex justify-between items-center lg:space-y-0">
          <div className={`${blackOps.className} text-3xl`}>DynamicRep</div>
          <div className="flex gap-4 text-xl justify-center">
            <FaFacebook className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaXTwitter className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
          </div>
        </div>

        <hr className="my-10" />

        <div className="pb-10 text-muted-foreground md:flex md:flex-row-reverse md:items-center justify-center gap-10">
          <div className="flex flex-col gap-4 text-sm md:flex-row">
            <span className="underline underline-offset-2 cursor-pointer">
              Privacy Policy
            </span>
            <span className="underline underline-offset-2 cursor-pointer">
              Terms and Conditions
            </span>
            <span className="underline underline-offset-2 cursor-pointer">
              Cookie Policy
            </span>
          </div>
          <small className="mt-8 block md:mt-0">
            &copy; {date.getFullYear()} DynamicRep. All rights reserved.
          </small>
        </div>
      </section>
    </footer>
  );
}
