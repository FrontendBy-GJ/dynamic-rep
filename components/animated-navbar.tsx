'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ReactNode, useState } from 'react';

export default function AnimatedNavbar({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous! && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={isHidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="sticky w-full top-0 bg-background z-[9999]"
    >
      {children}
    </motion.div>
  );
}
