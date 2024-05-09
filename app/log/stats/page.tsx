import { Black_Ops_One } from 'next/font/google';

const blackOps = Black_Ops_One({ subsets: ['latin'], weight: '400' });

export default function StatsPage() {
  return (
    <div className="flex justify-center mt-[30vh]">
      <p className={`${blackOps.className} text-6xl text-muted`}>Coming Soon</p>
    </div>
  );
}
