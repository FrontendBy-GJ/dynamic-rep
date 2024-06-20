import RepGoalList from './repGoalList';
import unrackingDB from '../public/man-unracking-dumbbells.webp';
import barbellCurls from '../public/man-barbell-curls.webp';
import womanOHP from '../public/woman-overhead-press.webp';
import { bebasNeue } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function About() {
  return (
    <section className="py-10 md:py-14 max-w-7xl mx-auto px-4 md:px-6 xl:px-0">
      <div className="">
        <h3
          className={cn(
            bebasNeue.className,
            'text-3xl font-semibold xl:text-4xl text-balance text-center'
          )}
        >
          Introducing the Dynamic Rep Goal System
        </h3>
        <p
          className={cn(
            'max-w-lg text-pretty text-center lg:max-w-3xl mx-auto lg:px-8 my-6'
          )}
        >
          Our exercise logger uses the Dynamic Rep Goal System to help you reach
          your fitness goals. Set rep goal targets and adjust weights
          dynamically for optimal progress.
        </p>
      </div>
      <ul className="grid md:grid-cols-3 auto-cols- gap-10 text-center">
        <RepGoalList
          title="What is a Rep Goal Target?"
          paragraph="A rep goal target is the total number of reps you aim to achieve
              when adding up each set of an exercise."
          img={unrackingDB}
          alt="Man unracking dumbbells"
        />
        <RepGoalList
          title="How Does the Dynamic Rep Goal System Work?"
          paragraph="Our system adjusts weights based on your rep goal targets,
              allowing for progressive overload and continuous improvement."
          img={barbellCurls}
          alt="Man doing barbell curls"
        />
        <RepGoalList
          title="Set Rep Goal Targets for Optimal Progress"
          paragraph="Determine your rep goal targets to work within your desired rep
              range and achieve maximum results."
          img={womanOHP}
          alt="Woman overhead pressing"
        />
      </ul>
    </section>
  );
}
