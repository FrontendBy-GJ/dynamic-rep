import { bebasNeue } from '@/lib/constants';
import FeaturesCard from './features-card';
import { cn } from '@/lib/utils';

export default function Features() {
  return (
    <section className="px-4 lg:px-6 py-12 lg:py-20">
      <h2
        className={cn(
          bebasNeue.className,
          'text-3xl font-semibold xl:text-4xl text-center'
        )}
      >
        Features
      </h2>

      <div className="mt-6 flex flex-col lg:flex-row gap-10 lg:gap-6 max-w-[100rem] mx-auto text-foreground">
        <FeaturesCard
          focus="Achieve"
          title="Personalized Training with Dynamic Rep Goal System"
          info="Experience the benefits of the dynamic rep goal system, a
                  personalized approach to training that helps you reach your
                  fitness goals efficiently and effectively."
        >
          <ul className="list-disc list-outside pl-4 text-sm lg:text-base py-5 space-y-3">
            <li>Set Rep Goals for Optimal Performance</li>
            <li>Track Your Progress and Adjust Accordingly</li>
            <li>Continuously Challenge Yourself and Make Gains</li>
          </ul>
        </FeaturesCard>

        <FeaturesCard
          focus="Efficiency"
          title="Maximize Your Workout Efficiency and Progression"
          info="The dynamic rep goal system is designed to optimize your
                  workouts by setting rep targets and gradually increasing
                  weights for maximum efficiency and progression."
        >
          <div className="grid lg:grid-cols-2 gap-6 py-5 relative">
            <div className="space-y-2">
              <h3
                className={cn(
                  'font-semibold text-2xl tracking-wide',
                  bebasNeue.className
                )}
              >
                Target Reps
              </h3>
              <p className="text-pretty lg:text-balance">
                Set specific rep goals for each exercise to track your progress
                and push yourself.
              </p>
            </div>
            <div className="space-y-2">
              <h3
                className={cn(
                  'font-semibold text-2xl tracking-wide',
                  bebasNeue.className
                )}
              >
                Weight Progression
              </h3>
              <p className="text-pretty lg:text-balance">
                Gradually increase weights as you achieve your rep goals,
                ensuring continuous improvement.
              </p>
            </div>
          </div>
        </FeaturesCard>
      </div>
    </section>
  );
}
